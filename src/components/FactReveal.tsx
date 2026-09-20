import type { EconomyFact } from "../data/facts";

type FactRevealProps = {
  fact: EconomyFact;
};

export default function FactReveal({ fact }: FactRevealProps) {
  return (
    <div className="screen" role="region" aria-label="Revealed answer">
      <span className="meta-label">Fact {fact.displayNumber}</span>
      <h2 className="giant-headline">{fact.headline}</h2>
      <p className="body-text">{fact.answer}</p>
      <div className="orientation-line" />
      <p className="reveal-source">
        {fact.sourceUrl ? (
          <a href={fact.sourceUrl} target="_blank" rel="noopener noreferrer">
            {fact.source}
          </a>
        ) : (
          fact.source
        )}
        {" · "}
        {fact.year}
      </p>
    </div>
  );
}
