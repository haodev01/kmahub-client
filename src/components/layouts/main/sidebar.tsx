import { listMenu } from '@/configs';
import Link from 'next/link';
import React from 'react';

export const Sidebar = () => {
  return (
    <div className=" sticky top-20 left-0 w-25 px-4">
      <div>
        {listMenu.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="flex hover:text-primary flex-col items-center bg-stone-200 p-4 rounded-md cursor-pointer mb-2"
          >
            {item.icon}
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
