import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-outline-variant h-16 md:h-20 lg:h-20">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-lg h-full">
        <Link to="/" className="flex items-center gap-4">
          <img alt="Government of Assam Seal" className="h-10 md:h-12 w-auto object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs5vfH8l-vcbp2HsHyEDSfDdzoFjScYpQKrws-EwJotUe7KBZwAVutJUZf6ni3fQb5pBNKXt8rkoyEPeFtlgUM6vZGcru3_MU7beeR8vv0y2UOlcL6I-YDDOYP21kzlvqX2dxA_fmqz8DAnwo--8Lz6MVmjHEeaA1BdILn7UNJ4Otu_Yo9-2pWVSCBclF__5hdcoIZluvotUVsWUtHlC6mf4PTSXAR1XfatIC7J8x61OeoRSRn9Qn8VGxEhIQ_QExWoY-l8_tZFps"/>
          <span className="font-headline-md text-[15px] sm:text-[18px] md:text-[22px] font-bold text-on-surface tracking-tight leading-tight">Assam Public<br className="block sm:hidden"/> Land Notices</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 md:gap-8 h-full">
          <Link to="/" className={`h-full flex items-center px-2 font-label-bold border-b-4 transition-colors ${location.pathname === '/' ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:bg-surface-container'}`}>Notices</Link>
          <Link to="/map" className={`h-full flex items-center px-2 font-label-bold border-b-4 transition-colors ${location.pathname === '/map' ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:bg-surface-container'}`}>Map View</Link>
          <Link to="/archive" className={`h-full flex items-center px-2 font-label-bold border-b-4 transition-colors ${location.pathname === '/archive' ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:bg-surface-container'}`}>Archives</Link>
        </nav>
        <div className="hidden md:flex items-center gap-6">
          <button className="flex items-center gap-2 text-on-surface-variant font-label-bold hover:bg-surface-container p-2">
            <span className="material-symbols-outlined">volume_up</span>
            <span>Read Aloud</span>
          </button>
          <div className="flex items-center gap-1 font-label-bold text-on-surface-variant text-[14px] md:text-[16px]">
            <button className="hover:text-primary">EN</button>
            <span>/</span>
            <button className="hover:text-primary">AS</button>
          </div>
        </div>
      </div>
    </header>
  );
}
