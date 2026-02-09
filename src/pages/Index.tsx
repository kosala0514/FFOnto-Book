import { DocsSidebar } from "../components/docs/DocsSidebar";
import { DocsContent } from "../components/docs/DocsContent";
import { DocsTableOfContents } from "../components/docs/DocsTableOfContents";
import { Footer } from "../components/docs/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      
      {/* Main Layout */}
      <div className="flex flex-1">
        <DocsSidebar />
        <DocsContent />
        <DocsTableOfContents />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
