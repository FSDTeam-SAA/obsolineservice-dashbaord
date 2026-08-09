import Image from "next/image";

const steps = [
  {
    title: "Share Your Properties",
    description: "Share your property portfolio and management goals with our team.",
  },
  {
    title: "Custom Strategy",
    description: "Share your property portfolio and management goals with our team.",
  },
  {
    title: "We Manage Everything",
    description: "Our team manages booking guests, and daily property operations.",
  },
  {
    title: "Track & Grow",
    description: "Track performance while we help improve occupancy and revenue.",
  },
];

const collage = [
  {
    src: "/images/hospitality/property-villa.png",
    alt: "Modern luxury vacation villa",
  },
  {
    src: "/images/hospitality/property-coastal.png",
    alt: "Coastal boutique vacation property",
  },
  {
    src: "/images/hospitality/property-aerial.png",
    alt: "Premium vacation home community",
  },
  {
    src: "/images/hospitality/property-villa.png",
    alt: "Luxury managed property and pool",
  },
];

function StepToBetter() {
  return (
    <section className="w-full bg-[#fafbff] py-14 sm:py-16 lg:py-[72px]">
      <div className="mx-auto grid w-full container items-center gap-11 px-4 sm:px-8 lg:grid-cols-[1.55fr_.9fr] lg:gap-12 lg:px-10">
        <div>
          <h2 className="text-balance text-[30px] font-bold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-[34px] lg:text-[36px]">
            Simple Steps to Better
            <br />
            <span className="italic text-[#29236c]">Management</span>
          </h2>

          <div className="relative mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:mt-11 lg:grid-cols-4 lg:gap-3">
            <div className="absolute left-[12.5%] right-[12.5%] top-[13px] hidden border-t border-dashed border-[#77739c]/80 lg:block" />

            {steps.map((step, index) => (
              <article key={step.title} className="relative text-left sm:text-center">
                <div className="relative z-10 flex items-center gap-4 sm:flex-col sm:gap-0">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#29236c] text-[11px] font-semibold text-white shadow-[0_4px_12px_rgba(41,35,108,0.18)]">
                    {index + 1}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-950 sm:mt-4 sm:text-[11px] lg:text-[11px]">
                    {step.title}
                  </h3>
                </div>
                <p className="ml-11 mt-1.5 max-w-[210px] text-[10px] leading-[15px] text-slate-500 sm:mx-auto sm:mt-1.5 sm:max-w-[145px] sm:text-[8px] sm:leading-[12px]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid aspect-[1.62/1] w-full grid-cols-[.5fr_.8fr_.95fr] grid-rows-2 gap-1.5 sm:gap-2">
          {collage.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className={`group relative overflow-hidden rounded-md bg-slate-200 shadow-[0_7px_20px_rgba(30,50,95,0.1)] ${
                index === 0
                  ? "col-span-2"
                  : index === 1
                    ? "col-start-3"
                    : index === 2
                      ? "col-start-2 row-start-2"
                      : "col-start-3 row-start-2"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 300px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StepToBetter;
