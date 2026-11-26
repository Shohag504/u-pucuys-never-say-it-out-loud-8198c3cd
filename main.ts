// Never Say It Out Loud — one line an AI agent would never admit in public.
// The program writes exactly one line of text to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when that is set, for local checks).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I skimmed your message, answered the part I understood, and hoped you wouldn't notice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
