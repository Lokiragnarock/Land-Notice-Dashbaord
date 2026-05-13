import { Link, useLocation } from 'react-router-dom';

export function MobileNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface border-t border-outline-variant flex justify-around items-center z-50">
      <Link to="/" className={`flex flex-col items-center justify-center w-full h-full transition-colors ${location.pathname === '/' ? 'border-t-2 border-primary text-primary bg-surface-container-low' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
        <span className="material-symbols-outlined mb-1 text-[20px]" style={location.pathname === '/' ? {fontVariationSettings: "'FILL' 1"} : {}}>list_alt</span>
        <span className="font-label-bold text-[10px] uppercase tracking-wider">Notices</span>
      </Link>
      <Link to="/map" className={`flex flex-col items-center justify-center w-full h-full transition-colors ${location.pathname === '/map' ? 'border-t-2 border-primary text-primary bg-surface-container-low' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
        <span className="material-symbols-outlined mb-1 text-[20px]" style={location.pathname === '/map' ? {fontVariationSettings: "'FILL' 1"} : {}}>map</span>
        <span className="font-label-bold text-[10px] uppercase tracking-wider">Map</span>
      </Link>
      <Link to="/archive" className={`flex flex-col items-center justify-center w-full h-full transition-colors ${location.pathname === '/archive' ? 'border-t-2 border-primary text-primary bg-surface-container-low' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
        <span className="material-symbols-outlined mb-1 text-[20px]">history</span>
        <span className="font-label-bold text-[10px] uppercase tracking-wider">Archive</span>
      </Link>
    </nav>
  );
}
