export function FFONTOBot() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-docs-heading mb-6">
        FFONTO-Bot
      </h1>

      <p className="text-docs-text text-lg leading-relaxed mb-8">
        FFONTO-Bot is an intelligent conversational interface built on top of the
        Forest Fire Detection & Observation Ontology (FFONTO).
      </p>

      <p className="text-docs-text leading-relaxed mb-12">
        It enables users to interact with FFONTO knowledge through natural language,
        simplifying access to fire detection data, ontology concepts, and semantic queries.
      </p>

      {/* GitHub */}
      <section id="github" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          1. GitHub
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          The source code and related resources for FFONTO-Bot are publicly available on GitHub.
          The repository includes:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4 mb-4">
          <li>FFONTO-Bot source code</li>
          <li>Ontology integration and configuration files</li>
          <li>Example queries and usage scenarios</li>
          <li>Documentation for setup and extension</li>
        </ul>

        <p className="text-docs-text leading-relaxed">
          <strong>GitHub Repository:</strong>{" "}
          <a
            href="https://github.com/kosala0514/FFOnto-Bot"
            target="_blank"
            className="text-docs-link underline"
          >
            https://github.com/kosala0514/FFOnto-Bot
          </a>
        </p>

        <p className="text-docs-text leading-relaxed mt-4">
          The repository supports collaboration, issue tracking, and future enhancements
          to the chatbot.
        </p>
      </section>

      {/* How to Use */}
      <section id="how-to-use" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          2. How to Use FFONTO-Bot
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          FFONTO-Bot allows users to query fire-related knowledge without requiring
          expertise in SPARQL or ontology engineering.
        </p>

        <h3 className="text-lg font-semibold text-docs-heading mb-2">
          Accessing FFONTO-Bot
        </h3>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4 mb-4">
          <li>A web-based chat interface</li>
          <li>Local deployment using the GitHub source code</li>
          <li>Integration into existing fire monitoring platforms</li>
        </ul>

        <h3 className="text-lg font-semibold text-docs-heading mb-2">
          Interacting with FFONTO-Bot
        </h3>

        <p className="text-docs-text leading-relaxed mb-2">
          Users can interact with FFONTO-Bot using natural language queries such as:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4 mb-4">
          <li>“What weather conditions were associated with a fire event?”</li>
          <li>“Which sensors detected smoke in a specific region?”</li>
          <li>“What fire weather indices indicate high fire risk?”</li>
        </ul>

        <p className="text-docs-text leading-relaxed">
          The bot interprets user queries, maps them to FFONTO concepts,
          and retrieves relevant information from the underlying knowledge graph.
        </p>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          Key Capabilities
        </h2>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4">
          <li>Ontology exploration (classes, properties, and relationships)</li>
          <li>Retrieval of fire detection and observation data</li>
          <li>Context-aware responses using semantic reasoning</li>
          <li>Multi-modal queries across image, audio, and weather data</li>
        </ul>
      </section>

      {/* Intended Users */}
      <section id="intended-users" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          Intended Users
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          FFONTO-Bot is designed for:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4">
          <li>Researchers and ontology engineers</li>
          <li>Fire management authorities</li>
          <li>Data scientists and AI practitioners</li>
          <li>Students and domain experts</li>
        </ul>
      </section>
    </div>
  );
}

export default FFONTOBot;
