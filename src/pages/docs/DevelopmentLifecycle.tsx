export function DevelopmentLifecycle() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-docs-heading mb-6">
        FFONTO Development Lifecycle
      </h1>

      <p className="text-docs-text text-lg leading-relaxed mb-8">
        This page describes the structured methodology followed for the design,
        formalisation, implementation, evaluation, and knowledge graph construction
        of the Forest Fire Ontology (FFONTO).
      </p>

      {/* Development */}
      <section id="development" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          1. Development
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          The development of FFONTO followed the NeOn Methodology (Scenario 1),
          which supports building ontologies from the ground up. The process began
          with comprehensive knowledge acquisition to achieve a detailed
          understanding of the forest fire domain.
        </p>

        <p className="text-docs-text leading-relaxed mb-4">
          Knowledge was collected through:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4 mb-4">
          <li>Domain expert consultations</li>
          <li>Scientific and technical document analysis</li>
          <li>Review of online resources and fire management reports</li>
          <li>Brainstorming and conceptual modelling sessions</li>
        </ul>

        <p className="text-docs-text leading-relaxed">
          A preliminary review of related ontologies (e.g., OntoFire, FIRE, FFDR)
          informed the conceptual structure, ensuring alignment with existing
          semantic efforts while avoiding redundancy.
        </p>
      </section>

      {/* Requirements */}
      <section id="requirements" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          2. Requirements
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          An Ontology Requirements Specification Document (ORSD) was produced to
          formally define the ontology’s purpose, scope, target users, intended
          applications, and implementation language.
        </p>

        <p className="text-docs-text leading-relaxed mb-4">
          The defined scope of FFONTO includes:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4 mb-4">
          <li>Forest fire observation and detection</li>
          <li>Management and response actions</li>
          <li>Environmental and contextual assessment</li>
          <li>Fire effects and impact representation</li>
        </ul>

        <p className="text-docs-text leading-relaxed">
          Competency Questions (CQs) were formulated to capture the information
          needs the ontology must satisfy. These questions guided both conceptual
          design and later evaluation.
        </p>
      </section>

      {/* Implementation */}
      <section id="implementation" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          3. Implementation
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          After requirements definition, scheduling, conceptualisation,
          formalisation, and implementation were conducted following the
          On-To-Knowledge Methodology (OTKM).
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4 mb-4">
          <li>Conceptual modelling of core forest fire entities</li>
          <li>Formalisation using OWL 2 and RDF standards</li>
          <li>Implementation in Protégé</li>
          <li>Modular and extensible class hierarchy design</li>
        </ul>

        <p className="text-docs-text leading-relaxed mb-4">
          The ontology is structured around the central class <strong>ForestFire</strong>,
          which connects observations, management activities, environmental
          conditions, and resulting effects within a unified semantic framework.
        </p>

        <p className="text-docs-text leading-relaxed">
          FFONTO follows Semantic Web best practices, including persistent URIs,
          clear annotation properties, alignment with external vocabularies,
          and consistent naming conventions.
        </p>
      </section>

      {/* Evaluation */}
      <section id="evaluation" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          4. Evaluation
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          FFONTO was evaluated using complementary validation strategies:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4 mb-4">
          <li>Technology-focused evaluation using description logic reasoners</li>
          <li>User-focused validation through competency question testing</li>
          <li>Ontology-focused assessment using structural quality metrics</li>
          <li>Iterative refinement based on detected inconsistencies</li>
        </ul>

        <p className="text-docs-text leading-relaxed">
          Competency Questions were translated into SPARQL queries to verify
          expressiveness and ensure that the ontology supports realistic
          decision-support scenarios.
        </p>
      </section>

      {/* Publication */}
      <section id="publication" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          5. Knowledge Graph & Publication
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          Following validation, FFONTO was used to construct a Knowledge Graph (KG)
          to enable structured reasoning and efficient querying across integrated
          forest fire data sources.
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4 mb-4">
          <li>Semantic data integration using RDF</li>
          <li>Inference-based reasoning for enhanced decision support</li>
          <li>Open publication for reuse and extension</li>
          <li>Versioning and provenance metadata for transparency</li>
        </ul>

        <p className="text-docs-text leading-relaxed">
          Final evaluation confirmed that FFONTO satisfies its defined
          requirements and effectively supports knowledge-driven forest
          fire monitoring and management applications.
        </p>
      </section>
    </div>
  );
}

export default DevelopmentLifecycle;
