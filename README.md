# LazorKit Docs

Documentation site for [LazorKit](https://lazorkit.com) — an execution layer for Solana built on passkey wallets, session keys, and programmable gas sponsorship.

Live at **[docs.lazorkit.com](https://docs.lazorkit.com)**

---

## Stack

- [Next.js 16](https://nextjs.org)
- [Fumadocs](https://fumadocs.dev) — docs framework
- [Tailwind CSS v4](https://tailwindcss.com)
- [Mermaid](https://mermaid.js.org) — flow diagrams

---

## Development

```bash
pnpm install
pnpm dev
```

Before opening a PR: `pnpm build`, `pnpm types:check` and `pnpm lint`.

Open [http://localhost:3000](http://localhost:3000).

---

## Structure

Public documentation for LazorKit Protocol v1 lives in `content/docs/`.

- `index.mdx` routes developers to the TypeScript, React, or React Native guide.
- `networks.mdx` lists package pins and program addresses for both clusters.
- `concepts/` describes the accounts, authority roles, session keys, and paymaster.
- `web3js-v1/`, `react-sdk/`, and `react-native-sdk/` contain integration guides.
- `troubleshooting.mdx`, `errors.mdx`, `wallet-standard/`, and `changelog.mdx` contain reference material.

Applications that create Protocol wallets start with the TypeScript quickstart. The adapter guides cover reconnecting existing wallets. Compile examples against the packages named in the guides.

The AI index is at `/llms.txt`. Each guide also has a Markdown URL under `/markdown/`, and `/llms-full.txt` contains the full public corpus. All three use the same MDX source as the site.

---

## Adding Content

All content lives in `content/docs/` as `.mdx` files. Pages support these components without any imports:

| Component | Usage |
|---|---|
| `<Card>`, `<Cards>` | Navigation cards with icon + title |
| `<Callout>` | Info / warning / error callouts |
| `<Steps>`, `<Step>` | Numbered step sequences |
| `<Tabs>`, `<Tab>` | Tabbed content |
| `<Mermaid chart={...} />` | Flow diagrams |

Icons come from `lucide-react` and must be imported in the MDX file:

```mdx
import { Wallet, Key } from 'lucide-react'

<Card icon={<Wallet />} title="Smart Wallet" href="/concepts/smart-wallet" />
```

---

## Links

- [GitHub](https://github.com/lazor-kit)
- [Telegram](https://t.me/lazorkit)
- [Twitter](https://twitter.com/lazorkit)
