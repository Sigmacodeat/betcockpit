import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const items = [
    {
      id: 'arb_1',
      match: 'LAL vs GSW',
      market: 'Moneyline',
      profitPct: 2.1,
      books: ['Pinnacle', 'Betfair']
    },
    {
      id: 'arb_2',
      match: 'BOS vs MIA',
      market: 'Total Points',
      profitPct: 1.6,
      books: ['Bet365', 'Unibet']
    }
  ]
  return NextResponse.json({ items })
}
