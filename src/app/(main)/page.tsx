import { BlogItem } from '@/components/common/blog';
import { dataBlog } from '@/configs';

export default function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <BlogItem blog={dataBlog} />
        </div>
        <div className="col-span-1">
          <BlogItem blog={dataBlog} />
        </div>
        <div className="col-span-1">
          <BlogItem blog={dataBlog} />
        </div>
        <div className="col-span-1">
          <BlogItem blog={dataBlog} />
        </div>
      </div>
    </div>
  );
}
