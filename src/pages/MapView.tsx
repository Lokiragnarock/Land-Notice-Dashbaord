import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FilterNotices } from '../components/FilterNotices';

const NOTICES = [
  {
    id: 'LND-2025-04-001',
    type: 'Land Settlement',
    status: 'Open',
    location: 'Guwahati Circle',
    description: 'Relating to land parcel 4A, sector...',
    details: 'Area: 2 Bigha, 1 Katha',
    coordinates: { top: '25%', left: '33.33%' }
  },
  {
    id: 'LND-2025-04-042',
    type: 'Land Acquisition',
    status: 'Selected', // We'll manage this manually
    location: 'Dispur',
    description: 'Proposed acquisition for new civil infra...',
    details: 'Area: 1.5 Hectares',
    coordinates: { top: '50%', left: '50%' }
  },
  {
    id: 'LND-2025-03-089',
    type: 'Encroachment Eviction',
    status: 'Resolved',
    location: 'North Guwahati',
    description: 'Clearance of encroached public lands...',
    details: 'Area: 10 Bigha',
    coordinates: { top: '66.66%', left: '66.66%' }
  }
];

export function MapView() {
  const [activeNoticeId, setActiveNoticeId] = useState<string | null>('LND-2025-04-042');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex flex-col overflow-hidden bg-surface">
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

      <main className="flex-1 flex overflow-hidden relative">
        {/* Filter Overlay (Left) */}
        <FilterNotices 
          className="h-full border-r border-outline-variant" 
          isMobileDrawerOpen={isMobileFilterOpen}
          onCloseMobile={() => setIsMobileFilterOpen(false)}
        />

        {/* Map Area */}
        <div className="flex-1 relative" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjSDTB9qGHn0ckSj8cj7WkWNH0X5JNZcnUSsht3DA5FxoIdLZqLUyW7ZAmvxXv1yBtmdSeoA9_cJ9eNROBgrzvd_g-z51xttk0m7vnJ_purpIpWh8JA4au7Kb6EIyPLOvWfEvOWoR7a83Nn-690FlPKcja19pvPKAEwUbKdvQBh30HqWSYEeQPdIMxEos1Qqzx8qexDYy8qXPYBLnutCCLX_BxGCKFWCDDHx525WaTiUCQgOsuKeNyTUlXfl5EfdNlDkOdIdSP_9E')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%) contrast(120%) opacity(0.8)'}}>
          
          {NOTICES.map(notice => {
            const isActive = activeNoticeId === notice.id;
            const isTopHalf = parseFloat(notice.coordinates.top) < 50;

            return (
              <div 
                key={notice.id}
                className="absolute flex flex-col items-center group cursor-pointer z-20"
                style={{ top: notice.coordinates.top, left: notice.coordinates.left, transform: 'translate(-50%, -50%)' }}
                onClick={() => setActiveNoticeId(notice.id)}
              >
                <div className={`rounded-none shadow-md outline outline-white transition-all ${isActive ? 'w-6 h-6 bg-primary outline-4' : 'w-4 h-4 bg-primary outline-2'}`}></div>
                
                {!isActive && (
                  <div className="mt-2 bg-surface border border-primary px-2 py-1 font-label-bold text-[11px] uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {notice.id}
                  </div>
                )}
                
                {isActive && (
                  <div className={`hidden md:flex absolute w-72 bg-surface border-2 border-primary p-4 flex-col gap-3 shadow-lg cursor-default ${isTopHalf ? 'top-full mt-3' : 'bottom-full mb-3'}`} onClick={e => e.stopPropagation()}>
                    <div className="flex justify-between items-start border-b border-primary pb-2">
                      <span className="font-code text-[12px] tracking-wider text-on-surface-variant">{notice.id}</span>
                      <button className="text-on-surface-variant hover:text-primary" onClick={(e) => { e.stopPropagation(); setActiveNoticeId(null); }}>
                        <span className="material-symbols-outlined text-[18px]">close</span>
                      </button>
                    </div>
                    <h3 className="font-headline-sm text-primary leading-tight">{notice.type}</h3>
                    <div className="flex flex-col gap-2 font-body-sm text-[14px] text-on-surface-variant">
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] mt-0.5">location_on</span>
                        <span>{notice.location}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] mt-0.5">straighten</span>
                        <span>{notice.details}</span>
                      </div>
                    </div>
                    <Link to={`/notice/${notice.id}`} className="mt-2 inline-flex items-center gap-1 text-primary font-label-bold text-[13px] hover:text-secondary group/link">
                      View Details <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                )}
              </div>
            );
          })}

          {/* Mobile Bottom Panel for Active Notice */}
          {activeNoticeId && (
            <div className="md:hidden absolute bottom-0 left-0 right-0 bg-surface border-t-2 border-primary shadow-[0_-4px_10px_rgba(0,0,0,0.15)] z-30 animate-in slide-in-from-bottom-2 pb-16">
              {NOTICES.filter(n => n.id === activeNoticeId).map(notice => (
                <div key={notice.id} className="p-4 flex flex-col gap-3">
                  <div className="flex justify-between items-start border-b border-outline-variant pb-2">
                    <span className="font-code text-[12px] tracking-wider text-on-surface-variant">{notice.id}</span>
                    <button className="text-on-surface-variant hover:text-primary" onClick={() => setActiveNoticeId(null)}>
                      <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                  </div>
                  <h3 className="font-headline-sm text-primary leading-tight">{notice.type}</h3>
                  <div className="flex flex-col gap-2 font-body-sm text-[14px] text-on-surface-variant">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[16px] mt-0.5">location_on</span>
                      <span>{notice.location}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[16px] mt-0.5">straighten</span>
                      <span>{notice.details}</span>
                    </div>
                  </div>
                  <Link to={`/notice/${notice.id}`} className="mt-2 bg-line text-primary border border-primary px-4 py-2 font-label-bold text-[13px] uppercase tracking-widest text-center hover:bg-surface-container transition-colors">
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Active Notices Panel */}
        <aside className="hidden md:flex w-96 border-l border-outline-variant bg-surface flex-col z-10 flex-shrink-0 pb-16 md:pb-0">
          <div className="p-md border-b border-outline-variant bg-surface flex justify-between items-center">
            <h2 className="font-headline-md text-[18px]">Active Notices in View</h2>
            <span className="text-on-surface-variant font-label-bold text-label-bold text-sm">{NOTICES.length} Results</span>
          </div>
          <div className="flex-1 overflow-y-auto flex flex-col gap-0 divide-y divide-outline-variant">
            {NOTICES.map(notice => {
              const isActive = activeNoticeId === notice.id;

              return (
                <article 
                  key={notice.id}
                  onClick={() => setActiveNoticeId(notice.id)}
                  className={`p-md flex flex-col gap-3 cursor-pointer transition-colors ${isActive ? 'bg-surface-container border-l-4 border-primary' : 'hover:bg-surface-container-low border-l-4 border-transparent'}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className={`inline-block font-label-bold text-[10px] px-2 py-1 uppercase tracking-widest border border-outline-variant ${isActive ? 'bg-primary text-on-primary' : notice.status === 'Resolved' ? 'bg-surface text-on-surface-variant' : 'bg-surface-container-high text-primary'}`}>
                        {isActive ? 'Selected' : notice.status}
                      </span>
                      <span className="text-on-surface-variant font-code text-[11px] tracking-wider">{notice.id}</span>
                    </div>
                    {isActive && <span className="material-symbols-outlined text-primary text-[16px]">map</span>}
                  </div>
                  <h3 className={`font-headline-sm leading-tight ${isActive ? 'text-primary' : 'text-[16px]'}`}>{notice.type}</h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-on-surface-variant text-[16px]">location_on</span>
                      <span className="font-body-sm text-on-surface-variant">{notice.location}</span>
                    </div>
                    <p className="font-body-sm text-on-surface-variant truncate">{notice.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </aside>
      </main>
    </div>
  );
}
