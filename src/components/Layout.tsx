import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { MobileNav } from './MobileNav';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header />
      <div className="flex-1 mt-16 md:mt-20 flex flex-col pb-16 md:pb-0">
        <Outlet />
      </div>
      <MobileNav />
    </div>
  );
}
