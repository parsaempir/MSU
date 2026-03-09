import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative mt-6 w-full" dir="ltr">
      <div className="relative mx-auto w-full max-w-screen-2xl px-0 lg:px-10">
        <div className="relative hidden aspect-[1280/748] lg:block">
          <Image
            src="/hero-about.svg"
            alt=""
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="relative aspect-square lg:hidden">
          <Image
            src="/hero-about-mobile.svg"
            alt=""
            fill
            priority
            className="object-contain"
          />
        </div>

        <div
          className="
            absolute z-10
            left-[10%] top-[6%] max-w-[72%]
            xs:top-[5%] xs:max-w-[70%]
            sm:left-[15%] sm:top-[10%] sm:max-w-xs
            md:left-[15%] md:top-[10%] md:max-w-xs
            lg:left-[6%] lg:top-[4%] lg:max-w-sm
            xl:max-w-lg
          "
        >
          <h1
            className="
              text-4xl font-black leading-[0.95] tracking-tight text-black
              sm:text-5xl
              md:text-6xl
              lg:text-6xl
            "
          >
            Everything
            <br />
            About us
          </h1>

          <p
            className="
              mt-4 max-w-[22rem] text-xs leading-snug text-neutral-600
              xs:max-w-[25rem]
              sm:mt-5 sm:max-w-[23rem] sm:text-sm
              md:max-w-[22rem] md:text-d
              lg:max-w-[20rem] lg:text-sm
              xl:mt-6 xl:max-w-md xl:text-base
            "
          >
            We dive deep into your business, audience, and competitive landscape
            to uncover real opportunities and risks before anything is built.
          </p>
        </div>
      </div>
    </section>
  );
}
