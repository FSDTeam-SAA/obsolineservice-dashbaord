"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/images/hospitality/property-villa.png",
    alt: "Luxury managed vacation villa with a swimming pool",
  },
  {
    src: "/images/hospitality/property-aerial.png",
    alt: "Premium vacation property neighborhood",
  },
  {
    src: "/images/hospitality/property-coastal.png",
    alt: "Boutique vacation villas beside the coast",
  },
];

type MissionSliderProps = {
  startIndex: number;
  interval: number;
  priority?: boolean;
};

function MissionSlider({ startIndex, interval, priority = false }: MissionSliderProps) {
  const [activeSlide, setActiveSlide] = useState(startIndex);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % images.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [interval]);

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % images.length);
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Managed hospitality properties"
      className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200 shadow-[0_16px_38px_rgba(44,70,120,0.15)]"
    >
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={priority && index === startIndex}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 370px"
          className={`object-cover transition-all duration-1000 ease-in-out ${
            activeSlide === index
              ? "z-10 scale-100 opacity-100"
              : "pointer-events-none z-0 scale-105 opacity-0"
          }`}
        />
      ))}

      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />

      <button
        type="button"
        onClick={previousSlide}
        aria-label="Show previous mission image"
        className="absolute left-3 top-1/2 z-30 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#29236c] opacity-100 shadow-md backdrop-blur transition-all hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
      >
        <ChevronLeft aria-hidden="true" size={17} />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Show next mission image"
        className="absolute right-3 top-1/2 z-30 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#29236c] opacity-100 shadow-md backdrop-blur transition-all hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
      >
        <ChevronRight aria-hidden="true" size={17} />
      </button>

      <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-slate-950/20 px-2.5 py-2 backdrop-blur-sm">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Show property image ${index + 1}`}
            aria-current={activeSlide === index ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeSlide === index ? "w-5 bg-white" : "w-1.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function OurMissiion() {
  return (
    <section className="relative w-full overflow-hidden border-y border-[#dbe8fb] bg-[#eaf2ff] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-36 top-1/2 size-72 -translate-y-1/2 rounded-full bg-white/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-[#d5e7ff]/70 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-[42px]">
            Our <span className="italic text-[#29236c]">Mission</span>
          </h2>
          <p className="mx-auto mt-5 max-w-5xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
            We believe managing bookings should be effortless. Our mission is to empower businesses with intuitive technology that simplifies daily operations, reduces manual work, and creates exceptional customer experiences. By combining smart automation with user-friendly design, we help teams save time, increase efficiency, and focus on what matters most—growing their business and serving their customers.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-3 md:gap-6">
          {[0, 1, 2].map((startIndex) => (
            <MissionSlider
              key={startIndex}
              startIndex={startIndex}
              interval={4000 + startIndex * 650}
              priority={startIndex === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurMissiion;
