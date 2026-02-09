export function Introduction() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-docs-heading mb-6">
        Introduction
      </h1>

      <section id="what-is-ffonto" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          FFOnto
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          In computer science, an ontology is a structured and formal representation
          of knowledge within a specific domain, consisting of concepts, relationships,
          and constraints that enable shared understanding between humans and machines.
        </p>

        <p className="text-docs-text leading-relaxed mb-4">
          <strong>FFOnto</strong> stands for the <strong>Forest Fire Ontology</strong>. 
          FFOnto is a domain-specific ontology designed to model forest fire detection,
          monitoring, and observation data. It supports the semantic integration of
          heterogeneous data sources such as visual , audio ,
          meteorological measurements, and environmental observations.
        </p>

        <p className="text-docs-text leading-relaxed">
         
        </p>
      </section>

      <section id="ffonto-resources" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          FFOnto Resources
        </h2>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4">
          <li>
            <strong>Ontology (Turtle):</strong>{" "}
            <a
              href="https://w3id.org/def/ffonto"
              className="text-docs-link underline"
              target="_blank"
            >
              https://w3id.org/def/ffonto
            </a>
          </li>
          <li>
            <strong>Documentation:</strong>{" "}
            <a
              href="https://w3id.org/def/ffontoDocs"
              className="text-docs-link underline"
              target="_blank"
            >
              https://w3id.org/def/ffontoDocs
            </a>
          </li>
          <li>
            <strong>Knowledge Graph / Dataset (Sample):</strong>{" "}
            <a
              href="https://w3id.org/def/ffontoDS"
              className="text-docs-link underline"
              target="_blank"
            >
              https://w3id.org/def/ffontoDS
            </a>
          </li>
        </ul>
      </section>

      <section id="ffonto-at-a-glance" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          FFOnto at a Glance
        </h2>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4">
          <li>Unified access to heterogeneous forest fire data</li>
          <li>Standardised semantic representation</li>
          <li>Interoperable data exchange between systems</li>
          <li>Support for data mining, ML, and AI</li>
          <li>Extensible for future fire-related domains</li>
        </ul>
      </section>

      <section id="ffonto-lifecycle" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          FFOnto Lifecycle
        </h2>

        <ol className="list-decimal list-inside text-docs-text space-y-2 ml-4">
          <li><strong>Development</strong> – Domain scope and core concepts</li>
          <li><strong>Requirements</strong> – Competency questions</li>
          <li><strong>Implementation</strong> – OWL/RDF formalisation</li>
          <li><strong>Evaluation</strong> – Quality tools and SPARQL testing</li>
          <li><strong>Publication</strong> – Persistent URIs and versioning</li>
        </ol>
      </section>
    </div>
  );
}

export default Introduction;
