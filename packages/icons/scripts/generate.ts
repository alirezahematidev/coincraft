import fs from "fs/promises";
import path from "path";

async function generateReactComponents() {
  const sourceDir = path.resolve(process.cwd(), "images/svg");

  const files = await fs.readdir(sourceDir);

  const names = files.map((file) => path.parse(file).name);

  const raw = names.reduce((p, q) => `${p} | "${q}"`, "");

  const content = `export type CurrencyName = ${raw};`;

  const target = path.resolve(process.cwd(), "src/types/currency.ts");

  await fs.writeFile(target, content);
}

generateReactComponents().catch(console.error);
