'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
  item: {
    icon: React.ReactElement;
    label: string;
    path: string;
  };
};
export const SidebarItem = (props: Props) => {
  const { item } = props;
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  return (
    <Link
      href={item.path}
      className={clsx(
        'flex hover:text-primary flex-col  items-center hover:bg-primary/10  md:p-4 p-2 rounded-md cursor-pointer md:mb-2',
        {
          'bg-primary/10  text-primary': isActive(item.path),
        },
      )}
    >
      {item.icon}
      <span
        className={clsx('sm:text-[14px] text-xs mt-[2px]  font-medium', {
          'text-primary': isActive(item.path),
        })}
      >
        {item.label}
      </span>
    </Link>
  );
};
