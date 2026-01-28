import { DocsSidebar } from "../components/docs/DocsSidebar";
import { DocsContent } from "../components/docs/DocsContent";
import { DocsTableOfContents } from "../components/docs/DocsTableOfContents";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DocsSidebar />
      <DocsContent />
      <DocsTableOfContents />
    </div>
  );
};

export default Index;
