import { Outlet } from "react-router-dom";
import { DocsSidebar } from "./DocsSidebar";
import { DocsTableOfContents } from "./DocsTableOfContents";
import { Footer } from "./Footer";

export function DocsLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      
      {/* Main docs layout */}
      <div className="flex flex-1">
        <DocsSidebar />

        <main className="ml-64 mr-0 lg:mr-56 flex-1 min-h-screen">
          <Outlet />
        </main>

        <DocsTableOfContents />
      </div>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}
