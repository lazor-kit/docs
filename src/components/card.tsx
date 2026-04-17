import Link from 'next/link';
import { cn } from 'fumadocs-ui/utils/cn';
import type { ReactNode, HTMLAttributes } from 'react';

export type CardProps = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  href?: string;
  external?: boolean;
};

export function Card({ icon, title, description, href, external, className, children, ...props }: CardProps) {
  const Comp = href ? Link : ('div' as any);

  return (
    <Comp
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      data-card
      className={cn(
        'block rounded-xl border bg-fd-card p-4 text-fd-card-foreground transition-colors @max-lg:col-span-full',
        href && 'hover:bg-fd-accent/80',
        className,
      )}
      {...props}
    >
      <div className="not-prose mb-2 flex items-center gap-2.5">
        {icon && (
          <div className="shrink-0 rounded-lg border bg-fd-muted p-1.5 text-fd-muted-foreground [&_svg]:size-4">
            {icon}
          </div>
        )}
        <p className="m-0 text-sm font-medium leading-none text-fd-card-foreground">{title}</p>
      </div>
      {description && (
        <p className="my-0 text-sm text-fd-muted-foreground">{description}</p>
      )}
      {children && (
        <div className="text-sm text-fd-muted-foreground empty:hidden">{children}</div>
      )}
    </Comp>
  );
}

export function Cards(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn('grid grid-cols-2 gap-3 @container', props.className)}
    />
  );
}
