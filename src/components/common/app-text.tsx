'use client ';

import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
const TextVariants = cva('', {
  variants: {
    variant: {
      h1: 'font-bold text-slate-800 dark:text-slate-50',
      h2: 'font-bold  text-slate-800 dark:text-slate-50',
      h3: 'font-medium',
      h4: 'font-medium',
      p: 'text-slate-500 dark:text-slate-400',
      span: 'text-slate-500 dark:text-slate-400',
    },
    size: {
      default: 'text-md',
      sm: 'text-sm',
      xs: 'text-xs leading-[18px]',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    },
  },
  defaultVariants: {
    variant: 'h2',
    size: 'default',
  },
});
export interface TextProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extends React.ButtonHTMLAttributes<any>,
    VariantProps<typeof TextVariants> {
  asChild?: boolean;
}
type TextForwardRef = HTMLHeadingElement &
  HTMLParagraphElement &
  HTMLSpanElement;
const AppText = React.forwardRef<TextForwardRef, TextProps>(
  ({ className, variant = 'p', size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : (variant as Variant);
    return (
      <Comp
        className={cn(TextVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

export default AppText;
