/**
 * Remove metadata/junk from dist after build:
 * - ._* (macOS AppleDouble)
 * - .DS_Store
 */
import { readdirSync, unlinkSync, rmSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");

function cleanDir(dir) {
  let removed = 0;
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = join(dir, ent.name);
    if (ent.name.startsWith("._") || ent.name === ".DS_Store") {
      try {
        if (ent.isDirectory()) rmSync(full, { recursive: true });
        else unlinkSync(full);
        removed++;
      } catch (_) {}
    } else if (ent.isDirectory()) {
      removed += cleanDir(full);
    }
  }
  return removed;
}

try {
  const n = cleanDir(distDir);
  if (n > 0) console.log(`Cleaned ${n} metadata file(s) from dist.`);
} catch (e) {
  console.warn("clean-dist:", e.message);
}
