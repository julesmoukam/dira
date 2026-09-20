import PrimaryButton from "../components/PrimaryButton";

type CompletionScreenProps = {
  totalFacts: number;
  onPlayAgain: () => void;
  onNewGame: () => void;
};

export default function CompletionScreen({
  totalFacts,
  onPlayAgain,
  onNewGame,
}: CompletionScreenProps) {
  return (
    <div className="screen">
      <span className="eyebrow">Set complete</span>
      <h1 className="title-serif title-xl">
        {totalFacts} / {totalFacts}
      </h1>
      <p className="body-text">You've completed the current economy set.</p>
      <div className="orientation-line" />
      <div className="btn-row">
        <PrimaryButton onClick={onPlayAgain}>Play again</PrimaryButton>
        <PrimaryButton variant="secondary" onClick={onNewGame}>
          New game
        </PrimaryButton>
      </div>
    </div>
  );
}
