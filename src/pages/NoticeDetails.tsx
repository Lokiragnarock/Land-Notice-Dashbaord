import { Link, useParams, useNavigate } from 'react-router-dom';

export function NoticeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body-md flex-1 flex flex-col">
      <main className="flex-grow w-full max-w-container-max mx-auto bg-surface pb-28 md:pb-32">
        <div className="p-margin-mobile md:p-lg lg:p-xl pt-4 md:pt-8">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-on-surface-variant hover:text-primary mb-6 transition-colors font-label-bold uppercase text-[12px] tracking-wider">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Notices
          </button>
          <div className="mb-lg">
            <div className="flex items-center justify-between mb-sm">
              <span className="bg-surface-container-high text-primary px-md py-sm border border-primary font-label-bold text-label-bold">ACTIVE</span>
              <span className="text-on-surface-variant font-code text-body-sm">Notice ID: {id || 'AS-2023-8842'}</span>
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-xs mt-4">Notice of Land Mutation Application</h1>
            <p className="text-on-surface-variant font-body-lg text-body-lg mt-2">Under Section 53 of the Assam Land and Revenue Regulation, 1886.</p>
          </div>

          <section className="border-t border-primary pt-lg pb-lg">
            <h2 className="font-headline-sm text-headline-sm text-primary mb-md">Record Metadata</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-md gap-x-lg">
              <div>
                <p className="text-on-surface-variant font-label-md text-label-md mb-xs">District</p>
                <p className="text-primary font-body-md text-body-md">Kamrup Metropolitan</p>
              </div>
              <div>
                <p className="text-on-surface-variant font-label-md text-label-md mb-xs">Revenue Circle</p>
                <p className="text-primary font-body-md text-body-md">Guwahati</p>
              </div>
              <div>
                <p className="text-on-surface-variant font-label-md text-label-md mb-xs">Village/Town</p>
                <p className="text-primary font-body-md text-body-md">Dispur</p>
              </div>
              <div>
                <p className="text-on-surface-variant font-label-md text-label-md mb-xs">Patta No.</p>
                <p className="text-primary font-body-md text-body-md">KP-142</p>
              </div>
              <div>
                <p className="text-on-surface-variant font-label-md text-label-md mb-xs">Dag No.</p>
                <p className="text-primary font-body-md text-body-md">855</p>
              </div>
              <div>
                <p className="text-on-surface-variant font-label-md text-label-md mb-xs">Area</p>
                <p className="text-primary font-body-md text-body-md">2 Bigha, 1 Katha</p>
              </div>
            </div>
            <div className="mt-md">
              <p className="text-on-surface-variant font-label-md text-label-md mb-xs">Applicant Name(s)</p>
              <p className="text-primary font-body-md text-body-md">Sri Bhabesh Chandra Das</p>
            </div>
          </section>

          <section className="border-t border-primary pt-lg pb-lg">
            <h2 className="font-headline-sm text-headline-sm text-primary mb-md">Official Notice Text</h2>
            <div className="bg-surface-container-low p-md lg:p-lg border border-primary rounded-none">
              <p className="text-primary font-body-md text-body-md leading-relaxed">
                This is to notify the general public that Sri Bhabesh Chandra Das has applied for the mutation of land measuring 2 Bigha, 1 Katha covered by KP Patta No. 142, Dag No. 855 located in Village Dispur, under Guwahati Revenue Circle, District Kamrup Metropolitan. 
                <br/><br/>
                The applicant claims ownership based on a registered sale deed executed on 12-05-2023. Any person having claims or objections regarding this mutation must file their objection in writing before the Circle Officer, Guwahati Revenue Circle, within 30 days from the date of publication of this notice.
              </p>
            </div>
          </section>

          <section className="border-t border-primary pt-lg pb-lg">
            <h2 className="font-headline-sm text-headline-sm text-primary mb-md">Timeline & Deadlines</h2>
            <div className="relative border-l-2 border-primary ml-sm pl-lg space-y-md lg:space-y-lg">
              <div className="relative">
                <div className="absolute -left-[29px] top-1 h-3 w-3 rounded-none bg-primary border-2 border-surface"></div>
                <p className="text-primary font-label-bold text-label-bold">Notice Issued</p>
                <p className="text-on-surface-variant font-body-sm text-body-sm">October 24, 2023</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[29px] top-1 h-3 w-3 rounded-none bg-surface border-2 border-primary"></div>
                <p className="text-error font-label-bold text-label-bold">Objection Deadline</p>
                <p className="text-on-surface-variant font-body-sm text-body-sm">November 23, 2023 (11:59 PM IST)</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <div className="bg-surface border-t-2 border-primary p-margin-mobile md:p-lg fixed bottom-0 left-0 right-0 z-40 max-w-container-max mx-auto w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-md">
          <div className="hidden sm:block">
            <p className="text-primary font-label-bold text-label-bold">Have a valid claim?</p>
            <p className="text-on-surface-variant font-body-sm text-body-sm mt-1">Submit documentation before the deadline.</p>
          </div>
          <Link to={`/notice/${id || 'AS-2023-8842'}/objection`} className="w-full sm:w-auto bg-primary text-on-primary font-label-bold text-label-bold py-3 px-8 hover:bg-surface-tint transition-colors text-center">
            FILE OBJECTION
          </Link>
        </div>
      </div>
    </div>
  );
}
