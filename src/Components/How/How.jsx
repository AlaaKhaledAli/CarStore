import React from 'react'
import locationIcon from '../../assets/images/locationIcon.png'

export default function How() {
  return (
<>
      <section id="how">
        <div className="md:w-11/12 sm:w-full mx-auto">
          <h3 className='w-fit bg-[#edf1fa] uppercase rounded-md text-2xl px-5 py-2 text-[#4a70f8] border mx-auto my-20  border-[#1572d31a]'>how it work</h3>
          <h2 className='text-center text-6xl text-black font-extrabold capitalize'>Rent with following 3 working steps</h2>
          <div className="cards flex gap-2 flex-wrap">
            <div className="card flex flex-col items-center text-center bg-neutral-primary-soft max-w-sm p-6 rounded-base shadow-xs hover:bg-neutral-secondary-medium">
              <img src={locationIcon} alt="" />
              <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Noteworthy technology acquisitions 2021</h5>
            </div>
            <div className="card flex flex-col items-center text-center bg-neutral-primary-soft max-w-sm p-6 rounded-base shadow-xs hover:bg-neutral-secondary-medium">
              <img src={locationIcon} alt="" />
              <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Noteworthy technology acquisitions 2021</h5>
            </div>
            <div className="card flex flex-col items-center text-center bg-neutral-primary-soft max-w-sm p-6 rounded-base shadow-xs hover:bg-neutral-secondary-medium">
              <img src={locationIcon} alt="" />
              <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Noteworthy technology acquisitions 2021</h5>
            </div>
          </div>
        </div>
      </section>
</>
  )
}
