# Wine Atlas MVP Web App

A bilingual (English/Thai) MVP architecture for an interactive wine atlas that combines map-based exploration, curated browsing, and contextual ecommerce product linking.

## Stack
- Next.js (App Router) + TypeScript
- TailwindCSS-ready component structure
- Mapbox GL JS map integration layer
- PostgreSQL schema with hierarchy + product mapping

## Core Features Implemented in this scaffold
- **Map mode** with clickable/hoverable wine regions
- **Browse mode** with curated collections
- **Hierarchy content pages** (`country -> region -> subregion -> appellation`)
- **Bilingual routing** (`/en/...` and `/th/...`)
- **SEO metadata generation** per geography node
- **Manual product linking** via mapping table

## Project Structure

```text
app/
  [lang]/
    page.tsx                      # Home: map + browse entry
    browse/page.tsx               # Browse mode
    [country]/page.tsx            # Country page
    [country]/[region]/page.tsx   # Region page
    [country]/[region]/[subregion]/page.tsx
    [country]/[region]/[subregion]/[appellation]/page.tsx
components/
  map/WineMap.tsx
  content/Breadcrumbs.tsx
  content/InfoPanel.tsx
  content/ProductPanel.tsx
  browse/BrowseSection.tsx
lib/
  i18n.ts
  seo.ts
  data.ts
  map.ts
  product-linking.ts
data/
  regions.sample.json
  products.sample.json
db/
  schema.sql
```

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Open:

- `http://localhost:3000/en`
- `http://localhost:3000/th`

## MVP Data Scope
- France
- Italy
- Spain
- USA
- Australia

## Notes
- GeoJSON is currently loaded from local sample data for MVP.
- Product links use manual `content_id -> sku -> priority` mapping; can later swap to Magento GraphQL.
