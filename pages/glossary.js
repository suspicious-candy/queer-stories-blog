import { useState, useMemo } from 'react';
import Layout from '../components/Layout';
import glossaryData from '../content/glossary.json';

export default function Glossary() {
  const [q, setQ] = useState('');
  const filtered = useMemo(
    () => glossaryData.filter(item =>
      item.term.toLowerCase().includes(q.toLowerCase()) ||
      item.definition.toLowerCase().includes(q.toLowerCase())
    ),
    [q]
  );

  return (
    <Layout title="Interactive Glossary">
      <section className="text-center py-12 bg-purple-50">
        <h1 className="text-4xl font-bold mb-4">Queer Terminology</h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Search key terms, hear pronunciations, and dive deeper with video explainers.
        </p>
        <input
          type="search"
          placeholder="Search terms…"
          value={q}
          onChange={e => setQ(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded"
        />
      </section>

      <section className="max-w-3xl mx-auto p-4 grid grid-cols-1 gap-6">
        {filtered.map(({ term, definition, audio, video }) => (
          <div key={term} className="border p-4 rounded shadow-sm bg-white">
            <h2 className="text-2xl font-semibold mb-2">{term}</h2>
            <p className="text-gray-700 mb-3">{definition}</p>
            <div className="flex items-center space-x-4">
              {audio && (
                <audio controls src={audio} className="h-6">
                  Your browser doesn’t support audio.
                </audio>
              )}
              {video && (
                <a href={video} target="_blank" className="text-purple-600 hover:underline">
                  ▶ Watch
                </a>
              )}
            </div>
          </div>
        ))}
        {filtered.length === 0 && <p className="text-center text-gray-500">No terms found.</p>}
      </section>
    </Layout>
  );
}
