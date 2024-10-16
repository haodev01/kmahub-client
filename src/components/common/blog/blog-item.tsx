import { Blog } from '@/types';
import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import AppText from '../app-text';

type Props = {
  blog: Blog;
};

export const BlogItem = (props: Props) => {
  const { blog } = props;
  return (
    <Link
      href="/blog/lam-quen-voi-unbutu"
      className="block bg-card border rounded-lg group dark:border-stone-500"
    >
      <div>
        <Image
          src={blog.thumb}
          alt={blog.title}
          width={800}
          height={200}
          className="rounded-t-lg"
        />
        <div className="p-3">
          <div>
            <AppText
              variant="h4"
              size="lg"
              className="group-hover:text-primary font-bold t-ellipsis-2"
            >
              {blog.title}
            </AppText>
            <AppText variant="p" size="sm" className="t-ellipsis-4 mt-1">
              {blog.description}
            </AppText>
          </div>
          <div className="flex items-center justify-between mt-3">
            <AppText variant="span" size="xs">
              4 tháng trước
            </AppText>
            <div className="flex gap-x-2">
              <Badge>React</Badge>
              <Badge variant="destructive">Javascript</Badge>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
