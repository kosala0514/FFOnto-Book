export function DevelopmentLifecycle() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-docs-heading mb-6">
        FFONTO Development Lifecycle
      </h1>

      <p className="text-docs-text text-lg leading-relaxed mb-8">
        This page describes the methodology followed for the design, implementation,
        evaluation, and publication of the Forest Fire Detection & Observation Ontology (FFONTO).
      </p>

      {/* Development */}
      <section id="development" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          1. Development
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          The development of FFONTO followed a systematic ontology engineering approach,
          combining domain analysis, reuse of existing semantic standards, and iterative refinement.
        </p>

        <p className="text-docs-text leading-relaxed mb-4">
          The scope of FFONTO focuses on forest fire detection and observation, covering:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4 mb-4">
          <li>Fire-related events and phenomena</li>
          <li>Multi-modal sensor observations (visual, audio, meteorological)</li>
          <li>Environmental and contextual conditions influencing fires</li>
          <li>Temporal and spatial characteristics of fire events</li>
        </ul>

        <p className="text-docs-text leading-relaxed mb-4">
          Domain knowledge was gathered from:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4">
          <li>Scientific literature on forest fire detection and monitoring</li>
          <li>Existing fire detection systems and sensor deployments</li>
          <li>Established ontologies in the IoT and observation domains</li>
        </ul>

        <p className="text-docs-text leading-relaxed mt-4">
          To maximize interoperability and reuse, FFONTO adopts and aligns with
          well-known ontological resources such as SOSA/SSN, while extending them
          with fire-specific concepts.
        </p>
      </section>

      {/* Requirements */}
      <section id="requirements" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          2. Requirements
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          Ontology requirements were defined using competency questions, representing
          the information needs FFONTO must be able to answer.
        </p>

        <p className="text-docs-text leading-relaxed mb-4">
          Example requirements include the ability to represent:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4">
          <li>Fire detection events captured by different sensor types</li>
          <li>Relationships between fire occurrences and environmental conditions</li>
          <li>Temporal and spatial attributes of fire events</li>
          <li>Multi-source observations contributing to early fire detection</li>
        </ul>

        <p className="text-docs-text leading-relaxed mt-4">
          Each requirement was translated into one or more competency questions,
          later formalized as SPARQL queries to validate the ontology’s coverage
          and expressiveness.
        </p>
      </section>

      {/* Implementation */}
      <section id="implementation" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          3. Implementation
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          FFONTO was implemented using OWL 2 and RDF, with serialization primarily
          in Turtle format.
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4">
          <li><strong>ForestFire</strong> as the root concept for fire-related events</li>
          <li>Modular design supporting extensibility and reuse</li>
          <li>Explicit modeling of object and data properties</li>
          <li>Alignment with external ontologies to avoid duplication</li>
        </ul>

        <p className="text-docs-text leading-relaxed mt-4">
          The ontology uses persistent, dereferenceable URIs and follows Semantic Web
          best practices for naming, annotation, and versioning.
        </p>
      </section>

      {/* Evaluation */}
      <section id="evaluation" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          4. Evaluation
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          The evaluation of FFONTO was conducted using multiple complementary approaches:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4">
          <li>Structural evaluation using ontology quality tools such as OOPS!</li>
          <li>Consistency checking using description logic reasoners</li>
          <li>Requirement validation through SPARQL competency queries</li>
          <li>Manual review for clarity, completeness, and usability</li>
        </ul>

        <p className="text-docs-text leading-relaxed mt-4">
          Evaluation results guided iterative refinements, improving both semantic
          quality and documentation.
        </p>
      </section>

      {/* Publication */}
      <section id="publication" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          5. Publication
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          FFONTO is published as an open and reusable semantic resource.
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4">
          <li>Public hosting via GitHub</li>
          <li>Persistent identifiers using w3id.org</li>
          <li>Versioning and provenance metadata</li>
          <li>Accessibility for researchers and practitioners</li>
        </ul>

        <p className="text-docs-text leading-relaxed mt-4">
          FFONTO is intended to evolve over time, incorporating additional
          fire-related domains such as risk assessment, resilience analysis,
          and post-fire impact modeling.
        </p>
      </section>
    </div>
  );
}

export default DevelopmentLifecycle;
