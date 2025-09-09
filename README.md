# Betcockpit

Ein modernes Arbitrage- und Basketball-Analytics-Monorepo (MVP-Phase). Ziel: "State of the Art" Setup mit klaren Ignorier-Regeln, reproduzierbaren Builds und sauberer Git-Historie.

## Tech-Stack (aktuell im Repo)
- Next.js App (TypeScript)
- Cypress Tests (Struktur vorhanden)
- Projektkonfigurationen: `.editorconfig`, `.gitattributes`, `.gitignore`

## Lokales Setup
```bash
pnpm install # oder npm/yarn
pnpm dev     # Next.js Dev Server starten
```

## Projektstruktur (Auszug)
- `src/` – Anwendungs-Code (Next.js)
- `cypress/` – E2E/Component Tests
- `.next/`, `node_modules/`, `venv/` – werden ignoriert (nicht im Repo)

## Richtlinien
- Keine Build-/Cache-Artefakte committen (`.next`, `dist`, `node_modules`, Python `venv` etc.)
- TypeScript Build-Infos (`*.tsbuildinfo`) ignorieren
- Konsistente Editor-Settings über `.editorconfig`

## CI/CD & Linting
- Empfohlen: GitHub Actions für Build/Test/Lint (kann später ergänzt werden)

## Lizenz
Proprietär (bis zur Festlegung).
