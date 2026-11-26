import { getLLMText, markdownHeaders, markdownUrl, source } from '@/lib/source';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return source.getPages().map(page => ({
    slug: markdownUrl(page).slice('/markdown/'.length).split('/'),
  }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const filename = slug.at(-1);
  if (!filename?.endsWith('.md')) return new Response('Page not found', { status: 404 });

  const path = slug.length === 1 && filename === 'index.md'
    ? []
    : [...slug.slice(0, -1), filename.slice(0, -3)];
  const page = source.getPage(path);
  if (!page) return new Response('Page not found', { status: 404 });

  return new Response(await getLLMText(page), { headers: markdownHeaders });
}
