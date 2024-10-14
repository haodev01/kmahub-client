import { BookOpen, CornerUpLeft, House } from 'lucide-react';

export const listMenu = [
  {
    label: 'Trang chủ',
    path: '/',
    icon: <House size={24} />,
  },
  {
    label: 'Bài viết',
    path: '/blog',
    icon: <BookOpen size={24} />,
  },
  {
    label: 'Khóa học',
    path: '/course',
    icon: <CornerUpLeft size={24} />,
  },
];
