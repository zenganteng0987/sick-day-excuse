import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Sorry, can't come in — I locked myself in my own bathroom and the door only opens from the outside. My phone's at 2%.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
try {
  mkdirSync(outDir, { recursive: true });
} catch {
  // Directory already exists or cannot be created; writing below will surface any real error.
}
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
process.exit(0);
