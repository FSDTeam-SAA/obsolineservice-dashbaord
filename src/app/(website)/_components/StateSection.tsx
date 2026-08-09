const stats = [
  {
    value: "2,400+",
    label: "Properties Managed",
    note: "across 30 countries",
  },
  {
    value: "94%",
    label: "Average Occupancy",
    note: "across all portfolios",
  },
  {
    value: "€50M+",
    label: "Revenue Generated",
    note: "for owners last year",
  },
  {
    value: "4.9",
    suffix: "★",
    label: "Owner Satisfaction",
    note: "based on 500+ reviews",
  },
];

function StateSection() {
  return (
    <section
      aria-label="Booking Is Yours statistics"
      className="w-full border-t border-[#dce9ff] bg-[#fafbff] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="whitespace-nowrap text-[30px] font-bold leading-none tracking-[-0.035em] text-[#25206d] sm:text-4xl lg:text-[42px]">
              {stat.value}
              {stat.suffix && (
                <sup className="ml-0.5 align-super text-[13px] font-bold sm:text-base">
                  {stat.suffix}
                </sup>
              )}
            </p>
            <h3 className="mt-2.5 text-[10px] font-semibold leading-4 text-slate-900 sm:text-xs">
              {stat.label}
            </h3>
            <p className="mt-0.5 text-[8px] leading-3 text-slate-400 sm:text-[9px]">
              {stat.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StateSection;
