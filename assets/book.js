/* FFOnto Book: theme toggle, mobile chapters drawer, search, copy buttons, reading progress, active section. */
(function () {
  "use strict";
  var doc = document.documentElement;
  var root = doc.getAttribute("data-root") || "";

  /* ---------- theme */
  var themeBtn = document.querySelector(".theme-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var dark = doc.dataset.theme ? doc.dataset.theme === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
      doc.dataset.theme = dark ? "light" : "dark";
      try { localStorage.setItem("ffo-theme", doc.dataset.theme); } catch (e) {}
    });
  }

  /* ---------- mobile drawer */
  var menuBtn = document.querySelector(".menu-btn");
  var scrim = document.querySelector(".scrim");
  function setNav(open) {
    document.body.classList.toggle("nav-open", open);
    if (menuBtn) menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    if (scrim) scrim.hidden = !open;
  }
  if (menuBtn) menuBtn.addEventListener("click", function () { setNav(!document.body.classList.contains("nav-open")); });
  if (scrim) scrim.addEventListener("click", function () { setNav(false); });
  document.querySelectorAll(".sidebar a").forEach(function (a) { a.addEventListener("click", function () { setNav(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setNav(false); });

  /* ---------- copy buttons */
  document.querySelectorAll(".code .copy").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var code = btn.closest(".code").querySelector("code").innerText;
      var done = function () { btn.textContent = "Copied"; setTimeout(function () { btn.textContent = "Copy"; }, 1600); };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(code).then(done, function () {});
      } else {
        var ta = document.createElement("textarea"); ta.value = code; document.body.appendChild(ta);
        ta.select(); try { document.execCommand("copy"); done(); } catch (e) {} ta.remove();
      }
    });
  });

  /* ---------- reading progress through the whole book */
  var cover = document.querySelector(".progress-cover");
  if (cover) {
    var ch = parseInt(cover.dataset.chapter, 10), n = parseInt(cover.dataset.chapters, 10);
    var update = function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var within = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 1;
      var frac = ch < 0 ? 0 : (ch + within) / n;
      cover.style.left = (frac * 100).toFixed(3) + "%";
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* ---------- active section in "On this page" and in the sidebar */
  var heads = Array.prototype.slice.call(document.querySelectorAll(".chapter h2[id]"));
  if (heads.length) {
    var tocLinks = document.querySelectorAll(".toc a");
    var sideLinks = document.querySelectorAll(".is-current .sections a");
    var mark = function () {
      var y = window.scrollY + 120, cur = heads[0].id;
      heads.forEach(function (h) { if (h.offsetTop <= y) cur = h.id; });
      var set = function (links) {
        links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href").split("#")[1] === cur); });
      };
      set(tocLinks); set(sideLinks);
    };
    window.addEventListener("scroll", mark, { passive: true });
    mark();
  }

  /* ---------- search */
  var input = document.getElementById("search-input");
  var box = document.getElementById("search-results");
  var index = null, sel = -1;
  function load() {
    if (index) return Promise.resolve(index);
    return fetch(root + "assets/search-index.json").then(function (r) { return r.json(); })
      .then(function (d) { index = d; return d; })
      .catch(function () { index = []; return index; });
  }
  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function hi(text, terms) {
    var out = esc(text);
    terms.forEach(function (t) {
      if (t.length < 2) return;
      out = out.replace(new RegExp("(^|[^a-z0-9])(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "$1<mark>$2</mark>");
    });
    return out;
  }
  function snippet(text, terms) {
    var low = text.toLowerCase(), pos = -1;
    terms.forEach(function (t) {
      var m = new RegExp("(^|[^a-z0-9])" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).exec(low);
      var p = m ? m.index + m[1].length : -1;
      if (p >= 0 && (pos < 0 || p < pos)) pos = p;
    });
    var start = Math.max(0, pos - 60);
    return (start > 0 ? "…" : "") + text.slice(start, start + 170) + (text.length > start + 170 ? "…" : "");
  }
  function search(q) {
    var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) { box.hidden = true; return; }
    load().then(function (idx) {
      var rx = terms.map(function (t) { return new RegExp("(^|[^a-z0-9])" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"); });
      var res = idx.map(function (e) {
        var score = 0;
        for (var i = 0; i < terms.length; i++) {
          var inT = rx[i].test(e.t), inX = rx[i].test(e.x);
          if (!inT && !inX) return null;
          score += (inT ? 5 : 0) + (inX ? 1 : 0);
        }
        return { e: e, s: score };
      }).filter(Boolean).sort(function (a, b) { return b.s - a.s; }).slice(0, 8);
      sel = -1;
      box.innerHTML = res.length ? res.map(function (r) {
        return '<a role="option" href="' + root + r.e.u + '"><div class="r-t">' + hi(r.e.t, terms) +
          '</div><div class="r-c">' + esc(r.e.c) + '</div><div class="r-x">' + hi(snippet(r.e.x, terms), terms) + "</div></a>";
      }).join("") : '<div class="search-empty">No sections match "' + esc(q) + '". Try a shorter word, such as "PPE" or "threshold".</div>';
      box.hidden = false;
    });
  }
  if (input && box) {
    input.addEventListener("input", function () { search(input.value.trim()); });
    input.addEventListener("focus", function () { load(); if (input.value.trim()) search(input.value.trim()); });
    input.addEventListener("keydown", function (e) {
      var items = box.querySelectorAll("a");
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        if (!items.length) return;
        e.preventDefault();
        sel = (sel + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
        items.forEach(function (a, i) { a.setAttribute("aria-selected", i === sel ? "true" : "false"); });
        items[sel].scrollIntoView({ block: "nearest" });
      } else if (e.key === "Enter" && items.length) {
        e.preventDefault(); window.location.href = items[Math.max(sel, 0)].href;
      } else if (e.key === "Escape") { box.hidden = true; input.blur(); }
    });
    document.addEventListener("click", function (e) { if (!e.target.closest(".search")) box.hidden = true; });
    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && document.activeElement !== input && !/input|textarea/i.test(document.activeElement.tagName)) {
        e.preventDefault(); input.focus();
      }
    });
  }
})();
