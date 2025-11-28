import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import NextImage from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <NextImage
            src="/logo.jpg"
            alt="LazorKit Logo"
            width={30}
            height={30}
            className="rounded-md"
          />
          <span className="font-bold">LazorKit</span>
        </div>
      ),
    },
  };
}
