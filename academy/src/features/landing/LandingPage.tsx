import { Link } from "react-router";
import { Button } from "../../shared/ui/Button";

export function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-bg">
      <h1 className="text-3xl font-bold text-text">Rust Academy</h1>
      <p className="text-muted">Interactive kata dojo for learning Rust.</p>
      <Link to="/parcours">
        <Button size="lg">Voir le parcours</Button>
      </Link>
    </main>
  );
}
