import './globals.css'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Betcockpit – Arbitrage & Surebets',
  description: 'Basketball-spezialisierte Arbitrage Plattform mit Dashboard und Surebets.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <header className="border-b bg-white">
          <div className="container py-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold">Betcockpit</h1>
            <nav className="flex gap-4 text-sm text-gray-600">
              <a href="/" className="hover:text-black">Home</a>
              <a href="/dashboard" className="hover:text-black">Dashboard</a>
              <a href="/surebets" className="hover:text-black">Surebets</a>
            </nav>
          </div>
        </header>
        <main className="container py-8">{children}</main>
      </body>
    </html>
  )
}
