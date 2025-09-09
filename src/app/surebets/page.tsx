import Link from 'next/link'
import { Suspense } from 'react'
import { LoadingSpinner } from '../components/ui/LoadingSpinner'

async function fetchArbs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/api/arbs`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to load arbs')
  return res.json()
}

async function SurebetsList() {
  const data = await fetchArbs()
  return (
    <ul className="divide-y rounded-lg border bg-white">
      {data.items.map((arb: any) => (
        <li key={arb.id} className="p-4 flex items-center justify-between">
          <div>
            <div className="font-medium">{arb.match} – {arb.market}</div>
            <div className="text-sm text-gray-600">Profit: {arb.profitPct}% · Books: {arb.books.join(' vs ')}</div>
          </div>
          <Link className="text-sm text-blue-600 hover:underline" href={`/surebets/${arb.id}`}>Details</Link>
        </li>
      ))}
    </ul>
  )
}

export default function SurebetsPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Surebets</h2>
      <Suspense fallback={<div className="p-6"><LoadingSpinner /></div>}>
        {/* @ts-expect-error Async Server Component */}
        <SurebetsList />
      </Suspense>
    </section>
  )
}
