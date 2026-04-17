import { getPageImage, source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: RouteContext<'/og/[...slug]'>,
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  const logoData = readFileSync(join(process.cwd(), 'public/logo.jpg'));
  const logoSrc = `data:image/jpeg;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          backgroundColor: '#0d0a1a',
          backgroundImage:
            'radial-gradient(ellipse at 15% 50%, rgba(120, 87, 255, 0.18) 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, rgba(120, 87, 255, 0.08) 0%, transparent 45%)',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        {/* Top row: logo + name + url */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <img
            src={logoSrc}
            width={44}
            height={44}
            style={{ borderRadius: '10px' }}
          />
          <span
            style={{
              color: '#ede8ff',
              fontSize: '22px',
              fontWeight: '700',
              letterSpacing: '-0.02em',
            }}
          >
            LazorKit
          </span>
          <span
            style={{
              color: '#c4b0ff',
              fontSize: '15px',
              marginLeft: 'auto',
              opacity: 0.6,
              letterSpacing: '0.01em',
            }}
          >
            docs.lazorkit.com
          </span>
        </div>

        {/* Center: title + description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              color: '#ffffff',
              fontSize: page.data.title.length > 30 ? '52px' : '62px',
              fontWeight: '700',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              maxWidth: '960px',
            }}
          >
            {page.data.title}
          </div>
          {page.data.description && (
            <div
              style={{
                color: '#c4b0ff',
                fontSize: '22px',
                fontWeight: '400',
                lineHeight: '1.5',
                maxWidth: '820px',
                opacity: 0.85,
              }}
            >
              {page.data.description}
            </div>
          )}
        </div>

        {/* Bottom: divider + tagline */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            borderTop: '1px solid rgba(169, 139, 255, 0.15)',
            paddingTop: '28px',
          }}
        >
          <span
            style={{
              color: '#c4b0ff',
              fontSize: '16px',
              fontWeight: '500',
              opacity: 0.5,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Execution Layer for Solana
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}
