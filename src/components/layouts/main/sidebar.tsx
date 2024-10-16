import { listMenu } from '@/configs';
import React from 'react';
import { SidebarItem } from './sidebar-item';

export const Sidebar = () => {
  return (
    <div className="md:sticky fixed bottom-0 w-full md:top-20 md:left-0 md:w-25 md:px-4 md:bg-transparent dark:bg-black bg-white py-1 md:py-0 ">
      <div className="flex items-center justify-center md:flex-col md:gap-x-0 gap-x-6">
        {listMenu.map((item) => (
          <SidebarItem item={item} key={item.path} />
        ))}
      </div>
    </div>
  );
};
//
