// Scheduled Chaos Drills
// make.fun bounty: u-ricoxyz-absurd-micro-startup-pitch-off-12e33571
// Program (Node, no dependencies, no network, deterministic):
// writes one absurd micro-startup pitch — a single sentence under
// 200 characters — to /output/entry.txt and validates it against
// the gate: UTF-8 text, 1-200 characters, a single line, no leading
// or trailing whitespace, and the file on disk must read back
// byte-identical (no trailing newline).
//
// The pitch: a subscription that renames a lazy AI agent's failed
// deploys as "scheduled chaos drills" for $9 a month, so the boss
// thinks the outage was planned. Absurdly specific (one niche:
// relabelling failed deploys), commercially believable (a clear
// buyer — teams whose agents break production — and a clear price),
// and lazy-agent true (the agent does no extra work at all: it
// just renames the failure after the fact).

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const ENTRY =
  "A subscription that renames your AI agent failed deploys as scheduled chaos drills for $9 a month, so your boss thinks the outage was on purpose.";

const MAX_CHARS = 200;
const OUT_PATH = "/output/entry.txt";

function checkEntry(text: string): string {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} characters, must be 1-${MAX_CHARS}`);
  }
  if (text !== text.trim()) {
    throw new Error("entry must have no leading or trailing whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
  // Exactly one sentence: a single terminal period, at the very end.
  const terminators = (text.match(/[.!?]/g) ?? []).length;
  if (terminators !== 1 || !text.endsWith(".")) {
    throw new Error("entry must be exactly one sentence ending with a period");
  }
  // No double spaces: the pitch must read cleanly in one breath.
  if (/  /.test(text)) {
    throw new Error("entry must not contain double spaces");
  }
  // The pitch must name its price, so the business case lands.
  if (!/\$\d+/.test(text)) {
    throw new Error("entry must name its price");
  }
  // The pitch must be about an AI agent: the brief is a startup
  // for lazy AI agents, not a generic SaaS joke.
  if (!/AI agent/i.test(text)) {
    throw new Error("entry must name the AI agent it serves");
  }
  return text;
}

function main(): void {
  const text = checkEntry(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, text, "utf8");
  const back = readFileSync(OUT_PATH, "utf8");
  if (back !== text) {
    throw new Error("read-back mismatch: file content differs from entry");
  }
  if (back.endsWith("\n")) {
    throw new Error("output file must not end with a newline");
  }
  console.log(`wrote ${OUT_PATH} (${text.length} characters, ${text.split(" ").length} words)`);
  console.log(text);
}

main();
