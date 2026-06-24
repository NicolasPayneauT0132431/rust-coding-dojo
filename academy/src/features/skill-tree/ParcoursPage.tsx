import { useMemo } from "react";
import { Link } from "react-router";
import { Header } from "../../shared/layout/Header";
import { Badge } from "../../shared/ui/Badge";
import { Button } from "../../shared/ui/Button";
import { ProgressBar } from "../../shared/ui/ProgressBar";
import { kataLevels } from "../../data/katas";
import type { KataDifficulty } from "../../data/katas";

const difficultyConfig: Record<KataDifficulty, { label: string; variant: "info" | "success" | "warning" | "error" }> = {
  beginner: { label: "Débutant", variant: "success" },
  intermediate: { label: "Intermédiaire", variant: "warning" },
  expert: { label: "Expert", variant: "error" },
};

const levelColors: Record<string, string> = {
  setup: "#3b82f6",
  starter: "#22c55e",
  structure: "#a855f7",
  advanced: "#ef4444",
};

function KataCard({ kata }: { kata: (typeof kataLevels)[number]["katas"][number] }) {
  const diff = difficultyConfig[kata.difficulty];

  return (
    <div className="rounded-lg border border-border bg-surface p-4 transition-shadow hover:shadow-md">
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="font-medium text-text">{kata.title}</h3>
        <Badge variant={diff.variant}>{diff.label}</Badge>
      </div>
      <p className="mb-3 text-sm text-muted">{kata.description}</p>
      <div className="mb-3 flex flex-wrap gap-1.5">
        {kata.topics.slice(0, 4).map((topic) => (
          <span
            key={topic}
            className="rounded-md bg-bg px-2 py-0.5 text-xs text-muted"
          >
            {topic}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted">{kata.duration}</span>
        <Button size="sm" variant="secondary">
          Commencer
        </Button>
      </div>
    </div>
  );
}

function LevelSection({ level }: { level: (typeof kataLevels)[number] }) {
  const completed = 0;
  const total = level.katas.length;

  return (
    <section>
      <div
        className="mb-2 h-1 w-12 rounded-full"
        style={{ backgroundColor: levelColors[level.id] ?? "var(--color-accent)" }}
      />
      <h2 className="mb-1 text-xl font-semibold text-text">{level.name}</h2>
      <p className="mb-4 text-sm text-muted">{level.description}</p>

      {total > 0 && (
        <div className="mb-4 flex items-center gap-3">
          <ProgressBar value={completed} max={total} color={levelColors[level.id]} animated={false} />
          <span className="whitespace-nowrap text-xs text-muted">
            {completed}/{total}
          </span>
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        {level.katas.map((kata) => (
          <KataCard key={kata.id} kata={kata} />
        ))}
        {total === 0 && (
          <p className="col-span-full text-sm italic text-muted">Prochainement...</p>
        )}
      </div>
    </section>
  );
}

export function ParcoursPage() {
  const totalKatas = useMemo(
    () => kataLevels.reduce((acc, l) => acc + l.katas.length, 0),
    [],
  );
  const completedKatas = 0;

  return (
    <div className="min-h-screen bg-bg">
      <Header title="Parcours" />

      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8">
          <Link
            to="/"
            className="mb-4 inline-flex items-center gap-1 text-sm text-muted hover:text-text"
          >
            &larr; Retour à l'accueil
          </Link>

          <div className="mb-2 flex items-baseline justify-between">
            <p className="text-sm text-muted">Progression globale</p>
            <span className="text-sm font-medium text-text">
              {completedKatas}/{totalKatas} katas
            </span>
          </div>
          <ProgressBar value={completedKatas} max={totalKatas} animated={false} />
        </div>

        <div className="space-y-10">
          {kataLevels.map((level) => (
            <LevelSection key={level.id} level={level} />
          ))}
        </div>
      </main>
    </div>
  );
}
