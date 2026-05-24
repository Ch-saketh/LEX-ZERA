// src/components/Hero.jsx
import { ArrowRight } from "lucide-react";

const TICKER_ITEMS = [
  "NEW DROP LIVE",
  "UNISEX CAPSULE",
  "600+ PIECES COPPED",
  "HEAVYWEIGHT BLANKS",
  "NO MALL MARKUPS",
];

export default function Hero({ onShopNow }) {
  return (
    <section className="relative overflow-hidden bg-white lg:min-h-[calc(100vh-5rem)]">
      <div className="border-b border-[#0b2240]/10 bg-[#0b2240] py-2 text-white">
        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="mx-8 inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.32em]"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-[#ff5700]" />
            </span>
          ))}
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,34,64,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,34,64,.05) 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="absolute -left-14 top-8 h-72 w-32 rounded-full border-[7px] border-[#3b82f6]/65 pointer-events-none" />
      <div className="absolute right-[44%] top-20 hidden h-14 w-14 rotate-6 bg-[#ff5700]/85 md:block" />
      <div className="absolute bottom-16 right-8 hidden h-20 w-20 rotate-12 border-2 border-[#3b82f6]/30 lg:block" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-8 lg:min-h-[calc(100vh-7.25rem)] lg:grid-cols-[1.05fr_.95fr] lg:py-6">
        <div className="max-w-4xl pb-6 text-left md:pb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#ff5700]" />
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#ff5700]">
              Season 2026 · Live Capsule
            </span>
          </div>

          <h1 className="text-[clamp(3.5rem,7.4vw,7rem)] font-black uppercase leading-[0.86] tracking-tight text-[#0b2240]">
            <span className="block">RAW CUTS.</span>
            <span
              className="block cursor-default text-transparent [-webkit-text-stroke:2px_#0b2240] transition-all duration-300 ease-in-out hover:text-[#0b2240] hover:[text-shadow:4px_4px_0_rgba(255,87,0,0.25)]"
            >
              HEAVY FABRIC.
            </span>
            <span className="block">PURE DRIP.</span>
          </h1>

          {/* Rebranded brand layout copy below */}
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-500">
            Skip the mall markups and cheap fast-fashion blanks. LuxZera delivers ultra-heavyweight
            streetwear essentials and exclusive limited-run capsule drops built to disrupt your daily rotation.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onShopNow}
              className="group inline-flex items-center gap-3 bg-[#ff5700] px-8 py-4 text-xs font-black uppercase tracking-[0.24em] text-white transition-all duration-300 ease-in-out hover:bg-[#0b2240]"
            >
              Shop the Drop
              <ArrowRight size={15} className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </button>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0b2240]">
              Men · Women · Unisex
            </span>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[28rem] animate-fade-in-up pr-0 md:pr-8">
            <div className="relative aspect-[3/4] overflow-hidden rounded-b-[12rem] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&q=85"
                alt="LuxZera streetwear model wearing a premium capsule fit"
                className="h-full w-full object-cover object-top grayscale transition-all duration-300 ease-in-out hover:grayscale-0"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#ff5700]/25 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0b2240]/20 to-transparent pointer-events-none" />
            </div>

            <div className="absolute top-12 right-0 z-20 bg-[#0b2240] px-5 py-4 text-white shadow-2xl">
              <p className="whitespace-nowrap text-[9px] font-black uppercase tracking-[0.28em] text-[#3b82f6]">
                LIVE DROP //
              </p>
              <p className="mt-1 text-xl font-black leading-none">600+</p>
              <p className="mt-1 max-w-[9rem] text-[9px] font-black uppercase tracking-[0.18em] text-slate-300">
                Pieces Copped
              </p>
            </div>

            <div className="absolute -bottom-4 -left-4 hidden bg-[#ff5700] px-5 py-4 text-white shadow-2xl sm:block">
              <p className="text-[9px] font-black uppercase tracking-[0.28em] text-white/75">
                Capsule
              </p>
              <p className="mt-1 text-lg font-black uppercase leading-none tracking-tight">
                Limited Run
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}