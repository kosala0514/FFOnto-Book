import { Outlet } from "react-router-dom";
import { DocsSidebar } from "./DocsSidebar";
import { DocsTableOfContents } from "./DocsTableOfContents";

export function DocsLayout() {
  return (
    <div className="min-h-screen bg-background">
      <DocsSidebar />
      <main className="ml-64 mr-0 lg:mr-56 min-h-screen">
        <Outlet />
      </main>
      <DocsTableOfContents />
    </div>
  );
}
