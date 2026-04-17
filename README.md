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

Open [http://localhost:3000](http://localhost:3000).

---

## Structure

```
content/docs/
  index.mdx               Landing page
  protocol.mdx            Protocol overview (for investors and builders)

  concepts/               Protocol deep-dives
    smart-wallet.mdx
    session-keys.mdx
    rbac.mdx
    paymaster.mdx

  react-sdk/              React SDK (@lazorkit/react)
  react-native-sdk/       React Native SDK (@lazorkit/react-native)
  web3js-v1/              Contract SDK — web3.js v1 (@lazorkit/sdk-legacy)
  web3js-v2/              Contract SDK — web3.js v2 (coming soon)

  wallet-standard/        Wallet Standard integration
  troubleshooting.mdx
```

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
