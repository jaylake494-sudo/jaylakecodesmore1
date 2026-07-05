import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">CaptionGen</h1>
      <p className="mb-6">Generate social media captions quickly. Designed for quick sharing, SEO discovery, and ad monetization.</p>

      <div className="space-x-3">
        <Link className="px-4 py-2 bg-blue-600 text-white rounded" href="/generator">Try the generator</Link>
        <a className="px-4 py-2 border rounded" href="#">Learn more</a>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">How it works</h2>
        <ol className="list-decimal list-inside text-gray-700">
          <li>Enter a topic or keywords</li>
          <li>Click Generate</li>
          <li>Use the caption, copy, and share</li>
        </ol>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold">Monetization</h3>
        <p className="text-gray-700">This scaffold includes placeholder ad slots. Add your Google AdSense publisher ID in the README steps to enable live ads.</p>
      </div>
    </section>
  )
}
