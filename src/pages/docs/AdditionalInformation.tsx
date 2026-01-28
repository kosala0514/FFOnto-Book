export function AdditionalInformation() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-docs-heading mb-6">
        Additional Information
      </h1>

      {/* Applications */}
      <section id="applications" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          1. Applications and Use Cases
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          FFONTO is designed to support a wide range of applications related to
          forest fire detection, monitoring, and analysis.
        </p>

        <p className="text-docs-text leading-relaxed mb-4">
          Key application areas include:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4 mb-4">
          <li>Early forest fire detection systems using multi-modal sensor data</li>
          <li>Decision support systems for fire management and emergency response</li>
          <li>Environmental monitoring platforms integrating weather, image, and audio data</li>
          <li>Data analytics, machine learning, and AI for fire prediction and pattern analysis</li>
          <li>Semantic data integration across heterogeneous fire-related datasets</li>
        </ul>

        <p className="text-docs-text leading-relaxed">
          By providing a standardized semantic framework, FFONTO enables
          interoperability between diverse systems and data sources.
        </p>
      </section>

      {/* Limitations */}
      <section id="limitations" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          2. Limitations and Future Work
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          While FFONTO provides a comprehensive semantic model for forest fire
          detection and observation, certain limitations remain.
        </p>

        <p className="text-docs-text leading-relaxed mb-2">
          Current limitations include:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4 mb-4">
          <li>Limited coverage of post-fire impact assessment and ecological recovery</li>
          <li>Absence of detailed socio-economic and policy modeling</li>
          <li>Dependence on the availability and quality of sensor data</li>
        </ul>

        <p className="text-docs-text leading-relaxed mb-2">
          Future work will focus on:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4">
          <li>Extending FFONTO to include fire risk assessment, resilience, and impact analysis</li>
          <li>Integration with additional domain ontologies (e.g., disaster management, climate change)</li>
          <li>Enhanced support for real-time data streams and reasoning</li>
          <li>Continuous refinement based on community feedback and real-world deployments</li>
        </ul>
      </section>

      {/* Acknowledgements */}
      <section id="acknowledgements" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          3. Acknowledgements
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          The development of FFONTO was supported by academic supervision,
          domain expertise, and open-source semantic technologies.
        </p>

        <p className="text-docs-text leading-relaxed mb-2">
          The authors would like to acknowledge:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4">
          <li>Supervisors and academic mentors for guidance and feedback</li>
          <li>The ontology and semantic web research community</li>
          <li>Developers and contributors of reused ontologies and tools</li>
        </ul>
      </section>

      {/* Citation */}
      <section id="citation" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          4. Cite FFONTO
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          If you use FFONTO in academic or technical work, please cite it as follows:
        </p>

        <pre className="bg-secondary rounded-lg p-4 overflow-x-auto">
          <code className="text-sm text-docs-heading">
{`Jayaweera, C. K., & Meedeniya, D.
FFONTO: Forest Fire Detection & Observation Ontology.
Version 1.0, 2026.
https://w3id.org/def/ffonto`}
          </code>
        </pre>

        <p className="text-docs-text leading-relaxed mt-4">
          (This citation may be updated with a DOI or publication venue if available.)
        </p>
      </section>
    </div>
  );
}

export default AdditionalInformation;
