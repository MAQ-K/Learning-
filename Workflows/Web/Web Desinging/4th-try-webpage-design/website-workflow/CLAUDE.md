# Website Design Workflow — Project Context

This project runs a 6-phase website design pipeline (see `README.md` for
full details). It's normal for different sessions/chats to pick up work on
the same client at different points — always orient yourself first.

## At the start of every session

1. Check `clients/` for existing client folders.
2. If the user references a client (by name) or it's otherwise clear which
   client is active, read `clients/<client-name>/MANAGEMENT.md` FIRST,
   before doing anything else. It has the project brief, task tracker
   (which phases are done for which pages), and a history log of recent
   decisions. This tells you what's already been decided without needing
   to re-read every profile/plan/notes file individually.
3. If there's no `MANAGEMENT.md` for that client yet, note that — it means
   `/step1-intake` hasn't been run yet, or was run before this file existed
   in the project (in which case, create one from
   `templates/management-template.md` using what's in `01-profile.md`).
4. If it's ambiguous which client the user means, ask — don't guess.

## At the end of every phase command

Every phase command (`/step1-intake` through `/step6-pencil`,
`/new-submission`) should update `clients/<client-name>/MANAGEMENT.md`:
- Check off the relevant cell in the Task Tracker table
- Add one short entry to the top of the History Log
- Add to Open Questions/Flags if anything was surfaced but not resolved
  (e.g. Phase 4 flagging a missing section, Phase 1 marking something
  "Needs client input")
- Update "Currently in progress" to reflect what's next

Keep entries short — this file is for fast orientation, not a full record.
`notes.md` inside each page's folder already holds the detailed log.

## Hard rules (apply across all phases, repeated here for visibility)

- Content and page structure are locked in Phase 1 (`02-page-plan.md`).
  Phases 2-6 only change how a page looks, never what it contains.
- Never copy another site's actual source code (Phases 4-5) — extract
  patterns, describe them in plain English, build original implementations.
- One page's HTML is built progressively across Phases 2-6 by editing the
  same file — never regenerate it from scratch partway through.
