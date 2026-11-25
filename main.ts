// One-Star Review of Something Essential — make.fun entry (v2).
// Writes one line (at most 160 characters) to /output/entry.txt: a
// deadpan one-star review of an everyday essential. Water: no
// flavour, no colour, and somehow I am supposed to drink eight
// glasses of it every single day.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "★☆☆☆☆ Water: no flavour, no colour, and somehow I am supposed to drink eight glasses of it every single day.";

// Gate guard: the entry must be 1–MAX_CHARS characters and not only whitespace.
const MAX_CHARS = 160;

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
