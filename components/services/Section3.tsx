
'use client';

import React from 'react';
import Image from 'next/image';

const Section3 = () => {
  const listItems = [
    'Business & market analysis',
    'Competitor review',
    'Audience research',
    'Opportunity validation',
  ];

  return (
    <section
      className="w-full overflow-hidden pb-10 lg:mt-[-150px] lg:bg-white lg:pb-20 font-inter"
      dir="ltr"
    >
      <div className="w-full px-4 lg:px-15">
        <div className="relative w-full lg:aspect-[1.3/1] xl:aspect-[1.3/1]">
          {/* Mobile */}
          <div className="block xl:hidden">
            <div className="relative w-full aspect-square overflow-hidden rounded-[30px] bg-white">
              <Image
                src="/services-sec4-mobile.svg"
                alt="Optimize Background"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="px-2 pt-8">
              <h2 className="font-poppins text-[50px] sm:text-[74px] font-extrabold leading-[0.88] tracking-[-0.05em] text-[#111111]">
                Optimize
              </h2>

              <p className="mt-5 max-w-[700px] text-[19px] font-medium leading-[1.24] text-[#666666]">
                We translate insights into a focused roadmap with clear
                priorities, positioning, and measurable goals aligned with your
                growth vision.
              </p>

              <div className="mt-8 rounded-[24px] bg-white px-6 py-6 shadow-sm">
                <div className="grid grid-cols-1 gap-y-4">
                  {listItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex items-center">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#121212]" />
                        <div className="h-[1.2px] w-[38px] bg-[#121212]" />
                      </div>
                      <span className="text-[17px] font-semibold leading-[1.2] tracking-tight text-[#121212]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                <button className="rounded-full bg-gradient-to-r from-[#3C5079] to-[#10172F] px-6 sm:px-8 py-4 text-[13px] sm:text-[14px] font-bold text-white shadow-sm transition hover:opacity-95">
                  Clients About Us
                </button>

                <span className="whitespace-nowrap text-[18px] font-semibold text-[#111111]">
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
                maskImage: 'url("/Subtract.svg")',
                WebkitMaskImage: 'url("/Subtract.svg")',
                maskSize: '100% 100%',
                WebkitMaskSize: '100% 100%',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            >
              <Image
                src="/Rectangle 1000.png"
                alt="Optimize Background"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute inset-0 z-10">
              <div className="absolute top-[58.3%] left-[56%] z-20 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-[43px] bg-white p-10 text-center shadow-xl md:p-14 lg:px-16 lg:py-18">
                <h2 className="mb-4 lg:mb-6 font-poppins text-[60px] font-extrabold leading-[0.85] tracking-tighter text-[#121212] lg:text-[60px] xl:text-[100px]">
                  Optimize
                </h2>

                <p className="mx-auto mb-8 lg:mb-10 max-w-[320px] lg:max-w-[400px] xl:max-w-xl xl:whitespace-nowrap text-[14px] font-medium leading-[1.6] text-[#5D5D5D] lg:text-[15px] xl:text-[16px]">
                  We translate insights into a focused roadmap with clear
                  priorities,
                  <br className="hidden md:block" />
                  positioning, and measurable goals aligned with your growth
                  vision.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                  <button className="text-nowrap cursor-pointer rounded-full bg-[#24314c] px-10 xl:px-12 py-3 xl:py-3.5 font-inter text-[13px] xl:text-[14px] font-bold text-white transition-colors hover:bg-[#121212] lg:bg-gradient-to-r lg:from-[#3C5079] lg:to-[#10172F] lg:text-[14px] xl:text-[15px]">
                    Clients About Us
                  </button>

                  <span className="whitespace-nowrap font-inter text-[15px] xl:text-[17px] font-semibold text-[#121212] lg:text-[17px] xl:text-[20px]">
                    2-3 Weeks
                  </span>
                </div>
              </div>

              <div className="absolute bottom-[11%] left-[56%] z-20 w-full max-w-2xl -translate-x-1/2">
                <div className="rounded-[28px] bg-white px-10 py-6 shadow-lg md:rounded-[40px] md:px-12">
                  <div className="grid grid-cols-1 gap-x-15 gap-y-2 md:grid-cols-2">
                    {listItems.map((item, index) => (
                      <div key={index} className="group flex items-center gap-4">
                        <div className="flex items-center">
                          <div className="h-[6.5px] w-[6.5px] rounded-full bg-[#121212]" />
                          <div className="h-[1.3px] w-[45px] bg-[#121212] md:w-[65px]" />
                        </div>
                        <span className="whitespace-nowrap font-inter text-[15px] font-semibold tracking-tight text-[#121212] lg:text-[15px] xl:text-[17.5px]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute top-[74%] left-[5%] z-0 translate-y-[-50%] md:left-[8%] lg:left-[1%]">
                <span className="select-none font-poppins text-[120px] font-extrabold leading-none tracking-tighter text-[#E5E5E5]/80 md:text-[130px] lg:text-[150px]">
                  04
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;