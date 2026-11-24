// Loveline entry: writes the one line to the output directory.
// The judge reads /output/entry.txt (must be 1–240 characters).
import { mkdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line, exactly 149 characters (limit 240). This is the whole entry:
// one specific detail — the last bite, saved every time — and the small pretence
// that keeps watching it happen.
const LOVE_LINE = "She still saves the last bite for me, every single time — and after all these years, I still pretend I did not notice, just to watch her do it again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.txt");
writeFileSync(dest, LOVE_LINE + "\n", "utf8");
const size = statSync(dest).size;
console.log(`entry.txt -> ${dest} (${size} bytes)`);
