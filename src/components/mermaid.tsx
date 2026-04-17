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
              background: '#0d0a1a',
              primaryColor: '#1e1040',
              primaryBorderColor: '#a98bff',
              primaryTextColor: '#ede8ff',
              lineColor: '#a98bff',
              secondaryColor: '#180e36',
              tertiaryColor: '#180e36',
              edgeLabelBackground: '#180e36',
              clusterBkg: '#120c2e',
              clusterBorder: '#3d2a7a',
              titleColor: '#c4b0ff',
              nodeBorder: '#3d2a7a',
              nodeTextColor: '#ede8ff',
              labelTextColor: '#ede8ff',
              signalColor: '#a98bff',
              signalTextColor: '#ede8ff',
              actorBkg: '#1e1040',
              actorBorder: '#3d2a7a',
              actorTextColor: '#ede8ff',
              actorLineColor: '#a98bff',
              activationBorderColor: '#a98bff',
              activationBkgColor: '#3d2a7a',
              noteBkgColor: '#120c2e',
              noteBorderColor: '#3d2a7a',
              noteTextColor: '#ede8ff',
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
