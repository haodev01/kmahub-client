import { BlogItem } from '@/components/common/blog';
import { dataBlog } from '@/configs';

export default function Home() {
  return (
    <div className="">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
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
