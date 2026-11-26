import { docs } from 'fumadocs-mdx:collections/server';
import { type InferPageType, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/',
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export const docsOrigin = 'https://docs.lazorkit.com';
export const markdownHeaders = { 'content-type': 'text/markdown; charset=utf-8' };

export function markdownUrl(page: InferPageType<typeof source>) {
  return `/markdown/${page.slugs.join('/') || 'index'}.md`;
}

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'image.jpg'];

  return {
    segments,
    url: `/og/${segments.join('/')}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title}

Source: ${docsOrigin}${page.url}

${processed}`;
}
