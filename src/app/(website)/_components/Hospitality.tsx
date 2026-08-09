"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/hospitality/property-aerial.png",
    alt: "Aerial view of a premium vacation home neighborhood",
  },
  {
    src: "/images/hospitality/property-villa.png",
    alt: "Modern luxury vacation villa with a swimming pool",
  },
  {
    src: "/images/hospitality/property-coastal.png",
    alt: "Boutique coastal villas overlooking the sea",
  },
];

const highlights = [
  "Enterprise-grade CRM built specifically for vacation rentals",
  "Dedicated revenue strategist per portfolio",
  "30+ OTA integrations with real-time sync",
];

function Hospitality() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <section id="about" className="relative w-full overflow-hidden bg-[#eaf2ff] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-32 top-1/2 size-72 -translate-y-1/2 rounded-full bg-white/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 -top-28 size-72 rounded-full bg-[#d7e7ff] blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-12 px-4 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-20 lg:px-12 xl:px-16">
        <div
          className="group relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-[0_22px_55px_rgba(46,76,130,0.18)]"
          aria-roledescription="carousel"
          aria-label="Hospitality properties"
        >
          {slides.map((slide, index) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 520px"
              className={`object-cover transition-all duration-1000 ease-in-out ${
                index === activeSlide ? "z-10 scale-100 opacity-100" : "pointer-events-none z-0 scale-105 opacity-0"
              }`}
            />
          ))}

          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Show previous property"
            className="absolute left-4 top-1/2 z-30 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/50 bg-white/85 text-[#29236c] opacity-100 shadow-lg backdrop-blur transition-all hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100"
          >
            <ChevronLeft aria-hidden="true" size={19} />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Show next property"
            className="absolute right-4 top-1/2 z-30 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/50 bg-white/85 text-[#29236c] opacity-100 shadow-lg backdrop-blur transition-all hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100"
          >
            <ChevronRight aria-hidden="true" size={19} />
          </button>

          <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full bg-slate-950/25 px-3 py-2 backdrop-blur-sm">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show property ${index + 1}`}
                aria-current={index === activeSlide ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeSlide ? "w-6 bg-white" : "w-1.5 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="max-w-xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#4c65a5]">Our story</p>
          <h2 className="text-balance text-3xl font-bold leading-[1.12] tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-[43px]">
            Born from a passion for exceptional hospitality.
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-6 text-slate-600">
            <p>
              Booking Is Yours was founded by former luxury hotel executives who saw a clear gap: vacation rental owners deserved the same professionalism and technology as the world&apos;s finest hotels.
            </p>
            <p>
              Today, we manage over 2,400 properties across Europe, combining proprietary technology with genuine hospitality expertise. Our owners earn more, stress less, and watch their properties perform at full potential.
            </p>
          </div>

          <ul className="mt-6 space-y-3">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-[#6d7db0]/40 bg-white/65 text-[#29236c]">
                  <Check aria-hidden="true" size={11} strokeWidth={2.5} />
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hospitality;
