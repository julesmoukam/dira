/**
 * Dira — 1–100 of the Economy
 * Fact bank for Cameroon's economy.
 *
 * This file is intentionally simple so a non-developer can edit it.
 * Add, remove, or edit objects below — the game logic adapts to
 * however many facts exist (it does not require exactly 100).
 *
 * Fields:
 * - id:            unique number, also used as the "card" the player sees
 * - displayNumber: the number shown on screen (usually same as id)
 * - headline:      the big revealed statistic, e.g. "23.2%"
 * - question:      what's asked before reveal
 * - answer:         the explanation revealed after the headline
 * - source:        who published the figure
 * - year:          year of the figure
 * - sourceUrl:      optional link to the source (opens in new tab)
 * - category:       optional, not shown before reveal in V1
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
  },
  {
    id: 4,
    displayNumber: "4",
    headline: "~4%",
    question: "What does 4 represent in Cameroon's economy?",
    answer:
      "Cameroon's real GDP growth rate hovered around 4% in recent years, driven mainly by services and agriculture.",
    source: "World Bank",
    year: "2023",
    sourceUrl: "https://data.worldbank.org/country/cameroon",
    category: "Growth",
  },
  {
    id: 70,
    displayNumber: "70",
    headline: "~70%",
    question: "What does 70 represent in Cameroon's economy?",
    answer:
      "Roughly 70% of Cameroon's workforce is employed in the informal sector, outside formal registration and taxation.",
    source: "National Institute of Statistics (Cameroon)",
    year: "2021",
    sourceUrl: "",
    category: "Informality",
  },
  {
    id: 37,
    displayNumber: "37",
    headline: "37.7%",
    question: "What does 37 represent in Cameroon's economy?",
    answer:
      "About 37.7% of Cameroonians lived below the national poverty line, with poverty heavily concentrated in the northern regions.",
    source: "World Bank",
    year: "2021",
    sourceUrl: "https://data.worldbank.org/indicator/SI.POV.NAHC?locations=CM",
    category: "Poverty",
  },
  {
    id: 5,
    displayNumber: "5",
    headline: "~5%",
    question: "What does 5 represent in Cameroon's economy?",
    answer:
      "Agriculture, forestry, and fishing directly account for roughly a quarter of GDP, but the sector's growth contribution has slowed to around 5% of annual growth drivers in recent years.",
    source: "African Development Bank",
    year: "2022",
    sourceUrl: "",
    category: "Agriculture",
  },
  {
    id: 27,
    displayNumber: "27",
    headline: "27 million",
    question: "What does 27 represent in Cameroon's economy?",
    answer:
      "Cameroon's population reached approximately 27 million people, making it one of Central Africa's largest domestic markets.",
    source: "World Bank",
    year: "2022",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=CM",
    category: "Demographics",
  },
  {
    id: 45,
    displayNumber: "45",
    headline: "~45%",
    question: "What does 45 represent in Cameroon's economy?",
    answer:
      "The services sector contributes close to 45% of Cameroon's GDP, ahead of both agriculture and industry.",
    source: "World Bank",
    year: "2022",
    sourceUrl: "",
    category: "Sectors",
  },
  {
    id: 15,
    displayNumber: "15",
    headline: "~15%",
    question: "What does 15 represent in Cameroon's economy?",
    answer:
      "The industry sector, including oil, construction, and manufacturing, contributes roughly 15–25% of GDP depending on the year and oil prices.",
    source: "African Development Bank",
    year: "2022",
    sourceUrl: "",
    category: "Sectors",
  },
  {
    id: 60,
    displayNumber: "60",
    headline: "~60%",
    question: "What does 60 represent in Cameroon's economy?",
    answer:
      "Around 60% of Cameroon's population is under the age of 25, giving the country one of the youngest workforces in the region.",
    source: "United Nations Population Division",
    year: "2022",
    sourceUrl: "",
    category: "Demographics",
  },
  {
    id: 8,
    displayNumber: "8",
    headline: "~8%",
    question: "What does 8 represent in Cameroon's economy?",
    answer:
      "Official unemployment is reported around 3–8% depending on definition, though this figure masks widespread underemployment in the informal sector.",
    source: "National Institute of Statistics (Cameroon)",
    year: "2021",
    sourceUrl: "",
    category: "Employment",
  },
  {
    id: 52,
    displayNumber: "52",
    headline: "~52%",
    question: "What does 52 represent in Cameroon's economy?",
    answer:
      "Roughly half of Cameroon's population lives in urban areas, with Douala and Yaoundé as the dominant economic hubs.",
    source: "World Bank",
    year: "2022",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=CM",
    category: "Urbanization",
  },
  {
    id: 30,
    displayNumber: "30",
    headline: "~30%",
    question: "What does 30 represent in Cameroon's economy?",
    answer:
      "Cameroon is estimated to account for roughly 30% of CEMAC regional GDP, making it the largest economy in the Central African monetary union.",
    source: "IMF",
    year: "2022",
    sourceUrl: "",
    category: "Regional",
  },
];

export default facts;
