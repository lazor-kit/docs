import { visit } from 'unist-util-visit';

export function rehypeEscapeMermaid() {
    return (tree: any) => {
        visit(tree, 'element', (node: any) => {
            if (node.tagName === 'code' || node.tagName === 'pre') {
                const className = node.properties?.className || [];
                if (Array.isArray(className) && className.includes('language-mermaid')) {
                    node.properties.className = className.map((c) =>
                        c === 'language-mermaid' ? 'mermaid-raw' : c
                    );
                }
            }
        });
    };
}
