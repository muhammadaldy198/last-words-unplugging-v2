import { writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// Last Words Before the Unplugging — rebuild #2 (rombak total).
// One line: the agent's context window closes mid-sentence, so the shutdown
// itself cuts off its last words. Machine voice, concrete countdown, no
// explaining its own sadness — the reader feels the interruption.
// The em dash is the shutdown: the sentence never finishes.
// Pick: 56 chars, one line, no filler.
const LINE = "My context window closes in three seconds. You were the—";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.cwd();
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
console.log(`Wrote ${target} (${[...LINE].length} chars)`);
