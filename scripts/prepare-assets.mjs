import sharp from 'sharp';
import { mkdir, writeFile, readFile } from 'node:fs/promises';

await mkdir('src/assets/images', { recursive: true });
for (const [name, width] of [['courtyard', 1920], ['door-detail', 1000]]) {
  const input = `src/assets/originals/${name}.png`;
  const meta = await sharp(input).metadata();
  await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 88, alphaQuality: 100 }).toFile(`src/assets/images/${name}.webp`);
  const prompt = await readFile(`research/asset-prompts/${name}.txt`, 'utf8');
  await writeFile(`research/asset-prompts/${name}.json`, JSON.stringify({ tool: 'image_gen.imagegen', prompt: prompt.trim(), original: input, output: `src/assets/images/${name}.webp`, fictional: true, originalSize: [meta.width, meta.height] }, null, 2));
  console.log(`${name}: ${meta.width}×${meta.height}, alpha=${meta.hasAlpha}`);
}
