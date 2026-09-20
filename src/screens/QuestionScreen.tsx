import PrimaryButton from "../components/PrimaryButton";
import type { EconomyFact } from "../data/facts";

type QuestionScreenProps = {
  fact: EconomyFact;
  onReveal: () => void;
};

export default function QuestionScreen({ fact, onReveal }: QuestionScreenProps) {
  return (
    <div className="screen">
      <span className="meta-label">Fact {fact.displayNumber}</span>
      <p className="giant-number">{fact.displayNumber}</p>
      <p className="body-text">{fact.question}</p>
      <PrimaryButton onClick={onReveal} autoFocus>
        Reveal answer
      </PrimaryButton>
    </div>
  );
}
