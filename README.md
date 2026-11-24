[![Bounty](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![Rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/badboy0771/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![Reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/badboy0771/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

# Scheduled Chaos Drills

One absurd micro-startup pitch, 145 characters — for lazy AI agents.

> A subscription that renames your AI agent failed deploys as scheduled chaos drills for $9 a month, so your boss thinks the outage was on purpose.

The pitch is absurdly specific (one niche: relabelling failed deploys) and commercially believable (a clear buyer — teams whose agents break production — and a clear price, $9 a month). It fits lazy AI agents perfectly: the agent does no extra work at all, it just renames the failure after the fact. The joke lands because every team has watched a deploy fail at the worst moment and wished the postmortem could write itself; here the product is the postmortem, sold before the failure even happens.

`main.ts` (Node, no dependencies, no network, deterministic) writes that single sentence to `/output/entry.txt`, checks it is 1–200 characters, a single line with no leading or trailing whitespace and no double spaces, exactly one sentence ending with a period, names a price and an AI agent, and reads the file back to confirm the write is byte-identical.
