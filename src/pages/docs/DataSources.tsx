export function DataSources() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-docs-heading mb-6">
        Data Sources
      </h1>

      <p className="text-docs-text text-lg leading-relaxed mb-8">
        This page describes the primary data sources modeled and supported by the
        Forest Fire Ontology (FFONTO).
      </p>

      <p className="text-docs-text leading-relaxed mb-12">
        FFONTO is designed to integrate heterogeneous, multi-modal data sources
        commonly used in forest fire monitoring and early detection systems.
      </p>

      {/* Weather Data */}
      <section id="weather-data" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          1. Weather Data
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          Weather data plays a critical role in forest fire detection, behavior
          analysis, and risk assessment. FFONTO models meteorological observations
          that influence fire ignition, spread, and intensity.
        </p>

        <p className="text-docs-text leading-relaxed mb-4">
          Typical weather-related data represented in FFONTO include:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4 mb-4">
          <li>Air temperature</li>
          <li>Relative humidity</li>
          <li>Wind speed and direction</li>
          <li>Precipitation</li>
          <li>
            Fire Weather Index (FWI) and related indices (FFMC, DMC, DC, ISI, BUI)
          </li>
        </ul>

        <p className="text-docs-text leading-relaxed mb-4">
          These observations are linked to fire events and temporal intervals,
          enabling the analysis of weather conditions before, during, and after
          fire occurrences.
        </p>

        <p className="text-docs-text leading-relaxed">
          Weather data originate from public sources such as:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4 mt-2">
          <li><a href="https://archive.ics.uci.edu/dataset/547/algerian+forest+fires+dataset">Algerian Forest Fire</a></li>
          <li><a href="https://archive.ics.uci.edu/dataset/162/forest+fires">Forest Fire Dataset</a></li>
          {/* <li>Environmental monitoring networks</li> */}
        </ul>
      </section>

      {/* Image Data */}
      <section id="image-data" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          2. Forest Fire Image Data
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          Forest fire image data is a key source for visual fire and smoke detection.
          FFONTO supports the semantic representation of image-based observations
          captured by visual sensors.
        </p>

        <p className="text-docs-text leading-relaxed mb-4">
          This includes:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4 mb-4">
          <li>Images showing visible flames</li>
          <li>Smoke plume detection imagery</li>
          <li>Vegetation and landscape context</li>
          {/* <li>Time-stamped and geo-referenced image data</li> */}
        </ul>

        <p className="text-docs-text leading-relaxed mb-4">
          Image data produced by public datasets such as:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4">
          <li><a href="https://github.com/aiformankind/wildfire-dataset/tree/master">Wildfire Dataset</a></li>
          <li><a href="https://etsin.fairdata.fi/dataset/1dce1023-493a-4d63-a906-f2a44f831898/data">Boreal Forest Fire Dataset</a></li>
          <li><a href="https://bitbucket.org/gbdi/bowfire-dataset/downloads/">BoW Fire Dataset</a></li>
        </ul>

        <p className="text-docs-text leading-relaxed mt-4">
          By linking image observations to fire events, sensor metadata, and
          environmental context, FFONTO enables advanced image analysis,
          computer vision, and AI-based fire detection workflows.
        </p>
      </section>

      {/* Audio Data */}
      <section id="audio-data" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          3. Environmental Audio Data
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          Environmental audio data provides complementary information for early
          fire detection, particularly in low-visibility conditions.
        </p>

        <p className="text-docs-text leading-relaxed mb-4">
          FFONTO models audio observations such as:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4 mb-4">
          <li>Fire crackling sounds</li>
          <li>Wind and environmental background noise</li>
          <li>Acoustic patterns associated with combustion</li>
        </ul>

        <p className="text-docs-text leading-relaxed mb-4">
          Audio data is collected from public dataset sources such as:
        </p>

        <ul className="list-disc list-inside text-docs-text space-y-2 ml-4">
          <li><a href="https://www.kaggle.com/datasets/irmiot22/fsc22-dataset">FSC22 Dataset</a></li>
          <li><a href="https://www.kaggle.com/datasets/forestprotection/forest-wild-fire-sound-dataset">Forest Wild Fire Sound Dataset</a></li>
        </ul>

        <p className="text-docs-text leading-relaxed mt-4">
          By integrating audio observations with weather and image data, FFONTO
          supports multi-modal fire detection approaches, improving robustness
          and detection accuracy.
        </p>
      </section>
    </div>
  );
}

export default DataSources;
