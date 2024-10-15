import { ModeToggle } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Images } from '@/configs';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { UserDropDown } from './user-dropdown';

const user = {
  id: '1',
  name: 'haonc',
  image: '',
};
export const Header = () => {
  return (
    <div className="h-[60px] border-b dark:border-stone-500 fixed top-0 left-0 right-0 bg-white dark:bg-black">
      <div className="px-5 flex items-center h-full justify-between">
        <Link href="/">
          <Image
            priority
            src={Images.logo}
            width={40}
            height={40}
            className="rounded-md"
            alt="logo"
          />
        </Link>
        <div className="flex items-center gap-x-4">
          {user?.id && <UserDropDown user={user} />}

          {!user?.id && (
            <>
              <Button variant="outline">Đăng ký</Button>
              <Button>Đăng nhập</Button>
            </>
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
