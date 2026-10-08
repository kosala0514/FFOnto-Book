"""
Build the FFOnto Book (static site for GitHub Pages). Standard library only.

    python src/build.py            # writes index.html, docs/<chapter>/index.html, 404.html, assets/search-index.json

Edit:
    src/nav.json            chapters and sections (same structure as the navSections array)
    src/content/<slug>.html chapter text  (<h2 id="..."> ids must match the #anchors in nav.json)
    src/home.html           title page
    src/site.json           title, version, links ({{key}} placeholders in any page)
Links inside content are written from the site root ("/docs/introduction#what-is-ffonto");
the build turns them into relative links, so the site works under any GitHub Pages path.
"""
import html
import json
import re
import sys
from pathlib import Path

SRC = Path(__file__).resolve().parent
OUT = SRC.parent
SITE = json.loads((SRC / "site.json").read_text(encoding="utf-8"))
NAV = json.loads((SRC / "nav.json").read_text(encoding="utf-8"))
TEMPLATE = (SRC / "template.html").read_text(encoding="utf-8")
RAMP = ["#3b8b3e", "#1d4f91", "#e3b21b", "#e0761b", "#b9311f"]   # fire-danger rating classes


def slug(href):
    return href.strip("/").split("/")[-1].split("#")[0]


def placeholders(text):
    for k, v in SITE.items():
        text = text.replace("{{" + k + "}}", str(v))
    return text


def relink(text, root):
    """href="/docs/x#a"  ->  href="{root}docs/x/#a"   (root = "../../" for chapter pages)."""
    def fix(m):
        path, frag = m.group(2), m.group(3) or ""
        path = path.strip("/")
        url = root + (path + "/" if path else "")
        return f'{m.group(1)}="{url or "./"}{frag}"'
    return re.sub(r'(href)="/(?!/)([^"#]*)(#[^"]*)?"', fix, text)


# ------------------------------------------------------------------ syntax highlighting (build time, no JS needed)
LANGS = {
    "sparql": [("com", r"#[^\n]*"), ("str", r'"(?:[^"\\\n]|\\.)*"'), ("iri", r"<[^<>\s]*>"), ("var", r"[?$]\w+"),
               ("kw", r"\b(?:PREFIX|SELECT|DISTINCT|WHERE|OPTIONAL|FILTER|NOT|EXISTS|BIND|AS|GROUP|BY|ORDER|LIMIT|"
                      r"COUNT|GRAPH|IF|BOUND|COALESCE|UNION|VALUES|CONSTRUCT|INSERT|ASK|DESC|ASC|STR|STRAFTER|REPLACE|GROUP_CONCAT)\b"),
               ("pn", r"\b[A-Za-z][\w-]*:[A-Za-z_][\w.-]*\w|\ba\b"), ("num", r"\b\d+(?:\.\d+)?\b")],
    "turtle": [("com", r"#[^\n]*"), ("str", r'"(?:[^"\\\n]|\\.)*"(?:@[\w-]+)?'), ("iri", r"<[^<>\s]*>"),
               ("kw", r"@prefix|@base|\ba\b"), ("pn", r"\b[A-Za-z][\w-]*:[A-Za-z_][\w.-]*\w"), ("num", r"\b\d+(?:\.\d+)?\b")],
    "json": [("key", r'"(?:[^"\\\n]|\\.)*"(?=\s*:)'), ("str", r'"(?:[^"\\\n]|\\.)*"'),
             ("kw", r"\b(?:true|false|null)\b"), ("num", r"-?\b\d+(?:\.\d+)?\b")],
    "python": [("com", r"#[^\n]*"), ("str", r'"(?:[^"\\\n]|\\.)*"|\'(?:[^\'\\\n]|\\.)*\''),
               ("kw", r"\b(?:from|import|for|in|print|open|def|return|if|else|as|with)\b")],
    "shell": [("com", r"(?<!\S)#[^\n]*"), ("str", r'"(?:[^"\\\n]|\\.)*"'),
              ("kw", r"(?<![^\n])(?:ollama|pip|python3?|uvicorn|streamlit|curl|bash|git)\b")],
    "bibtex": [("kw", r"@\w+"), ("key", r"\b\w+(?=\s*=)")],
}


def highlight(code, lang):
    rules = LANGS.get(lang)
    if not rules:
        return html.escape(code)
    rx = re.compile("|".join(f"(?P<{n}{i}>{p})" for i, (n, p) in enumerate(rules)))
    out, pos = [], 0
    for m in rx.finditer(code):
        out.append(html.escape(code[pos:m.start()]))
        kind = re.sub(r"\d+$", "", m.lastgroup)
        out.append(f'<span class="tk-{kind}">{html.escape(m.group())}</span>')
        pos = m.end()
    out.append(html.escape(code[pos:]))
    return "".join(out)


def code_blocks(text):
    def repl(m):
        lang, raw = m.group(1), html.unescape(m.group(2)).strip("\n")
        label = {"sparql": "SPARQL", "turtle": "Turtle", "json": "JSON", "python": "Python", "shell": "Shell",
                 "bibtex": "BibTeX", "text": "CSV"}.get(lang, lang)
        return (f'<div class="code"><div class="code-head"><span>{label}</span>'
                f'<button type="button" class="copy">Copy</button></div>'
                f'<pre><code class="language-{lang}">{highlight(raw, lang)}</code></pre></div>')
    return re.sub(r'<pre><code class="language-(\w+)">(.*?)</code></pre>', repl, text, flags=re.S)


# ------------------------------------------------------------------ page parts
def sidebar(current, root):
    out = ['<ol class="chapters">']
    for i, ch in enumerate(NAV):
        s = slug(ch["href"])
        cur = ' aria-current="page"' if s == current else ""
        cls = " is-current" if s == current else ""
        out.append(f'<li class="chapter-item{cls}"><a class="chapter-link" href="{ch["href"]}"{cur}>'
                   f'<span class="num">{i + 1}</span>{html.escape(ch["title"])}</a>')
        out.append('<ul class="sections">' + "".join(
            f'<li><a href="{it["href"]}">{html.escape(it["label"])}</a></li>' for it in ch["items"]) + "</ul></li>")
    out.append("</ol>")
    return relink("".join(out), root)


def toc(body):
    heads = re.findall(r'<h2 id="([^"]+)"[^>]*>(.*?)</h2>', body, re.S)
    if not heads:
        return ""
    items = "".join(f'<li><a href="#{i}">{t}</a></li>' for i, t in heads)
    return f'<p class="toc-title">On this page</p><ul>{items}</ul>'


def pager(i, root):
    links = []
    if i > 0:
        p = NAV[i - 1]
        links.append(f'<a class="prev" href="{p["href"]}"><span>Previous</span>{html.escape(p["title"])}</a>')
    else:
        links.append('<a class="prev" href="/"><span>Previous</span>Title page</a>')
    if i < len(NAV) - 1:
        n = NAV[i + 1]
        links.append(f'<a class="next" href="{n["href"]}"><span>Next</span>{html.escape(n["title"])}</a>')
    return relink('<nav class="pager" aria-label="Chapters">' + "".join(links) + "</nav>", root)


def progress(i):
    """Reading progress through the whole book, drawn in the five fire-danger rating colours."""
    stops = ", ".join(f"{c} {k * 20}% {(k + 1) * 20}%" for k, c in enumerate(RAMP))
    done = 0 if i is None else i / len(NAV)
    return (f'<div class="progress-ramp" style="background:linear-gradient(90deg, {stops})"></div>'
            f'<div class="progress-cover" data-chapter="{-1 if i is None else i}" data-chapters="{len(NAV)}" '
            f'style="left:{done * 100:.3f}%"></div>')


def render(body, title, root, current=None, index=None, body_class="", toc_html=""):
    page = TEMPLATE
    parts = {"BODY": body, "SIDEBAR": sidebar(current, root), "TOC": toc_html,
             "PAGER": pager(index, root) if index is not None else "", "PROGRESS": progress(index)}
    for k, v in parts.items():
        page = page.replace("{{" + k + "}}", v)
    page = page.replace("{{root}}", root).replace("{{page_title}}", html.escape(title))
    page = page.replace("{{body_class}}", body_class)
    return placeholders(page)


def strip_tags(t):
    return " ".join(html.unescape(re.sub(r"<[^>]+>", " ", t)).split())


# ------------------------------------------------------------------ build
def main():
    errors, index = [], []
    root2 = "../../"
    for i, ch in enumerate(NAV):
        s = slug(ch["href"])
        f = SRC / "content" / f"{s}.html"
        if not f.exists():
            errors.append(f"missing {f}")
            continue
        content = placeholders(f.read_text(encoding="utf-8"))
        ids = set(re.findall(r'id="([^"]+)"', content))
        for it in ch["items"]:
            anchor = it["href"].split("#", 1)[1] if "#" in it["href"] else None
            if anchor and anchor not in ids:
                errors.append(f'{s}: nav item "{it["label"]}" points to #{anchor}, but no element has id="{anchor}"')
        body = (f'<article class="chapter"><p class="chapter-no">Chapter {i + 1}</p>'
                f'<h1>{html.escape(ch["title"])}</h1>{code_blocks(content)}</article>')
        body = relink(body, root2)
        out = OUT / "docs" / s / "index.html"
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(render(body, f'{ch["title"]} | {SITE["title"]}', root2, s, i, "page-chapter", toc(body)),
                       encoding="utf-8")
        # search index: one entry per h2 section (plus the chapter lead)
        parts = re.split(r'(?=<h2 id=")', content)
        lead = strip_tags(parts[0])
        if lead:
            index.append({"t": ch["title"], "c": ch["title"], "u": f"docs/{s}/", "x": lead[:600]})
        for p in parts[1:]:
            m = re.match(r'<h2 id="([^"]+)"[^>]*>(.*?)</h2>(.*)', p, re.S)
            if m:
                index.append({"t": strip_tags(m.group(2)), "c": ch["title"], "u": f"docs/{s}/#{m.group(1)}",
                              "x": strip_tags(m.group(3))[:1500]})

    # title page with the contents
    contents = ['<ol class="contents-list">']
    for i, ch in enumerate(NAV):
        contents.append(f'<li><a class="c-ch" href="{ch["href"]}"><span class="num">{i + 1}</span>'
                        f'{html.escape(ch["title"])}</a><ul>' +
                        "".join(f'<li><a href="{it["href"]}">{html.escape(it["label"])}</a></li>' for it in ch["items"]) +
                        "</ul></li>")
    contents.append("</ol>")
    home = (SRC / "home.html").read_text(encoding="utf-8").replace("{{CONTENTS}}", "".join(contents))
    home = relink(placeholders(home), "")
    (OUT / "index.html").write_text(render(home, f'{SITE["title"]}: {SITE["subtitle"]}', "", None, None, "page-home"),
                                    encoding="utf-8")

    # 404 page (GitHub Pages serves it for unknown paths, at any depth, so it uses the absolute base path)
    base = SITE.get("base_path", "/")
    nf = (f'<article class="chapter"><h1>Page not found</h1><p>This address is not part of the FFOnto Book. '
          f'It may have moved when the book was reorganised.</p><p><a class="btn btn-primary" href="{base}">Go to the title page</a></p></article>')
    page404 = render(nf, f'Page not found | {SITE["title"]}', base, None, None, "page-404")
    (OUT / "404.html").write_text(page404, encoding="utf-8")

    (OUT / "assets").mkdir(exist_ok=True)
    (OUT / "assets" / "search-index.json").write_text(json.dumps(index, ensure_ascii=False), encoding="utf-8")
    (OUT / ".nojekyll").write_text("", encoding="utf-8")

    if errors:
        print("BUILD FINISHED WITH ERRORS:\n  " + "\n  ".join(errors))
        sys.exit(1)
    print(f"built: index.html, {len(NAV)} chapters in docs/, 404.html, search index with {len(index)} entries")


if __name__ == "__main__":
    main()
