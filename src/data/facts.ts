/**
 * Dira — 1–100 of the Economy
 * Fact bank for Cameroon's economy.
 */

export type EconomyFact = {
  id: number;
  displayNumber: string;
  headline: string;
  question: string;
  answer: string;
  source: string;
  year: string;
  sourceUrl?: string;
  category?: string;
};

export const facts: EconomyFact[] = [
  {
    id: 1,
    displayNumber: "1",
    headline: "1.5% of GDP",
    question: "What does 1 represent in Cameroon's economy?",
    answer:
      "Cameroon's overall fiscal deficit widened to 1.5% of GDP in 2024, up from 0.7% in 2023.",
    source: "World Bank — Cameroon 2025 Economic Update",
    year: "2024",
    sourceUrl: "",
    category: "Public Finance",
  },
  {
    id: 2,
    displayNumber: "2",
    headline: "23.4%",
    question: "What does 2 represent in Cameroon's economy?",
    answer:
      "Only 23.4% of Cameroonian households used clean fuels and technologies for cooking in 2022.",
    source: "INS Cameroon — ECAM-5",
    year: "2022",
    sourceUrl: "",
    category: "Energy / Living Standards",
  },
  {
    id: 3,
    displayNumber: "3",
    headline: "37.7%",
    question: "What does 3 represent in Cameroon's economy?",
    answer:
      "Cameroon's national poverty rate was 37.7% in 2022, meaning nearly 4 in 10 people lived below the national poverty line.",
    source: "INS Cameroon — ECAM-5",
    year: "2022",
    sourceUrl: "",
    category: "Poverty",
  },
  {
    id: 4,
    displayNumber: "4",
    headline: "46.8% of GDP",
    question: "What does 4 represent in Cameroon's economy?",
    answer:
      "Total public and publicly guaranteed debt reached 46.8% of GDP in December 2024, compared with 46.1% in 2023.",
    source: "World Bank — Cameroon 2025 Economic Update",
    year: "2024",
    sourceUrl: "",
    category: "Debt",
  },
  {
    id: 5,
    displayNumber: "5",
    headline: "56.3%",
    question: "What does 5 represent in Cameroon's economy?",
    answer:
      "Rural poverty stood at 56.3% in 2022, compared with 21.6% in urban areas.",
    source: "INS Cameroon — ECAM-5",
    year: "2022",
    sourceUrl: "",
    category: "Poverty",
  },
  {
    id: 6,
    displayNumber: "6",
    headline: "Over 60%",
    question: "What does 6 represent in Cameroon's economy?",
    answer:
      "Cameroon generates over 60% of the net foreign-exchange reserves held by BEAC for the CEMAC sub-region.",
    source: "World Bank / BEAC",
    year: "Latest available",
    sourceUrl: "",
    category: "Regional / External Sector",
  },
  {
    id: 7,
    displayNumber: "7",
    headline: "72%",
    question: "What does 7 represent in Cameroon's economy?",
    answer:
      "Cameroon's national electricity-access rate reached approximately 72% of the population, though access does not necessarily mean reliable electricity.",
    source: "World Bank",
    year: "Latest available",
    sourceUrl: "",
    category: "Infrastructure",
  },
  {
    id: 8,
    displayNumber: "8",
    headline: "813 FCFA",
    question: "What does 8 represent in Cameroon's economy?",
    answer:
      "Cameroon's national poverty line was set at 813 FCFA per adult equivalent per day in the ECAM-5 results.",
    source: "INS Cameroon — ECAM-5",
    year: "2022",
    sourceUrl: "",
    category: "Poverty",
  },
  {
    id: 9,
    displayNumber: "9",
    headline: "90.1%",
    question: "What does 9 represent in Cameroon's economy?",
    answer:
      "About 90.1% of total employment in Cameroon was classified as informal under the harmonized ILO measure.",
    source: "ILOSTAT",
    year: "Latest available",
    sourceUrl: "",
    category: "Employment / Informality",
  },
  {
    id: 10,
    displayNumber: "10",
    headline: "10%",
    question: "What does 10 represent in Cameroon's economy?",
    answer:
      "Only around 10% of Cameroon's population was covered by at least one official social-protection benefit.",
    source: "ILOSTAT — SDG 1.3.1",
    year: "2022",
    sourceUrl: "",
    category: "Social Protection",
  },
  {
    id: 11,
    displayNumber: "11",
    headline: "11%",
    question: "What does 11 represent in Cameroon's economy?",
    answer:
      "Cameroon's national wealth per capita fell by about 11% between 1995 and 2020, as population growth outpaced wealth accumulation.",
    source: "World Bank Wealth Accounts / Economic Update",
    year: "1995–2020",
    sourceUrl: "",
    category: "Wealth / Development",
  },
  {
    id: 12,
    displayNumber: "12",
    headline: "12.6% of GDP",
    question: "What does 12 represent in Cameroon's economy?",
    answer:
      "Government tax and non-tax revenues amounted to only about 12.6% of GDP in 2020, reflecting weak domestic revenue mobilization.",
    source: "World Bank Macro Poverty Outlook",
    year: "2020",
    sourceUrl: "",
    category: "Public Finance",
  },
  {
    id: 13,
    displayNumber: "13",
    headline: "13.6% of GDP",
    question: "What does 13 represent in Cameroon's economy?",
    answer:
      "Non-oil domestic revenue stood at about 13.6% of GDP in 2024, with a target of 14.4% by 2027.",
    source: "MINFI / IMF",
    year: "2024",
    sourceUrl: "",
    category: "Public Finance",
  },
  {
    id: 14,
    displayNumber: "14",
    headline: "14.9%",
    question: "What does 14 represent in Cameroon's economy?",
    answer:
      "Youth unemployment among people aged 15–24 reached roughly 14.9% under the broader definition that includes discouraged job seekers.",
    source: "INS / UNDP / ILOSTAT",
    year: "Latest available",
    sourceUrl: "",
    category: "Employment",
  },
  {
    id: 15,
    displayNumber: "15",
    headline: "15 million",
    question: "What does 15 represent in Cameroon's economy?",
    answer:
      "Cameroon had approximately 15 million people aged 15–64 in 2021, representing its working-age population.",
    source: "ILOSTAT / UN Population Division",
    year: "2021",
    sourceUrl: "",
    category: "Demographics",
  },
];

export default facts;
