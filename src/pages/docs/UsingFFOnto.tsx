export function UsingFFOnto() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-docs-heading mb-6">
        Using FFOnto
      </h1>

      <p className="text-docs-text text-lg leading-relaxed mb-8">
        This page demonstrates how to query FOO (the FFOnto knowledge graph)
        using SPARQL to answer natural language questions related to forest fire
        detection and observation.
      </p>

      <section id="how-to-query" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-4">
          1. How to Query FFOnto
        </h2>

        <p className="text-docs-text leading-relaxed mb-4">
          FFOnto can be queried using SPARQL, the standard query language for RDF
          and knowledge graphs. SPARQL enables users to retrieve, filter, and
          reason over fire-related events, sensor observations, and environmental
          conditions modeled in FFOnto.
        </p>

        <p className="text-docs-text leading-relaxed">
          The following examples show how common natural language questions
          can be translated into SPARQL queries.
        </p>
      </section>

      {/* Queries */}
      <section id="sparql-examples" className="mb-12">
        <h2 className="text-2xl font-semibold text-docs-heading mb-6">
          SPARQL Query Examples
        </h2>

        {/* Query 1 */}
        <QueryBlock
          id="q1"
          question="Which fire events have been detected?"
          query={`PREFIX ff: <https://w3id.org/def/ffonto#>

SELECT ?fireEvent
WHERE {
  ?fireEvent a ff:ForestFire .
}`}
        />

        {/* Query 2 */}
        <QueryBlock
          id="q2"
          question="Which sensors detected a specific fire event?"
          query={`PREFIX ff: <https://w3id.org/def/ffonto#>

SELECT ?sensor
WHERE {
  ?observation ff:observedFire ?fireEvent ;
               ff:madeBySensor ?sensor .
}`}
        />

        {/* Query 3 */}
        <QueryBlock
          id="q3"
          question="What weather conditions were present during a fire?"
          query={`PREFIX ff: <https://w3id.org/def/ffonto#>

SELECT ?temperature ?humidity ?windSpeed
WHERE {
  ?weatherObs ff:relatedToFire ?fireEvent ;
              ff:airTemperature ?temperature ;
              ff:relativeHumidity ?humidity ;
              ff:windSpeed ?windSpeed .
}`}
        />

        {/* Query 4 */}
        <QueryBlock
          id="q4"
          question="Which fires occurred within a specific time interval?"
          query={`PREFIX ff: <https://w3id.org/def/ffonto#>
PREFIX time: <http://www.w3.org/2006/time#>

SELECT ?fireEvent
WHERE {
  ?fireEvent ff:hasTime ?t .
  ?t time:inXSDDateTime ?dateTime .
  FILTER (?dateTime >= "2024-01-01T00:00:00"^^xsd:dateTime &&
          ?dateTime <= "2024-01-31T23:59:59"^^xsd:dateTime)
}`}
        />

        {/* Query 5 */}
        <QueryBlock
          id="q5"
          question="Which fire events were detected using image data?"
          query={`PREFIX ff: <https://w3id.org/def/ffonto#>

SELECT DISTINCT ?fireEvent
WHERE {
  ?observation a ff:ImageObservation ;
               ff:observedFire ?fireEvent .
}`}
        />

        {/* Query 6 */}
        <QueryBlock
          id="q6"
          question="Which fire events were detected using audio sensors?"
          query={`PREFIX ff: <https://w3id.org/def/ffonto#>

SELECT DISTINCT ?fireEvent
WHERE {
  ?observation a ff:AudioObservation ;
               ff:observedFire ?fireEvent .
}`}
        />

        {/* Query 7 */}
        <QueryBlock
          id="q7"
          question="What fires occurred under high wind conditions?"
          query={`PREFIX ff: <https://w3id.org/def/ffonto#>

SELECT ?fireEvent ?windSpeed
WHERE {
  ?weatherObs ff:relatedToFire ?fireEvent ;
              ff:windSpeed ?windSpeed .
  FILTER (?windSpeed > 10)
}`}
        />

        {/* Query 8 */}
        <QueryBlock
          id="q8"
          question="Which locations have experienced fire events?"
          query={`PREFIX ff: <https://w3id.org/def/ffonto#>

SELECT DISTINCT ?location
WHERE {
  ?fireEvent a ff:ForestFire ;
             ff:hasLocation ?location .
}`}
        />

        {/* Query 9 */}
        <QueryBlock
          id="q9"
          question="Which fire events were detected by multiple sensor types?"
          query={`PREFIX ff: <https://w3id.org/def/ffonto#>

SELECT ?fireEvent (COUNT(DISTINCT ?sensor) AS ?sensorCount)
WHERE {
  ?observation ff:observedFire ?fireEvent ;
               ff:madeBySensor ?sensor .
}
GROUP BY ?fireEvent
HAVING (COUNT(DISTINCT ?sensor) > 1)
`}
        />

        {/* Query 10 */}
        <QueryBlock
          id="q10"
          question="What environmental conditions are associated with each fire?"
          query={`PREFIX ff: <https://w3id.org/def/ffonto#>

SELECT ?fireEvent ?temperature ?humidity ?windSpeed
WHERE {
  ?fireEvent a ff:ForestFire .
  OPTIONAL {
    ?weatherObs ff:relatedToFire ?fireEvent ;
                ff:airTemperature ?temperature ;
                ff:relativeHumidity ?humidity ;
                ff:windSpeed ?windSpeed .
  }
}`}
        />
      </section>
    </div>
  );
}

/* Reusable query block */
function QueryBlock({
  id,
  question,
  query,
}: {
  id: string;
  question: string;
  query: string;
}) {
  return (
    <div id={id} className="mb-10">
      <h3 className="text-lg font-semibold text-docs-heading mb-2">
        {question}
      </h3>
      <pre className="bg-secondary rounded-lg p-4 overflow-x-auto">
        <code className="text-sm text-docs-heading">{query}</code>
      </pre>
    </div>
  );
}

export default UsingFFOnto;
