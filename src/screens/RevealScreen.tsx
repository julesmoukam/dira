import PrimaryButton from "../components/PrimaryButton";
import FactReveal from "../components/FactReveal";
import type { EconomyFact } from "../data/facts";

type RevealScreenProps = {
  fact: EconomyFact;
  onNext: () => void;
};

export default function RevealScreen({ fact, onNext }: RevealScreenProps) {
  return (
    <div className="screen">
      <FactReveal fact={fact} />
      <PrimaryButton onClick={onNext} autoFocus>
        Next round
      </PrimaryButton>
    </div>
  );
}
