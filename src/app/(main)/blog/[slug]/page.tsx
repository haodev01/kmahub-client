import { ButtonShare } from '@/components/common';
import AppText from '@/components/common/app-text';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { dataBlog } from '@/configs';
import { Bookmark } from 'lucide-react';

export default function BlogDetail() {
  return (
    <div className="w-full grid grid-cols-4 gap-x-8 max-w-[1024px] mx-auto">
      <div className="col-span-4 md:col-span-3">
        <AppText variant="h1" size="2xl">
          {dataBlog.title}
        </AppText>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="logo" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <AppText variant="h3" className="font-medium">
                Lý Cao Nguyên
              </AppText>
              <div>
                <AppText variant="span" size="xs">
                  4 tháng trước · 4 phút đọc
                </AppText>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <Bookmark size={20} />
            <ButtonShare />
          </div>
        </div>
        <div
          className="blog-content"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: dataBlog?.content,
          }}
        />
      </div>
      <div className="col-span-1" />
    </div>
  );
}
