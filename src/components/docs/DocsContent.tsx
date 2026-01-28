export function DocsContent() {
  return (
    <main className="ml-64 mr-0 lg:mr-56 min-h-screen">
      <div className="max-w-3xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-docs-heading mb-6">
          Getting Started
        </h1>

        <p className="text-docs-text text-lg leading-relaxed mb-8">
          Welcome to the documentation. This guide will walk you through everything
          you need to know to get up and running quickly.
        </p>

        {/* Introduction Section */}
        <section id="introduction" className="mb-12">
          <h2 className="text-2xl font-semibold text-docs-heading mb-4 pb-2 border-b border-docs-border">
            Introduction
          </h2>
          <p className="text-docs-text leading-relaxed mb-4">
            Our platform provides a comprehensive set of tools for building modern
            applications. Whether you're creating a simple website or a complex
            enterprise solution, you'll find everything you need here.
          </p>
          <p className="text-docs-text leading-relaxed">
            For more information, check out our{" "}
            <a href="#" className="text-docs-link hover:text-docs-link-hover underline">
              API reference
            </a>{" "}
            and{" "}
            <a href="#" className="text-docs-link hover:text-docs-link-hover underline">
              examples repository
            </a>
            .
          </p>
        </section>

        {/* Installation Section */}
        <section id="installation" className="mb-12">
          <h2 className="text-2xl font-semibold text-docs-heading mb-4 pb-2 border-b border-docs-border">
            Installation
          </h2>
          <p className="text-docs-text leading-relaxed mb-4">
            Getting started is easy. Install the package using your preferred
            package manager:
          </p>
          <pre className="bg-secondary rounded-lg p-4 mb-4 overflow-x-auto">
            <code className="text-sm text-docs-heading">npm install @example/package</code>
          </pre>
          <p className="text-docs-text leading-relaxed">
            After installation, import the components you need. See the{" "}
            <a href="#" className="text-docs-link hover:text-docs-link-hover underline">
              components documentation
            </a>{" "}
            for a full list of available imports.
          </p>
        </section>

        {/* Quick Start Section */}
        <section id="quick-start" className="mb-12">
          <h2 className="text-2xl font-semibold text-docs-heading mb-4 pb-2 border-b border-docs-border">
            Quick Start
          </h2>
          <p className="text-docs-text leading-relaxed mb-4">
            Here's a minimal example to get you started. Create a new file and add
            the following code:
          </p>
          <pre className="bg-secondary rounded-lg p-4 mb-4 overflow-x-auto">
            <code className="text-sm text-docs-heading">{`import { Component } from '@example/package';

function App() {
  return (
    <Component 
      title="Hello World"
      variant="primary"
    />
  );
}`}</code>
          </pre>
          <p className="text-docs-text leading-relaxed">
            That's it! You now have a working application. Continue reading to
            learn about{" "}
            <a href="#" className="text-docs-link hover:text-docs-link-hover underline">
              configuration options
            </a>{" "}
            and{" "}
            <a href="#" className="text-docs-link hover:text-docs-link-hover underline">
              advanced features
            </a>
            .
          </p>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="mb-12">
          <h2 className="text-2xl font-semibold text-docs-heading mb-4 pb-2 border-b border-docs-border">
            Architecture
          </h2>
          <p className="text-docs-text leading-relaxed mb-4">
            Our platform is built on a modular architecture that separates concerns
            and allows for easy scaling. The core consists of three main layers:
          </p>
          <ul className="list-disc list-inside text-docs-text space-y-2 mb-4 ml-4">
            <li><strong>Presentation Layer</strong> – React components and UI logic</li>
            <li><strong>Business Layer</strong> – State management and application logic</li>
            <li><strong>Data Layer</strong> – API integrations and data fetching</li>
          </ul>
          <p className="text-docs-text leading-relaxed">
            This separation ensures that each layer can be developed, tested, and
            maintained independently. See the{" "}
            <a href="#" className="text-docs-link hover:text-docs-link-hover underline">
              architecture deep dive
            </a>{" "}
            for more details.
          </p>
        </section>

        {/* Configuration Section */}
        <section id="configuration" className="mb-12">
          <h2 className="text-2xl font-semibold text-docs-heading mb-4 pb-2 border-b border-docs-border">
            Configuration
          </h2>
          <p className="text-docs-text leading-relaxed mb-4">
            Configure your application by creating a configuration file in your
            project root:
          </p>
          <pre className="bg-secondary rounded-lg p-4 mb-4 overflow-x-auto">
            <code className="text-sm text-docs-heading">{`// config.js
export default {
  apiEndpoint: 'https://api.example.com',
  debug: process.env.NODE_ENV === 'development',
  features: {
    analytics: true,
    notifications: false,
  },
};`}</code>
          </pre>
          <p className="text-docs-text leading-relaxed">
            All configuration options are optional and will fall back to sensible
            defaults. Check the{" "}
            <a href="#" className="text-docs-link hover:text-docs-link-hover underline">
              configuration reference
            </a>{" "}
            for a complete list of options.
          </p>
        </section>

        {/* Theming Section */}
        <section id="theming" className="mb-12">
          <h2 className="text-2xl font-semibold text-docs-heading mb-4 pb-2 border-b border-docs-border">
            Theming
          </h2>
          <p className="text-docs-text leading-relaxed mb-4">
            Customize the look and feel of your application using our theming
            system. Define your theme using CSS variables or a theme object:
          </p>
          <pre className="bg-secondary rounded-lg p-4 mb-4 overflow-x-auto">
            <code className="text-sm text-docs-heading">{`:root {
  --primary: 220 90% 56%;
  --secondary: 220 14% 96%;
  --accent: 262 83% 58%;
  --radius: 0.5rem;
}`}</code>
          </pre>
          <p className="text-docs-text leading-relaxed">
            Themes can be switched dynamically at runtime. Learn more about{" "}
            <a href="#" className="text-docs-link hover:text-docs-link-hover underline">
              dark mode support
            </a>{" "}
            and{" "}
            <a href="#" className="text-docs-link hover:text-docs-link-hover underline">
              custom theme creation
            </a>
            .
          </p>
        </section>

        {/* Image Gallery Section */}
        <section id="image-gallery" className="mb-12">
          <h2 className="text-2xl font-semibold text-docs-heading mb-4 pb-2 border-b border-docs-border">
            Image Gallery
          </h2>
          <p className="text-docs-text leading-relaxed mb-6">
            Below are some example screenshots and diagrams to help you understand
            the platform better.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center border border-docs-border">
              <span className="text-muted-foreground text-sm">Dashboard Preview</span>
            </div>
            <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center border border-docs-border">
              <span className="text-muted-foreground text-sm">Analytics View</span>
            </div>
            <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center border border-docs-border">
              <span className="text-muted-foreground text-sm">Settings Panel</span>
            </div>
            <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center border border-docs-border">
              <span className="text-muted-foreground text-sm">User Management</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-docs-border">
          <p className="text-sm text-muted-foreground">
            Was this page helpful?{" "}
            <a href="#" className="text-docs-link hover:text-docs-link-hover underline">
              Let us know
            </a>
            .
          </p>
        </footer>
      </div>
    </main>
  );
}
