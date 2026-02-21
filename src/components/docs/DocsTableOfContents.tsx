import { useLocation } from "react-router-dom";

interface TocItem {
  id: string;
  label: string;
}

const tocByPage: Record<string, TocItem[]> = {
   "/docs/introduction": [
    { id: "what-is-ffonto", label: "What is FFONTO?" },
    { id: "ffonto-resources", label: "FFONTO Resources" },
    { id: "ffonto-at-a-glance", label: "FFONTO At a Glance" },
    { id: "ffonto-lifecycle", label: "FFONTO Lifecycle" },
  ],
  "/docs/development-lifecycle": [
  { id: "development", label: "Knowledge Acquisition & Conceptualisation" },
  { id: "requirements", label: "Requirements Definition" },
  { id: "implementation", label: "Implementation" },
  { id: "evaluation", label: "Evaluation" },
  { id: "publication", label: "Knowledge Graph Construction" },
],
"/docs/data-sources": [
  { id: "weather-data", label: "Weather Data" },
  { id: "image-data", label: "Forest Fire Image Data" },
  { id: "audio-data", label: "Environmental Audio Data" },
],
"/docs/ffonto-bot": [
  { id: "github", label: "GitHub" },
  { id: "how-to-use", label: "How to Use FFONTO-Bot" },
  { id: "capabilities", label: "Key Capabilities" },
  { id: "intended-users", label: "Intended Users" },
],
"/docs/using-ffonto": [
  { id: "how-to-query", label: "How to Query FFONTO" },
  { id: "sparql-examples", label: "SPARQL Examples" },
],
"/docs/additional-information": [
  { id: "applications", label: "Applications & Use Cases" },
  { id: "limitations", label: "Limitations & Future Work" },
  { id: "acknowledgements", label: "Acknowledgements" },
  { id: "citation", label: "Cite FFONTO" },
],
};

export function DocsTableOfContents() {
  const location = useLocation();
  const tocItems = tocByPage[location.pathname] || [];

  if (tocItems.length === 0) return null;

  return (
    <aside className="fixed right-0 top-0 hidden h-screen w-56 border-l border-docs-border bg-background p-6 lg:block overflow-y-auto">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Contents
      </h2>
      <nav>
        <ul className="space-y-2">
          {tocItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block text-sm transition-colors ${
                  location.hash === `#${item.id}`
                    ? "text-docs-link font-medium"
                    : "text-docs-text hover:text-docs-link"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}


/// https://kosala0514.github.io/FFOnto-Book/#development
/// https://kosala0514.github.io/FFOnto-Book/#/docs/development-lifecycle#development