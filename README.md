# Dira — 1–100 of the Economy

A facilitator-led recall game: a number is shown, a player recalls what it
represents in Cameroon's economy, and the facilitator reveals the fact.
Single-page React app, no backend, no accounts.

## Run locally

```
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build

```
npm run build
```

Output goes to `dist/`. Preview the production build with:

```
npm run preview
```

## Edit the economy facts

All facts live in **`src/data/facts.ts`**. Add, remove, or edit entries in
the `facts` array — the game works with any number of facts (30, 65, 100...).

Each fact looks like this:

```ts
{
  id: 23,
  displayNumber: "23",
  headline: "23.2%",
  question: "What does 23 represent in Cameroon's economy?",
  answer:
    "Around 23.2% of young Cameroonians aged 15–24 were not in employment, education, or training (NEET).",
  source: "World Bank / ILO",
  year: "2022",
  sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.NEET.ZS?locations=CM",
  category: "Employment",
}
```

- `id` must be unique.
- `sourceUrl` is optional — leave it as `""` if you don't have a link.
- `category` is stored for future use and is never shown before reveal.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, click **New Project** and import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`.
4. Deploy — no environment variables are required.

Alternatively, from the CLI:

```
npm install -g vercel
vercel
```
