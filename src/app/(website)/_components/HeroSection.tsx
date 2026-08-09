"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Bell,
  CalendarDays,
  ChevronRight,
  CircleDollarSign,
  LayoutDashboard,
  Search,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const statCards = [
  { title: "Total Bookings", value: "236", change: "+18%", icon: CalendarDays },
  {
    title: "Total Customers",
    value: "1,458",
    change: "+12%",
    icon: UsersRound,
  },
  {
    title: "Total Revenue",
    value: "$24,750",
    change: "+24%",
    icon: CircleDollarSign,
  },
  { title: "Conversion Rate", value: "68.7%", change: "+8%", icon: TrendingUp },
];

const features = [
  "Guest Experience",
  "Channel Management",
  "Dynamic Pricing",
  "Reporting & Analytics",
  "24/7 Operation",
  "Optimization",
];

function LineChart() {
  return (
    <svg
      viewBox="0 0 300 112"
      className="mt-2 h-[100px] w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroChartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6157ff" stopOpacity=".3" />
          <stop offset="1" stopColor="#6157ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[18, 44, 70, 96].map((y) => (
        <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#e8ecf6" />
      ))}
      <path
        d="M0 91 C28 89 30 45 55 45 S91 86 117 64 143 24 170 35 206 85 232 66 264 35 300 40 V112 H0Z"
        fill="url(#heroChartGradient)"
      />
      <path
        d="M0 91 C28 89 30 45 55 45 S91 86 117 64 143 24 170 35 206 85 232 66 264 35 300 40"
        fill="none"
        stroke="#6157ff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="170" cy="35" r="4" fill="#29236c" />
    </svg>
  );
}

function DashboardMockup() {
  const sideLinks = [
    "Overview",
    "Calendar",
    "Bookings",
    "Customers",
    "Services",
    "Payments",
    "Reports",
    "Settings",
  ];
  const recentBookings = [
    ["SB", "Sophia Bennett", "Yoga Class", "09:30 AM"],
    ["LC", "Liam Carter", "Personal Training", "10:45 AM"],
    ["MA", "Mia Anderson", "Pilates Class", "01:30 PM"],
    ["NP", "Noah Peterson", "Kickboxing", "03:00 PM"],
  ];

  return (
    <div className="flex h-full w-full overflow-hidden rounded-xl bg-[#f6f8ff] text-slate-700">
      <aside className="flex w-[17%] min-w-[112px] flex-col bg-[#272175] p-3 text-white sm:p-4">
        <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white/10">
            <CalendarDays size={15} />
          </span>
          <span className="text-[8px] font-bold uppercase leading-[1.25] sm:text-[10px]">
            Booking Is
            <br />
            Yours
          </span>
        </div>
        <div className="space-y-0.5">
          {sideLinks.map((link, index) => (
            <div
              key={link}
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[7px] sm:py-2 sm:text-[8px] ${index === 0 ? "bg-[#5e54df] text-white" : "text-indigo-100/75"}`}
            >
              {index === 0 ? (
                <LayoutDashboard size={10} />
              ) : (
                <ChevronRight size={9} />
              )}
              {link}
            </div>
          ))}
        </div>
        <div className="mt-auto hidden rounded-lg bg-gradient-to-br from-[#6359e5] to-[#4039a6] p-3 sm:block">
          <div className="mb-2 text-lg">🎁</div>
          <p className="text-[8px] font-semibold">
            Stay organized, save more time
          </p>
          <p className="mt-1 text-[6px] text-indigo-100/70">
            Manage your bookings with ease.
          </p>
        </div>
      </aside>

      <main className="min-w-0 flex-1 p-3 sm:p-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-[9px] font-bold text-slate-900 sm:text-[12px]">
              Welcome back, James! 👋
            </h3>
            <p className="mt-0.5 hidden text-[6px] text-slate-400 sm:block">
              Here&apos;s what&apos;s happening with your business today.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-[6px] text-slate-400 md:flex">
              <Search size={9} /> Search bookings, customers...
            </div>
            <span className="hidden size-7 place-items-center rounded-md bg-white sm:grid">
              <Bell size={10} />
            </span>
            <span className="rounded-md bg-[#29236c] px-2.5 py-2 text-[6px] font-semibold text-white sm:text-[7px]">
              + New Booking
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {statCards.map(({ title, value, change, icon: Icon }) => (
            <div
              key={title}
              className="rounded-lg bg-white p-2.5 shadow-[0_4px_18px_rgba(49,63,115,.04)]"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-6 place-items-center rounded-md bg-indigo-50 text-[#5f55e5]">
                  <Icon size={11} />
                </span>
                <span className="text-[6px] font-semibold text-emerald-500">
                  {change}
                </span>
              </div>
              <p className="mt-2 text-[6px] text-slate-400 sm:text-[7px]">
                {title}
              </p>
              <p className="text-[11px] font-bold text-slate-800 sm:text-[14px]">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-[1.35fr_1fr_.9fr]">
          <div className="rounded-lg bg-white p-3">
            <div className="flex justify-between">
              <p className="text-[8px] font-semibold sm:text-[9px]">
                Bookings Overview
              </p>
              <span className="text-[6px] text-slate-400">This week⌄</span>
            </div>
            <LineChart />
          </div>
          <div className="hidden rounded-lg bg-white p-3 sm:block">
            <div className="mb-3 flex justify-between">
              <p className="text-[9px] font-semibold">Recent Bookings</p>
              <span className="text-[6px] text-[#6157e5]">View all</span>
            </div>
            <div className="space-y-2.5">
              {recentBookings.map(([initials, name, service, time], index) => (
                <div key={name} className="flex items-center gap-2">
                  <span
                    className={`grid size-6 place-items-center rounded-full text-[6px] font-bold ${index % 2 ? "bg-amber-100 text-amber-700" : "bg-indigo-100 text-indigo-700"}`}
                  >
                    {initials}
                  </span>
                  <span className="min-w-0 flex-1">
                    <b className="block truncate text-[7px]">{name}</b>
                    <span className="block text-[6px] text-slate-400">
                      {service}
                    </span>
                  </span>
                  <span className="text-[5px] text-emerald-500">{time}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden rounded-lg bg-white p-3 sm:block">
            <div className="mb-3 flex justify-between">
              <p className="text-[9px] font-semibold">Today&apos;s Schedule</p>
              <CalendarDays size={10} className="text-[#6157e5]" />
            </div>
            {["08:00 AM", "10:45 AM", "01:30 PM", "03:00 PM"].map((time, i) => (
              <div
                key={time}
                className="mb-2 border-l-2 border-indigo-200 pl-2"
              >
                <p className="text-[6px] font-semibold text-[#6157e5]">
                  {time}
                </p>
                <p className="text-[7px] font-medium">
                  {
                    [
                      "Yoga Class",
                      "Personal Training",
                      "Massage Therapy",
                      "Pilates Class",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function HeroSection() {
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame = 0;
    const update = () => {
      animationFrame = 0;
      const dashboard = dashboardRef.current;
      if (!dashboard) return;
      const progress = Math.min(window.scrollY / 650, 1);
      dashboard.style.setProperty("--scroll-y", `${progress * 42}px`);
      dashboard.style.setProperty("--scroll-scale", `${1 - progress * 0.035}`);
    };
    const onScroll = () => {
      if (!animationFrame) animationFrame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#eef6ff] pt-9 sm:pt-11 lg:pt-10">
      <video
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="pointer-events-none absolute inset-0 -z-30 h-full w-full object-cover object-center brightness-[0.9] contrast-[1.08] saturate-[1.18]"
      >
        <source src="/images/image_full_thik_asa_kentu_akho.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-[#eaf4ff]/55 via-[#dbeeff]/25 to-[#f2f8ff]/60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_50%_0%,rgba(191,219,254,.12),transparent_72%)]" />

      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-balance text-[36px] font-bold leading-[1.06] tracking-[-0.04em] text-black sm:text-[44px] lg:text-[50px]">
          Smart Bookings.
          <br />
          Stronger <span className="italic text-[#29236c]">Business.</span>
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-xs leading-5 text-slate-600 sm:text-sm">
          Helps you simplify reservations, automate workflows
          <br className="hidden sm:block" /> and deliver unforgettable
          experiences.
        </p>
        <Link
          href="/request-demo"
          className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#29236c] px-5 py-3 text-[11px] font-semibold text-white shadow-[0_10px_24px_rgba(41,35,108,.22)] transition-all hover:-translate-y-0.5 hover:bg-[#1e1957]"
        >
          Request a Demo{" "}
          <ArrowUpRight
            size={13}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>

        <div
          ref={dashboardRef}
          className="dashboard-motion relative mx-auto mt-11 w-full max-w-[900px] origin-top sm:mt-12"
        >
          <div className="absolute inset-x-[10%] -bottom-5 -z-10 h-1/2 rounded-full bg-[#80b9f7]/35 blur-3xl" />
          <div className="aspect-[1.7/1] overflow-hidden rounded-[14px] border-[5px] border-white/80 bg-white/60 p-0.5 shadow-[0_25px_65px_rgba(39,65,125,.25)] backdrop-blur-sm">
            <DashboardMockup />
          </div>
        </div>
      </div>

      <div className="relative mt-11 overflow-hidden bg-[#252062] py-3.5 text-white sm:mt-14">
        <div className="feature-marquee flex min-w-max items-center">
          {[...features, ...features].map((feature, index) => (
            <div key={`${feature}-${index}`} className="flex items-center">
              <span className="px-9 text-[9px] font-medium uppercase tracking-[.08em] sm:px-12">
                {feature}
              </span>
              <span className="size-1 rounded-full bg-[#72baf9]" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .dashboard-motion {
          transform: translate3d(0, var(--scroll-y, 0), 0)
            scale(var(--scroll-scale, 1));
          transition: transform 100ms linear;
        }
        .feature-marquee {
          animation: marquee 28s linear infinite;
        }
        @keyframes marquee {
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .feature-marquee {
            animation: none;
          }
          .dashboard-motion {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
