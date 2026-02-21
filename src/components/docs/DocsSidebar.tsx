import { useState } from "react";
import { Search, ChevronDown, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "react-router-dom";

interface NavSection {
  title: string;
  href: string;
  items: { label: string; href: string }[];
}

const navSections: NavSection[] = [
  {
  title: "Introduction",
  href: "/docs/introduction",
  items: [
    { label: "What is FFOnto?", href: "/docs/introduction#what-is-ffonto" },
    { label: "Resources", href: "/docs/introduction#ffonto-resources" },
    { label: "At a Glance", href: "/docs/introduction#ffonto-at-a-glance" },
    { label: "Lifecycle", href: "/docs/introduction#ffonto-lifecycle" },
  ],
},
{
  title: "Development Lifecycle",
  href: "/docs/development-lifecycle",
  items: [
    { label: "Knowledge Acquisition & Conceptualisation", href: "/docs/development-lifecycle#development" },
    { label: "Requirements Definition", href: "/docs/development-lifecycle#requirements" },
    { label: "Implementation", href: "/docs/development-lifecycle#implementation" },
    { label: "Evaluation", href: "/docs/development-lifecycle#evaluation" },
    { label: "Knowledge Graph Construction", href: "/docs/development-lifecycle#publication" },
  ],
},
{
  title: "Data Sources",
  href: "/docs/data-sources",
  items: [
    { label: "Weather Data", href: "/docs/data-sources#weather-data" },
    { label: "Image Data", href: "/docs/data-sources#image-data" },
    { label: "Audio Data", href: "/docs/data-sources#audio-data" },
  ],
},
{
  title: "FFOnto-Bot",
  href: "/docs/ffonto-bot",
  items: [
    { label: "GitHub", href: "/docs/ffonto-bot#github" },
    { label: "How to Use", href: "/docs/ffonto-bot#how-to-use" },
    { label: "Capabilities", href: "/docs/ffonto-bot#capabilities" },
    { label: "Intended Users", href: "/docs/ffonto-bot#intended-users" },
  ],
},
{
  title: "Using FFOnto",
  href: "/docs/using-ffonto",
  items: [
    { label: "How to Query FFOnto", href: "/docs/using-ffonto#how-to-query" },
    { label: "SPARQL Examples", href: "/docs/using-ffonto#sparql-examples" },
  ],
},
{
  title: "Additional Information",
  href: "/docs/additional-information",
  items: [
    { label: "Applications & Use Cases", href: "/docs/additional-information#applications" },
    { label: "Limitations & Future Work", href: "/docs/additional-information#limitations" },
    { label: "Acknowledgements", href: "/docs/additional-information#acknowledgements" },
    { label: "Cite FFOnto", href: "/docs/additional-information#citation" },
  ],
}
];

export function DocsSidebar() {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "Getting Started": true,
    "Core Concepts": true,
    "Components": true,
    "API Reference": true,
  });
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const isActiveSection = (href: string) => {
    return location.pathname === href.split("#")[0];
  };

  const isActiveItem = (href: string) => {
    const [path, hash] = href.split("#");
    return location.pathname === path && location.hash === `#${hash}`;
  };

  const filteredSections = navSections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter(
      (section) =>
        section.items.length > 0 ||
        section.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <aside className="fixed left-0 top-0 z-30 h-screen w-64 border-r border-docs-border bg-docs-sidebar overflow-y-auto">
      <div className="sticky top-0 bg-docs-sidebar p-4 pb-2">
        <h1 className="mb-4 text-xl font-bold text-docs-heading">Documentation</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search docs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-background border-docs-border"
          />
        </div>
      </div>

      <nav className="p-4 pt-2">
        {filteredSections.map((section) => (
          <div key={section.title} className="mb-4">
            <button
              onClick={() => toggleSection(section.title)}
              className={`flex w-full items-center justify-between py-2 text-sm font-semibold transition-colors ${
                isActiveSection(section.href)
                  ? "text-docs-link"
                  : "text-docs-heading hover:text-docs-link"
              }`}
            >
              <Link to={section.href} className="hover:text-docs-link">
                {section.title}
              </Link>
              {openSections[section.title] ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            {openSections[section.title] && (
              <ul className="ml-2 border-l border-docs-border pl-3 space-y-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={`block py-1.5 text-sm transition-colors ${
                        isActiveItem(item.href)
                          ? "text-docs-link font-medium"
                          : "text-docs-text hover:text-docs-link"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
