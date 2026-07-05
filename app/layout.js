export const metadata = {
  title: 'CaptionGen - social caption generator',
  description: 'Quick social media captions. Ad-friendly, fast, and shareable.',
}

export default function RootLayout({ children }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''
  return (
    <html lang="en">
      <head>
        {GA_ID && (
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
        )}
        {GA_ID && (
          <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}');` }} />
        )}
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white border-b">
            <div className="mx-auto max-w-4xl w-full px-6 py-4 flex items-center justify-between">
              <a href="/" className="text-xl font-semibold">CaptionGen</a>
              <nav className="text-sm text-gray-600">
                <a className="mr-4" href="/">Home</a>
                <a href="/generator">Generator</a>
              </nav>
            </div>
          </header>

          <main className="flex-1 mx-auto max-w-4xl w-full px-6 py-8">
            {children}
          </main>

          <footer className="bg-white border-t">
            <div className="mx-auto max-w-4xl w-full px-6 py-6 text-sm text-gray-600">
              Built with ❤️ — placeholder privacy & terms. Add your AdSense publisher ID and deploy.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
