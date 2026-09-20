import PrimaryButton from "../components/PrimaryButton";

type PlayerScreenProps = {
  player: string;
  onDraw: () => void;
};

export default function PlayerScreen({ player, onDraw }: PlayerScreenProps) {
  return (
    <div className="screen">
      <span className="eyebrow">Next player</span>
      <h1 className="player-name">
        {player},
        <br />
        you're up.
      </h1>
      <div className="orientation-line" />
      <PrimaryButton onClick={onDraw} autoFocus>
        Draw a number
      </PrimaryButton>
    </div>
  );
}
