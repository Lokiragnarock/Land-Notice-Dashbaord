import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FilterNotices } from '../components/FilterNotices';

export function Dashboard() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <>
      {/* Read Out Loud Toolbar (Mobile Only in mockup, but kept for consistency) */}
      <div className="md:hidden w-full bg-surface-container-lowest border-b border-outline-variant">
        <div className="px-margin-mobile py-2 flex justify-between items-center">
          <button 
            onClick={() => setIsMobileFilterOpen(true)}
            aria-label="Filter Notices" 
            className="flex items-center gap-2 font-label-md text-label-md text-primary"
          >
            <span className="material-symbols-outlined text-[20px]">filter_list</span>
            Filters
          </button>
          
          <div className="flex items-center gap-2 font-label-bold text-on-surface-variant text-[14px]">
            <button className="hover:text-primary">EN</button>
            <span className="text-outline-variant">|</span>
            <button className="hover:text-primary">AS</button>
          </div>

          <button aria-label="Read page out loud" className="flex items-center gap-2 font-label-md text-label-md text-secondary hover:text-on-surface">
            <span className="material-symbols-outlined text-[20px]">volume_up</span>
            Read Aloud
          </button>
        </div>
      </div>

      <main className="w-full flex md:flex-row flex-col relative flex-1">
        <FilterNotices 
          className="sticky top-[16px] md:top-0 h-[calc(100vh-4rem)] md:h-[calc(100vh-[5rem])] border-r border-outline-variant" 
          isMobileDrawerOpen={isMobileFilterOpen}
          onCloseMobile={() => setIsMobileFilterOpen(false)}
        />

        <section className="flex-1 min-w-0 flex flex-col gap-6 px-margin-mobile md:px-lg py-6 md:py-10 max-w-5xl">
          <Link to="/map" className="md:hidden flex items-center justify-between h-14 bg-surface-container-low border border-outline-variant px-md cursor-pointer hover:bg-surface-container transition-colors">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-on-surface-variant">map</span>
              <span className="font-label-md text-label-md text-on-surface">View on Map</span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
          </Link>

          <Link to="/map" className="hidden md:flex w-full h-48 bg-surface-container border border-outline-variant relative items-center justify-center cursor-pointer hover:bg-surface-container-highest transition-colors group">
            <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center grayscale mix-blend-multiply"></div>
            <div className="relative z-10 flex items-center gap-2 bg-surface px-6 py-3 border border-outline-variant shadow-sm group-hover:shadow transition-shadow">
              <span className="material-symbols-outlined text-on-surface-variant">map</span>
              <span className="font-label-bold text-sm tracking-wide">Expand Map View (3 Notices in area)</span>
            </div>
          </Link>

          <div className="flex flex-col gap-0 divide-y divide-outline-variant border-t border-b border-outline-variant">
            <article className="py-6 flex flex-col gap-4">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex justify-between items-start w-full md:w-auto">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <span className="inline-block bg-surface-container-high text-on-surface font-label-bold text-[11px] px-2 py-1 uppercase tracking-widest border border-outline-variant">Open for Objection</span>
                            <span className="text-on-surface-variant font-label-bold text-[12px] tracking-wider font-code">LND-2025-04-001</span>
                        </div>
                        <h3 className="font-headline-sm md:font-headline-md text-on-surface leading-tight">Land Mutation: Dag No. 452</h3>
                    </div>
                </div>
                <div className="text-left md:text-right flex flex-col gap-1 w-full md:w-auto">
                    <p className="font-label-md text-[13px] text-on-surface-variant">Issued: 12 Apr 2025</p>
                    <p className="font-label-bold text-[13px] text-error">Objection Window: Until 26 Apr 2025</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 py-2">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px] mt-0.5">location_on</span>
                  <span className="font-body-md text-[15px] text-on-surface-variant">Sipajhar, Darrang</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px] mt-0.5">straighten</span>
                  <span className="font-body-md text-[15px] text-on-surface-variant">Area: 2 Bigha, 1 Katha</span>
                </div>
                <div className="flex items-start gap-3 md:col-span-2">
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px] mt-0.5">person</span>
                  <span className="font-body-md text-[15px] text-on-surface-variant">Applicant: Sri Ramesh Kalita</span>
                </div>
              </div>
              <p className="font-body-md text-[15px] text-on-surface-variant leading-relaxed">
                Public objection window opened for land mutation request in Sipajhar-I mouza. Affected parties must file objections at the Circle Office before the window closes.
              </p>
              <div className="mt-2 flex justify-start">
                <Link to="/notice/LND-2025-04-001" className="inline-flex items-center gap-2 text-primary font-label-bold text-sm hover:text-secondary transition-colors group">
                  View Details & File Objection <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </article>

            <article className="py-6 flex flex-col gap-4">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex justify-between items-start w-full md:w-auto">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <span className="inline-block bg-surface-container text-on-surface-variant font-label-bold text-[11px] px-2 py-1 uppercase tracking-widest border border-outline-variant">Resolved</span>
                            <span className="text-on-surface-variant font-label-bold text-[12px] tracking-wider font-code">LND-2025-03-089</span>
                        </div>
                        <h3 className="font-headline-sm md:font-headline-md text-on-surface leading-tight">Land Allotment: Public Library</h3>
                    </div>
                </div>
                <div className="text-left md:text-right flex flex-col gap-1 w-full md:w-auto">
                    <p className="font-label-md text-[13px] text-on-surface-variant">Issued: 01 Mar 2025</p>
                    <p className="font-label-md text-[13px] text-on-surface-variant">Window Closed: 01 Apr 2025</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 py-2">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px] mt-0.5">location_on</span>
                  <span className="font-body-md text-[15px] text-on-surface-variant">Mangaldai Town, Darrang</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px] mt-0.5">straighten</span>
                  <span className="font-body-md text-[15px] text-on-surface-variant">Area: 1 Katha, 10 Lessa</span>
                </div>
                <div className="flex items-start gap-3 md:col-span-2">
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px] mt-0.5">corporate_fare</span>
                  <span className="font-body-md text-[15px] text-on-surface-variant">Authority: Deputy Commissioner</span>
                </div>
              </div>
              <p className="font-body-md text-[15px] text-on-surface-variant leading-relaxed">
                 Final notification regarding the allotment of government land for the construction of the new Mangaldai Public Library and reading room facilities.
              </p>
              <div className="mt-2 flex justify-start">
                <Link to="/notice/LND-2025-03-089" className="inline-flex items-center gap-2 text-primary font-label-bold text-sm hover:text-secondary transition-colors group">
                  View Final Order <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </article>
          </div>

          <div className="flex justify-center mt-6">
            <button className="bg-transparent text-primary border border-primary font-label-bold px-8 py-3 hover:bg-surface-container transition-colors">
              Load More Notices
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
