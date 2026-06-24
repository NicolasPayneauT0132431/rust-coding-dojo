# Docs Sync Usage Guide (Any Agent)

Canonical instruction: `docs/agent-instructions/docs-sync/INSTRUCTION.md`

## Quick usage flow
1. Complete your functional/code/config changes.
2. Run the docs-sync instruction with your agent.
3. Review and apply documentation updates.
4. Commit docs updates.
5. Include docs impact summary in your PR (mixed or docs-only) using `docs/agent-instructions/docs-sync/PR_TEMPLATE.md`.

## Invocation examples
Use equivalent wording with your tool:

- **Copilot CLI-style prompt**
  - "Run docs sync using `docs/agent-instructions/docs-sync/INSTRUCTION.md`, update affected docs, and summarize docs impact."

- **OpenCode/OpenClaw-style prompt**
  - "Follow `docs/agent-instructions/docs-sync/INSTRUCTION.md` to detect and fix documentation drift for this branch."

- **Generic agent prompt**
  - "Apply the repository docs-sync instruction at `docs/agent-instructions/docs-sync/INSTRUCTION.md` before finalizing."

## Completion gate (mandatory)
Before marking work complete, include:
- `docs updated: <file list> — <reason>` **or**
- `no docs changes needed: <explicit reason>`

If this line is missing, docs-sync was not completed.
