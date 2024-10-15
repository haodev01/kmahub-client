'use client';

import { User } from '@/types';
import React from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Props = {
  user: User;
};

export const UserDropDown = (props: Props) => {
  const { user } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt={user?.name} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark:border-stone-500 min-w-[250px]">
        <DropdownMenuItem>Trang cá nhân</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Viết Blog</DropdownMenuItem>
        <DropdownMenuItem>Bài viết của tôi</DropdownMenuItem>
        <DropdownMenuItem>Bài viết đã lưu</DropdownMenuItem>
        <DropdownMenuItem>Viết Blog</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Cài đặt</DropdownMenuItem>
        <DropdownMenuItem>Đăng xuất</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
