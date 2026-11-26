import { docsOrigin, markdownHeaders, markdownUrl, source } from '@/lib/source';

export const dynamic = 'force-static';

const sections = {
  'Start here': [
    'networks',
    'web3js-v1/getting-started',
    'react-sdk/getting-started',
    'react-native-sdk/getting-started',
  ],
  'Build transactions': [
    'web3js-v1/passkey-signing',
    'react-sdk/sending-transactions',
    'react-native-sdk/sending-transactions',
    'concepts/session-keys',
    'concepts/paymaster',
  ],
  'Reference': ['protocol', 'concepts/smart-wallet', 'concepts/rbac', 'errors', 'troubleshooting'],
};

export function GET() {
  const lines = [
    '# LazorKit Protocol',
    '',
    '> Public integration docs for LazorKit Protocol v1 on Solana.',
    '',
    'Choose the TypeScript SDK to create wallets. Use the adapter guides when reconnecting',
    'existing Protocol wallets. Start with Networks and versions for package pins and program IDs.',
  ];

  for (const [name, paths] of Object.entries(sections)) {
    lines.push('', `## ${name}`, '');
    for (const path of paths) {
      const page = source.getPage(path.split('/'));
      if (!page) throw new Error(`Missing AI docs index page: ${path}`);
      lines.push(`- [${page.data.title}](${docsOrigin}${markdownUrl(page)}): ${page.data.description}`);
    }
  }

  lines.push('', '## Optional', '', `- [Full documentation](${docsOrigin}/llms-full.txt): All public pages in one file.`, '');
  return new Response(lines.join('\n'), { headers: markdownHeaders });
}
