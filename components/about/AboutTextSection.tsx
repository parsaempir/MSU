"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutTextSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    "Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie.",
    "Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.",
    "Praesent egestas leo in pede. Praesent blandit odio eu enim.",
    "Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh.",
  ];

  const totalChars = paragraphs.join("").length;
  let charCounter = 0;

  return (
    <section ref={ref} className="relative h-[200vh] bg-[#f3f3f3]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center px-6 overflow-hidden">
        <div className="w-full max-w-2xl flex flex-col items-center justify-center text-center">
          <div className="text-sm font-medium leading-relaxed sm:text-base md:text-lg lg:text-xl text-[#141414]">
            {paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex} className="mb-4 md:mb-6 last:mb-0">
                {paragraph.split("").map((char, cIndex) => {
                  const i = charCounter++;
                  const start = i / totalChars;
                  const end = (i + 1) / totalChars;

                  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
                  const color = useTransform(
                    scrollYProgress,
                    [start, end],
                    ["rgb(200 200 200)", "rgb(20 20 20)"]
                  );

                  return (
                    <motion.span key={cIndex} style={{ opacity, color }}>
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  );
                })}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}