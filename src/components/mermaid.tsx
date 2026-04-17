'use client';

import { useEffect, useRef, useState } from 'react';

let idCounter = 0;

export function Mermaid({ chart }: { chart: string }) {
  const id = useRef(`mermaid-${++idCounter}`);
  const [svg, setSvg] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');

    import('mermaid').then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? 'dark' : 'default',
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
        flowchart: { curve: 'basis', padding: 20 },
        sequence: { diagramMarginX: 20, diagramMarginY: 10, useMaxWidth: true },
        themeVariables: isDark
          ? {
              background: '#080f23',
              primaryColor: '#0f2a50',
              primaryBorderColor: '#7ecfff',
              primaryTextColor: '#daeeff',
              lineColor: '#7ecfff',
              secondaryColor: '#0d1a36',
              tertiaryColor: '#0d1a36',
              edgeLabelBackground: '#0d1a36',
              clusterBkg: '#0a1628',
              clusterBorder: '#1e3a5f',
              titleColor: '#aae5ff',
              nodeBorder: '#1e4a7a',
              nodeTextColor: '#daeeff',
              labelTextColor: '#daeeff',
              signalColor: '#7ecfff',
              signalTextColor: '#daeeff',
              actorBkg: '#0f2a50',
              actorBorder: '#1e4a7a',
              actorTextColor: '#daeeff',
              actorLineColor: '#7ecfff',
              activationBorderColor: '#7ecfff',
              activationBkgColor: '#1e3a5f',
              noteBkgColor: '#0a1628',
              noteBorderColor: '#1e4a7a',
              noteTextColor: '#daeeff',
            }
          : {},
      });

      mermaid
        .render(id.current, chart.trim())
        .then(({ svg }) => setSvg(svg))
        .catch((e) => setError(String(e)));
    });
  }, [chart]);

  if (error) {
    return (
      <pre className="my-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
        {error}
      </pre>
    );
  }

  if (!svg) {
    return <div className="my-6 h-40 animate-pulse rounded-lg bg-fd-muted" />;
  }

  return (
    <div
      className="my-6 flex justify-center overflow-x-auto rounded-lg border border-fd-border bg-fd-card p-6 [&_svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
