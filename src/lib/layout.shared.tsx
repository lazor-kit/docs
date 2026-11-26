import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import NextImage from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <NextImage
            src="/brand/mark-light.svg"
            alt=""
            width={30}
            height={30}
            className="dark:hidden"
          />
          <NextImage
            src="/brand/mark-dark.svg"
            alt=""
            width={30}
            height={30}
            className="hidden dark:block"
          />
          <span className="font-bold">LazorKit</span>
        </div>
      ),
    },
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/lazor-kit',
        external: true,
      },
    ],
  };
}
