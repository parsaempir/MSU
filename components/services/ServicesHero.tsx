'use client';

import React from 'react';
import Image from 'next/image';

const ServicesHero = () => {
  const listItems = [
    'Competitor review',
    'Opportunity validation',
    'Business & market analysis',
    'Audience research',
  ];

  return (
    <section
      className="w-full overflow-hidden pt-0 pb-10 lg:pb-20 font-inter"
      dir="ltr"
    >
      <div className="w-full px-4 lg:px-15">
        <div className="relative w-full lg:aspect-[1.5/1] xl:aspect-[1.5/1]">
          {/* Mobile layout */}
          <div className="block xl:hidden">
            <div className="relative w-full aspect-square overflow-hidden rounded-[30px] bg-white">
              <Image
                src="/services-hero-mobile.svg"
                alt="Discovery Hero Background"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="px-2 pt-8">
              <h1 className="font-poppins text-[50px] sm:text-[76px] font-extrabold leading-[0.88] tracking-[-0.05em] text-[#111111]">
                Discovery
              </h1>

              <p className="mt-5 max-w-[640px] text-[19px] font-medium leading-[1.24] text-[#666666]">
                We dive deep into your business, audience, and competitive
                landscape to uncover real opportunities and risks before
                anything is built.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                <button className="rounded-full bg-gradient-to-r from-[#3c5079] to-[#10172f] px-6 sm:px-8 py-4 text-[13px] sm:text-[14px] font-bold text-white shadow-sm transition hover:opacity-95">
                  Clients About Us
                </button>

                <span className="whitespace-nowrap text-[18px] font-normal text-[#111111]">
                  1–2 Weeks
                </span>
              </div>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="relative hidden w-full h-full xl:block">
            {/* Background Marble clipped by SVG Mask */}
            <div
              className="absolute inset-0 z-0 bg-white"
              style={{
                maskImage: 'url("/Rectangle 53.svg")',
                WebkitMaskImage: 'url("/Rectangle 53.svg")',
                maskSize: '100% 100%',
                WebkitMaskSize: '100% 100%',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            >
              <Image
                src="/Union.png"
                alt="Discovery Hero Background"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Layer */}
            <div className="absolute inset-x-0 top-0 bottom-0 z-10 p-8 md:p-14 lg:p-20">
              {/* Discovery Title */}
              <div className="absolute bottom-[4%] left-8 max-w-xl pointer-events-auto md:bottom-[10%] md:left-16 lg:bottom-[6%] lg:left-8">
                <h1 className="mb-6 lg:mb-8 font-poppins text-[70px] font-extrabold leading-[0.75] tracking-tighter text-[#121212] lg:text-[65px] xl:text-[90px]">
                  Discovery
                </h1>

                <p className="mb-8 lg:mb-12 max-w-[350px] lg:max-w-[400px] xl:max-w-lg xl:whitespace-nowrap text-[14px] font-medium leading-[1.5] text-[#5D5D5D] lg:text-[15px] xl:text-[16px]">
                  We dive deep into your business, audience, and competitive
                  <br />
                  landscape to uncover real opportunities and risks before
                  anything is
                  <br />
                  built.
                </p>

                <div className="flex items-center gap-10">
                  <button className="cursor-pointer rounded-full bg-[#24314c] px-10 xl:px-15 py-3 xl:py-4 font-inter text-[13px] xl:text-[14px] font-bold text-white transition-colors hover:bg-[#121212] lg:bg-gradient-to-r lg:from-[#3C5079] lg:to-[#10172F] lg:text-[14px] xl:text-[16px]">
                    Clients About Us
                  </button>

                  <span className="text-[16px] xl:text-[18px] font-[400] text-[#121212] lg:text-[18px] xl:text-[20px]">
                    1-2 Weeks
                  </span>
                </div>
              </div>

              {/* Number */}
              <div className="pointer-events-none absolute top-[43%] right-10 z-[5] hidden translate-y-[-50%] lg:block lg:right-2 md:right-16">
                <span className="select-none text-[100px] font-extrabold leading-none tracking-tighter text-[#E5E5E5] md:text-[130px] lg:text-[150px]">
                  01
                </span>
              </div>

              {/* Process List */}
              <div className="pointer-events-auto absolute bottom-[15%] right-8 flex flex-col items-start gap-5 md:right-24 lg:right-[35%] lg:gap-6 xl:right-[28%]">
                {listItems.map((item, index) => (
                  <div key={index} className="group flex items-center gap-4">
                    <div className="flex items-center">
                      <div className="h-[7px] w-[7px] rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.4)]" />
                      <div className="h-[1.2px] w-10 bg-white/40 md:w-14 lg:w-16" />
                      <div className="h-[3px] w-[3px] rounded-full bg-white/60" />
                    </div>

                    <span className="whitespace-nowrap text-[14px] font-bold tracking-tight text-white drop-shadow-md lg:text-[15px] xl:text-[15px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;