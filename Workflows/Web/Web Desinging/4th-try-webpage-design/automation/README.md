# n8n Intake Automation

This replaces `server/intake-endpoint.js` with an n8n workflow that goes
further: it doesn't just save the form submission, it also runs
`/new-submission` headlessly and notifies you when it's ready for review.
This is the closest to true zero-touch automation without you manually
triggering anything.

## Requirement: self-hosted n8n on the same machine

`claude -p` (headless Claude Code) needs the `claude` CLI installed,
authenticated, and pointed at the actual project folder on disk. That means
**n8n must run on the same machine** as your `website-workflow` project
(or you SSH into that machine from n8n — more setup, not covered here).
n8n Cloud alone can't do this part.

If you're already running things through Laragon/your own server for
Madar Randa or KaTechs, self-hosted n8n (Docker or npm install) on that
same box is the simplest path.

## Setup

1. Import `n8n-intake-workflow.json` into your n8n instance
   (Workflows → Import from File).
2. Edit these two nodes — replace `/PATH/TO/YOUR/PROJECT` with the real
   absolute path to `website-workflow` on that machine:
   - **Write incoming-form.json** — the `fileName` parameter
   - **Run /new-submission (headless)** — the `command` parameter
3. Configure the **Notify - Ready for Review** node with real email
   credentials (or delete it and swap in a Slack/Telegram node — whatever
   you already use for notifications).
4. Activate the workflow. n8n gives you a webhook URL
   (Webhook node → copy Production URL).
5. Update `forms/client-intake-form.html`'s fetch call to point at that
   n8n webhook URL instead of `/api/intake`.
6. Make sure the `claude` CLI is installed and logged in on the machine
   running n8n, and that it has access to `website-workflow`'s
   `.claude/commands/`, `.claude/skills/`, and `skills/` folders.

## What happens on submission

1. Customer submits the form → n8n webhook receives it
2. n8n builds the client record, slugifies the name, writes
   `clients/<slug>/incoming-form.json`
3. n8n runs `claude -p "/new-submission for client <slug>"` headlessly —
   this auto-fills the Step 1 profile and builds the Home page's first
   HTML draft (Phase 1+2), same as running the command manually
4. n8n emails/notifies you that it's ready
5. You review, then continue with `/step3-inspiration` onward manually,
   one command at a time, exactly as before

## Limits

- Step 6 (Pencil) still needs the Pencil desktop app open with a GUI — that
  part can't be headless, so full automation realistically stops before
  Step 6 regardless of n8n.
- `--permission-mode acceptEdits` auto-approves file writes/edits and
  common filesystem commands, but the workflow still needs `--allowedTools`
  for anything using Bash/WebSearch/WebFetch — already set in the command
  node, adjust if `/new-submission` starts needing something else.
- If you'd rather review before anything auto-runs, drop the
  "Run /new-submission" and "Parse Claude Result" nodes and just keep the
  webhook + file-write + notification — that reverts to the earlier
  "form saves data, you run the command yourself" version.
