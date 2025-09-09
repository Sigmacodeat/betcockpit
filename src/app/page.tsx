export default function HomePage() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Willkommen bei Betcockpit</h2>
      <p className="text-gray-600">Dein Dashboard für Basketball-Arbitrage & Surebets.</p>
      <div className="flex gap-3">
        <a href="/dashboard" className="px-4 py-2 rounded bg-black text-white">Zum Dashboard</a>
        <a href="/surebets" className="px-4 py-2 rounded border">Live Surebets</a>
      </div>
    </section>
  )
}
