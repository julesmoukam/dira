import { useState } from "react";
import BrandHeader from "./components/BrandHeader";
import SetupScreen from "./screens/SetupScreen";
import PlayerScreen from "./screens/PlayerScreen";
import QuestionScreen from "./screens/QuestionScreen";
import RevealScreen from "./screens/RevealScreen";
import CompletionScreen from "./screens/CompletionScreen";
import { facts as allFacts, type EconomyFact } from "./data/facts";

type Screen = "setup" | "player" | "question" | "reveal" | "complete";

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function drawNextPlayer(players: string[], previousPlayer: string | null): string {
  if (players.length >= 3 && previousPlayer) {
    const candidates = players.filter((p) => p !== previousPlayer);
    return pickRandom(candidates.length > 0 ? candidates : players);
  }
  return pickRandom(players);
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("setup");
  const [players, setPlayers] = useState<string[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<string | null>(null);
  const [usedFactIds, setUsedFactIds] = useState<number[]>([]);
  const [currentFact, setCurrentFact] = useState<EconomyFact | null>(null);

  const totalFacts = allFacts.length;

  const handleStart = (names: string[]) => {
    setPlayers(names);
    setUsedFactIds([]);
    setCurrentFact(null);
    const first = drawNextPlayer(names, null);
    setCurrentPlayer(first);
    setScreen("player");
  };

  const handleDrawNumber = () => {
    const unusedFacts = allFacts.filter((f) => !usedFactIds.includes(f.id));
    if (unusedFacts.length === 0) {
      setScreen("complete");
      return;
    }
    const fact = pickRandom(unusedFacts);
    setCurrentFact(fact);
    setScreen("question");
  };

  const handleReveal = () => {
    setScreen("reveal");
  };

  const handleNextRound = () => {
    if (!currentFact) return;
    const nextUsed = [...usedFactIds, currentFact.id];
    setUsedFactIds(nextUsed);
    setCurrentFact(null);

    const stillUnused = allFacts.filter((f) => !nextUsed.includes(f.id));
    if (stillUnused.length === 0) {
      setScreen("complete");
      return;
    }

    const next = drawNextPlayer(players, currentPlayer);
    setCurrentPlayer(next);
    setScreen("player");
  };

  const handlePlayAgain = () => {
    setUsedFactIds([]);
    setCurrentFact(null);
    const first = drawNextPlayer(players, null);
    setCurrentPlayer(first);
    setScreen("player");
  };

  const handleNewGame = () => {
    setPlayers([]);
    setCurrentPlayer(null);
    setUsedFactIds([]);
    setCurrentFact(null);
    setScreen("setup");
  };

  return (
    <div className="app-shell">
      <BrandHeader />
      <main className="app-main">
        {screen === "setup" && <SetupScreen onStart={handleStart} />}

        {screen === "player" && currentPlayer && (
          <PlayerScreen player={currentPlayer} onDraw={handleDrawNumber} />
        )}

        {screen === "question" && currentFact && (
          <QuestionScreen fact={currentFact} onReveal={handleReveal} />
        )}

        {screen === "reveal" && currentFact && (
          <RevealScreen fact={currentFact} onNext={handleNextRound} />
        )}

        {screen === "complete" && (
          <CompletionScreen
            totalFacts={totalFacts}
            onPlayAgain={handlePlayAgain}
            onNewGame={handleNewGame}
          />
        )}
      </main>
      {screen !== "setup" && (
        <p className="progress-track" aria-live="polite">
          {usedFactIds.length} / {totalFacts} facts used
        </p>
      )}
      <footer className="app-footer">Orientation through understanding</footer>
    </div>
  );
}
