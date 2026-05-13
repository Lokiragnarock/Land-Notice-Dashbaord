import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FilterNotices } from '../components/FilterNotices';

export function Archive() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <>
      {/* Read Out Loud Toolbar (Mobile Only) */}
      <div className="md:hidden w-full bg-surface-container-lowest border-b border-outline-variant shrink-0">
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
          <div className="flex items-center justify-between">
            <h2 className="font-headline-md text-on-surface">Archived Notices</h2>
          </div>

          <div className="flex flex-col gap-0 divide-y divide-outline-variant border-t border-b border-outline-variant">
            <article className="py-6 flex flex-col gap-4 opacity-80">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex justify-between items-start w-full md:w-auto">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <span className="inline-block bg-surface-container text-on-surface-variant font-label-bold text-[11px] px-2 py-1 uppercase tracking-widest border border-outline-variant">Resolved</span>
                            <span className="text-on-surface-variant font-label-bold text-[12px] tracking-wider font-code">LND-2024-11-204</span>
                        </div>
                        <h3 className="font-headline-sm md:font-headline-md text-on-surface leading-tight">Land Settlement: 5 Landless Families</h3>
                    </div>
                </div>
                <div className="text-left md:text-right flex flex-col gap-1 w-full md:w-auto">
                    <p className="font-label-md text-[13px] text-on-surface-variant">Issued: 15 Nov 2024</p>
                    <p className="font-label-md text-[13px] text-on-surface-variant">Window Closed: 15 Dec 2024</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 py-2">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px] mt-0.5">location_on</span>
                  <span className="font-body-md text-[15px] text-on-surface-variant">Dhekiajuli, Sonitpur</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px] mt-0.5">straighten</span>
                  <span className="font-body-md text-[15px] text-on-surface-variant">Area: 5 Bigha</span>
                </div>
                <div className="flex items-start gap-3 md:col-span-2">
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px] mt-0.5">corporate_fare</span>
                  <span className="font-body-md text-[15px] text-on-surface-variant">Authority: District Commissioner</span>
                </div>
              </div>
              <p className="font-body-md text-[15px] text-on-surface-variant leading-relaxed">
                 Information on the final settlement of VGR/PGR land to 5 indigent families. Objections were reviewed and resolved.
              </p>
              <div className="mt-2 flex justify-start">
                <Link to="/notice/LND-2024-11-204" className="inline-flex items-center gap-2 text-primary font-label-bold text-sm hover:text-secondary transition-colors group">
                  View Final Order <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </article>

            <article className="py-6 flex flex-col gap-4 opacity-80">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex justify-between items-start w-full md:w-auto">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <span className="inline-block bg-surface-container text-on-surface-variant font-label-bold text-[11px] px-2 py-1 uppercase tracking-widest border border-outline-variant">Resolved</span>
                            <span className="text-on-surface-variant font-label-bold text-[12px] tracking-wider font-code">LND-2024-08-012</span>
                        </div>
                        <h3 className="font-headline-sm md:font-headline-md text-on-surface leading-tight">Canal Right of Way Acquisition</h3>
                    </div>
                </div>
                <div className="text-left md:text-right flex flex-col gap-1 w-full md:w-auto">
                    <p className="font-label-md text-[13px] text-on-surface-variant">Issued: 02 Aug 2024</p>
                    <p className="font-label-md text-[13px] text-on-surface-variant">Window Closed: 02 Sep 2024</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 py-2">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px] mt-0.5">location_on</span>
                  <span className="font-body-md text-[15px] text-on-surface-variant">Majuli</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px] mt-0.5">straighten</span>
                  <span className="font-body-md text-[15px] text-on-surface-variant">Area: 2 Bigha, 10 Lessa</span>
                </div>
                <div className="flex items-start gap-3 md:col-span-2">
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px] mt-0.5">corporate_fare</span>
                  <span className="font-body-md text-[15px] text-on-surface-variant">Authority: Water Resources Department</span>
                </div>
              </div>
              <p className="font-body-md text-[15px] text-on-surface-variant leading-relaxed">
                 Public notice regarding acquisition of land for the right of way for irrigation canal expansion. All claims have been settled.
              </p>
              <div className="mt-2 flex justify-start">
                <Link to="/notice/LND-2024-08-012" className="inline-flex items-center gap-2 text-primary font-label-bold text-sm hover:text-secondary transition-colors group">
                  View Final Order <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </article>
          </div>

          <div className="flex justify-center mt-6">
            <button className="bg-transparent text-primary border border-primary font-label-bold px-8 py-3 hover:bg-surface-container transition-colors">
              Load More Archives
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
