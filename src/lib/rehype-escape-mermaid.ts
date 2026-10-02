import { visit } from 'unist-util-visit';

interface HastElement {
    tagName?: string;
    properties?: { className?: unknown };
}

export function rehypeEscapeMermaid() {
    return (tree: Parameters<typeof visit>[0]) => {
        visit(tree, 'element', (node) => {
            const element = node as unknown as HastElement;
            if (element.tagName === 'code' || element.tagName === 'pre') {
                const className = element.properties?.className || [];
                if (Array.isArray(className) && className.includes('language-mermaid')) {
                    element.properties!.className = className.map((c) =>
                        c === 'language-mermaid' ? 'mermaid-raw' : c
                    );
                }
            }
        });
    };
}
