import { useParams, useNavigate } from 'react-router-dom';

export function FileObjection() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface flex-1 flex flex-col">
      <main className="flex-grow flex flex-col px-margin-mobile md:px-lg pt-6 md:pt-10 pb-32 max-w-container-max mx-auto w-full md:max-w-2xl">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-on-surface-variant hover:text-primary mb-6 transition-colors font-label-bold uppercase text-[12px] tracking-wider w-fit">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Back to Notice
        </button>
        <div className="mb-8 border-b border-primary pb-3">
          <h2 className="font-headline-sm text-[20px] text-primary mb-1">File Objection</h2>
          <p className="font-code text-body-sm text-on-surface-variant">Notice Ref: {id || 'AS-LND-2023-0892'}</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="font-label-bold text-label-bold text-primary tracking-widest">STEP 1 OF 4</span>
            <span className="font-label-md text-[13px] text-on-surface-variant">Personal Details</span>
          </div>
          <div className="w-full bg-surface-container-high h-[4px] flex">
            <div className="bg-primary h-full w-1/4"></div>
          </div>
        </div>

        <form className="flex-grow flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert("Feature not built yet."); }}>
          <div className="flex flex-col gap-2">
            <label className="font-label-bold text-label-bold text-primary tracking-wider" htmlFor="fullName">Full Legal Name</label>
            <input 
              id="fullName" 
              name="fullName" 
              placeholder="As per official documents" 
              type="text"
              className="bg-surface-container-lowest border border-outline focus:border-primary text-primary font-body-md p-3 focus:outline-none focus:ring-1 focus:ring-primary w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label-bold text-label-bold text-primary tracking-wider" htmlFor="phoneNumber">Primary Phone Number</label>
            <div className="flex border border-outline focus-within:ring-1 focus-within:ring-primary focus-within:border-primary bg-surface-container-lowest">
              <span className="font-body-md text-on-surface-variant p-3 bg-surface-container border-r border-outline">+91</span>
              <input 
                id="phoneNumber" 
                name="phoneNumber" 
                placeholder="10-digit mobile number" 
                type="tel"
                className="bg-transparent border-none text-primary font-body-md p-3 focus:ring-0 w-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label-bold text-label-bold text-primary tracking-wider" htmlFor="idNumber">Aadhaar / Voter ID Number</label>
            <input 
              id="idNumber" 
              name="idNumber" 
              placeholder="Enter ID number" 
              type="text"
              className="bg-surface-container-lowest border border-outline focus:border-primary text-primary font-body-md p-3 focus:outline-none focus:ring-1 focus:ring-primary w-full"
            />
          </div>

          <div className="mt-4 bg-surface-container p-4 border border-outline-variant">
            <div className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-on-surface-variant text-[20px] mt-0.5">info</span>
              <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
                Your personal details must match the official records to ensure the objection is processed correctly.
              </p>
            </div>
          </div>
        </form>

        <div className="fixed bottom-0 left-0 right-0 bg-surface border-t-2 border-primary p-margin-mobile md:px-lg z-40 mx-auto w-full">
          <div className="max-w-container-max mx-auto md:max-w-2xl flex gap-4 justify-between items-center w-full">
            <button 
              type="button"
              onClick={() => navigate(-1)}
              className="bg-surface-container-lowest border border-primary text-primary font-label-bold text-[13px] py-3 px-6 hover:bg-surface-container transition-colors uppercase tracking-widest w-full text-center"
            >
              Cancel
            </button>
            <button 
              type="submit"
              onClick={(e) => { e.preventDefault(); alert("Feature not built yet."); }}
              className="bg-primary border border-primary text-on-primary font-label-bold text-[13px] py-3 px-6 flex items-center justify-center gap-2 hover:bg-surface-tint transition-colors uppercase tracking-widest w-full"
            >
              Next Step
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
