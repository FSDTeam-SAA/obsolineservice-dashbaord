import {
  CalendarDays,
  House,
  MessageSquareText,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Property Management",
    description: "End-to-end management\nof your vacation",
    icon: House,
  },
  {
    title: "Booking Management",
    description: "Sync bookings across all\nplatforms in realtime.",
    icon: CalendarDays,
  },
  {
    title: "Guest Communication",
    description: "24/7 communication\nAnd support from team",
    icon: MessageSquareText,
  },
  {
    title: "Maintenance",
    description: "We handle all maintenance\nto satisfy our clients",
    icon: Wrench,
  },
];

function CtaButton() {
  return (
    <section
      aria-label="Our key services"
      className="bg-[#f8f9fd] px-4 py-10 sm:px-6 sm:py-12 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {features.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="group flex min-h-[142px] flex-col items-center justify-center rounded-md border border-slate-100/80 bg-white px-5 py-6 text-center shadow-[0_4px_12px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(41,35,108,0.13)]"
          >
            <span className="mb-3 grid size-9 place-items-center rounded-md bg-[#f0f1f8] text-[#29236c] transition-colors duration-300 group-hover:bg-[#29236c] group-hover:text-white">
              <Icon aria-hidden="true" size={17} strokeWidth={2.2} />
            </span>

            <h3 className="text-[13px] font-semibold leading-5 text-[#29236c]">
              {title}
            </h3>
            <p className="mt-1 whitespace-pre-line text-[10px] leading-[13px] text-slate-500">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CtaButton;
