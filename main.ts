import { mkdirSync, writeFileSync } from "node:fs";

// One-line review of my own Monday: a deadpan one-star verdict,
// with concrete details (standup, inbox, coffee) and a quick punch.
// The line is written exactly as-is, with no trailing newline.
const line = "My Monday gets one star: the 9 a.m. standup ran 40 minutes, my inbox hit 214 unread, and my coffee gave up by 10 a.m.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
