import { useState } from 'react';

type FilterNoticesProps = {
  className?: string;
  isMobileDrawerOpen?: boolean;
  onCloseMobile?: () => void;
};

export function FilterNotices({ className = "", isMobileDrawerOpen = false, onCloseMobile }: FilterNoticesProps) {
  const filterContent = (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-center justify-between border-b border-outline-variant pb-3 mb-2">
        <h2 className="font-headline-md text-[18px]">Filter Notices</h2>
        {onCloseMobile && (
          <button className="md:hidden text-on-surface-variant" onClick={onCloseMobile}>
            <span className="material-symbols-outlined">close</span>
          </button>
        )}
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-label-bold text-[13px] text-on-surface-variant uppercase tracking-wider" htmlFor="district">District</label>
        <select id="district" className="w-full border border-outline px-3 py-2 bg-surface-container-lowest text-body-md focus:ring-0 focus:outline-none focus:border-primary">
          <option value="">All Districts</option>
          <option value="darrang">Darrang</option>
          <option value="kamrup">Kamrup Metropolitan</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-label-bold text-[13px] text-on-surface-variant uppercase tracking-wider" htmlFor="village">Village / Revenue Circle</label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-2 top-2 text-on-surface-variant text-[20px]">search</span>
          <input id="village" type="text" placeholder="e.g. Sipajhar" className="w-full border border-outline bg-surface-container-lowest py-2 pl-9 pr-3 text-body-md focus:ring-0 focus:outline-none focus:border-primary"/>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-label-bold text-[13px] text-on-surface-variant uppercase tracking-wider" htmlFor="type">Notice Type</label>
        <select id="type" className="w-full border border-outline px-3 py-2 bg-surface-container-lowest text-body-md focus:ring-0 focus:outline-none focus:border-primary">
          <option value="">All Types</option>
          <option value="mutation">Land Mutation</option>
          <option value="acquisition">Land Acquisition</option>
        </select>
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-label-bold text-[13px] text-on-surface-variant uppercase tracking-wider" htmlFor="status">Status</label>
        <select id="status" className="w-full border border-outline px-3 py-2 bg-surface-container-lowest text-body-md focus:ring-0 focus:outline-none focus:border-primary">
          <option value="active">Active Notices</option>
          <option value="all">All Notices</option>
        </select>
      </div>

      <button 
        className="bg-primary text-on-primary font-label-bold text-label-bold py-3 mt-auto md:mt-4 hover:bg-surface-tint transition-colors w-full text-center"
        onClick={onCloseMobile}
      >
        Apply Filters
      </button>
    </div>
  );

  return (
    <>
      <aside className={`hidden md:flex flex-col w-[300px] lg:w-[340px] flex-shrink-0 pl-margin-mobile md:pl-lg pr-6 pt-6 md:pt-10 overflow-y-auto bg-surface z-10 ${className}`}>
        {filterContent}
      </aside>

      {/* Mobile Drawer */}
      {isMobileDrawerOpen && (
        <div className="md:hidden fixed inset-0 z-[9999] flex flex-col bg-surface">
          <div className="flex-1 w-full bg-surface p-margin-mobile flex flex-col shadow-xl overflow-y-auto">
            {filterContent}
          </div>
        </div>
      )}
    </>
  );
}
