import {
  Ellipsis,
  Facebook,
  Twitter,
  Mail,
  Link as LinkIcon,
} from 'lucide-react';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const ButtonShare = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Ellipsis size={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dark:border-stone-500 min-w-[250px]">
          <DropdownMenuItem className="flex items-center gap-x-2 mb-2 cursor-pointer">
            <Facebook size={16} />
            <span>Chia sẻ lên Facebook</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2 mb-2 cursor-pointer">
            <Twitter size={16} />
            <span>Chia sẻ lên Twitter</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2 mb-2 cursor-pointer">
            <Mail size={16} />
            <span>Chia sẻ tới Email</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-x-2 mb-2 cursor-pointer">
            <LinkIcon size={16} />
            <span>Sao chép bài viết</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
