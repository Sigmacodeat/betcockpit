export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <p className="text-gray-600">Übersicht über aktuelle Arbs, Performance und Alerts.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg border bg-white p-4">Heutige Arbs: 12</div>
        <div className="rounded-lg border bg-white p-4">ROI (Sim): 4.2%</div>
        <div className="rounded-lg border bg-white p-4">Fehlalarme: &lt; 5%</div>
      </div>
    </section>
  )
}
