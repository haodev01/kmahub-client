import { Header, Sidebar } from '@/components/layouts/main';
import React from 'react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="mt-[60px]">
        <div className="flex min-h-screen">
          <div className="shrink-0">
            <Sidebar />
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
