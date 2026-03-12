'use client';

import React from 'react';
import Image from 'next/image';

const Section1 = () => {
  const listItems = [
    'Business & market analysis',
    'Competitor review',
    'Audience research',
    'Opportunity validation',
  ];

  return (
    <section
      className="w-full overflow-hidden pb-10 lg:mt-[-220px] lg:bg-white lg:pb-20 font-inter"
      dir="ltr"
    >
      <div className="w-full px-4 lg:px-15">
        <div className="relative w-full lg:aspect-[1.3/1] xl:aspect-[1.3/1]">
          {/* Mobile */}
          <div className="block xl:hidden">
            <div className="relative w-full aspect-square overflow-hidden rounded-[30px] bg-white">
              <Image
                src="/services-sec2-mobile.svg"
                alt="Strategy Background"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="px-2 pt-8">
              <h2 className="font-poppins text-[50px] sm:text-[76px] font-extrabold leading-[0.88] tracking-[-0.05em] text-[#111111]">
                Strategy
              </h2>

              <p className="mt-5 max-w-[700px] text-[19px] font-medium leading-[1.24] text-[#666666]">
                We translate insights into a focused roadmap with clear
                priorities, positioning, and measurable goals aligned with your
                growth vision.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-y-4">
                {listItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex items-center">
                      <div className="h-[6px] w-[6px] rounded-full bg-[#121212] shadow-[0_0_8px_rgba(18,18,18,0.25)]" />
                      <div className="h-[1px] w-[34px] bg-[#121212]/25" />
                    </div>
                    <span className="text-[14px] sm:text-[15px] font-semibold leading-[1.2] tracking-tight text-[#121212]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                <button className="rounded-full bg-gradient-to-r from-[#3C5079] to-[#10172F] px-6 sm:px-8 py-4 text-[13px] sm:text-[14px] font-bold text-white shadow-sm transition hover:opacity-95">
                  Clients About Us
                </button>

                <span className="whitespace-nowrap font-poppins text-[18px] text-[#111111]">
                  2–3 Weeks
                </span>
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="relative hidden h-full w-full xl:block">
            <div
              className="absolute inset-0 z-0 bg-white"
              style={{
                maskImage: 'url("/Rectangle 54.svg")',
                WebkitMaskImage: 'url("/Rectangle 54.svg")',
                maskSize: '100% 100%',
                WebkitMaskSize: '100% 100%',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            >
              <Image
                src="/Rectangle 22 (2).png"
                alt="Strategy Background"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 top-0 z-10 p-8 md:p-14 lg:p-20">
              <div className="pointer-events-auto absolute top-[53%] right-8 max-w-xl translate-y-[-50%] md:right-16 lg:right-24 xl:right-[5%]">
                <h2 className="mb-6 lg:mb-10 font-poppins text-[70px] font-extrabold leading-[0.75] tracking-tighter text-[#121212] lg:text-[55px] xl:text-[100px]">
                  Strategy
                </h2>

                <p className="mb-10 lg:mb-18 max-w-[350px] lg:max-w-[400px] xl:max-w-lg text-[14px] font-medium leading-[1.5] text-[#5D5D5D] lg:text-[15px] xl:text-[16px]">
                  We translate insights into a focused roadmap with clear
                  priorities,
                  <br />
                  positioning, and measurable goals aligned with your growth
                  vision.
                </p>

                <div className="flex items-center gap-10">
                  <button className="cursor-pointer rounded-full bg-[#24314c] px-10 xl:px-15 py-3 xl:py-4 font-inter text-[13px] xl:text-[14px] font-bold text-white transition-colors hover:bg-[#121212] lg:bg-gradient-to-r lg:from-[#3C5079] lg:to-[#10172F] lg:text-[14px] xl:text-[16px]">
                    Clients About Us
                  </button>

                  <span className="font-poppins text-[16px] xl:text-[18px] font-[400] text-[#121212] lg:text-[18px] xl:text-[20px]">
                    2-3 Weeks
                  </span>
                </div>
              </div>

              <div className="pointer-events-none absolute top-[49.5%] left-8 z-[5] translate-y-[-50%] md:left-16 lg:left-4">
                <span className="select-none text-[100px] font-extrabold leading-none tracking-tighter text-[#E5E5E5] md:text-[130px] lg:text-[150px]">
                  02
                </span>
              </div>

              <div className="pointer-events-auto absolute bottom-[15%] left-1/2 flex -translate-x-1/2 justify-center lg:left-auto lg:right-24 lg:translate-x-0 xl:-right-1">
                <div className="grid grid-cols-2 items-center gap-x-12 gap-y-2 md:gap-x-20">
                  {listItems.map((item, index) => (
                    <div key={index} className="group flex items-center gap-4">
                      <div className="flex items-center">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#121212] shadow-[0_0_8px_rgba(18,18,18,0.4)]" />
                        <div className="h-[1px] w-[30px] bg-[#121212]/30 md:w-[45px]" />
                      </div>
                      <span className="whitespace-nowrap font-inter text-[13px] font-semibold tracking-tight text-[#121212] lg:text-[14px] xl:text-[15px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;