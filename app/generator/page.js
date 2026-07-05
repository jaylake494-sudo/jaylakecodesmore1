import { useState } from 'react'

export default function GeneratorPage() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  async function onGenerate(e) {
    e?.preventDefault();
    setLoading(true);
    setResult('');
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input })
      })
      const data = await res.json()
      setResult(data.caption || '')
    } catch (err) {
      setResult('Error generating caption')
    } finally { setLoading(false) }
  }

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Social Caption Generator</h1>
      <form onSubmit={onGenerate} className="space-y-4">
        <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Enter topic, keywords, or mood (e.g., 'sunset beach relaxing')" className="w-full p-3 border rounded h-28" />
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded" disabled={loading}>{loading ? 'Generating...' : 'Generate'}</button>
          <button type="button" onClick={() => { setInput(''); setResult('') }} className="px-3 py-2 border rounded">Clear</button>
        </div>
      </form>

      <div className="mt-6">
        <div className="mb-4">
          {/* Placeholder ad slot - replace with AdSense snippet in production */}
          <div className="w-full h-24 bg-gray-200 flex items-center justify-center text-gray-600">Ad slot (replace with AdSense)</div>
        </div>

        <h2 className="text-lg font-semibold">Result</h2>
        <pre className="mt-2 p-4 bg-white border rounded whitespace-pre-wrap">{result || 'Your generated caption will appear here.'}</pre>

        {result && (
          <div className="mt-3 flex items-center space-x-3">
            <button onClick={() => navigator.clipboard?.writeText(result)} className="px-3 py-2 border rounded">Copy</button>
            <a className="px-3 py-2 bg-blue-600 text-white rounded" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(result)}`} target="_blank" rel="noopener noreferrer">Share</a>
          </div>
        )}
      </div>
    </section>
  )
}
