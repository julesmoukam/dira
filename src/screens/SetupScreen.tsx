import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

type SetupScreenProps = {
  onStart: (players: string[]) => void;
};

export default function SetupScreen({ onStart }: SetupScreenProps) {
  const [names, setNames] = useState<string[]>(["", ""]);
  const [attemptedStart, setAttemptedStart] = useState(false);

  const updateName = (index: number, value: string) => {
    setNames((prev) => prev.map((n, i) => (i === index ? value : n)));
  };

  const addPlayer = () => {
    setNames((prev) => [...prev, ""]);
  };

  const removePlayer = (index: number) => {
    setNames((prev) => prev.filter((_, i) => i !== index));
  };

  const validNames = names.map((n) => n.trim()).filter((n) => n.length > 0);
  const canStart = validNames.length >= 2;

  const handleStart = () => {
    setAttemptedStart(true);
    if (canStart) {
      onStart(validNames);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleStart();
    }
  };

  return (
    <div className="screen">
      <span className="eyebrow">Dira presents</span>
      <h1 className="title-serif title-xl">
        1–100
        <br />
        of the Economy
      </h1>
      <p className="body-text">
        A number. A fact. How well do you know Cameroon's economy?
      </p>

      <div className="setup-form">
        <div className="player-list">
          {names.map((name, index) => (
            <div className="player-input-row" key={index}>
              <label htmlFor={`player-${index}`}>Player {index + 1} name</label>
              <input
                id={`player-${index}`}
                className="player-input"
                type="text"
                placeholder={`Player ${index + 1}`}
                value={name}
                onChange={(e) => updateName(index, e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
              />
              {names.length > 2 && (
                <button
                  type="button"
                  className="btn-icon"
                  onClick={() => removePlayer(index)}
                  aria-label={`Remove player ${index + 1}`}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>

        <button type="button" className="add-player-btn" onClick={addPlayer}>
          + Add player
        </button>

        <p className="setup-hint" role="status">
          {attemptedStart && !canStart
            ? "Enter at least two player names to begin."
            : "\u00A0"}
        </p>

        <PrimaryButton onClick={handleStart} disabled={false}>
          Start game
        </PrimaryButton>
      </div>
    </div>
  );
}
