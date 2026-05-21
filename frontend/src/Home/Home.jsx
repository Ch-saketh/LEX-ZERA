// src/Home/Home.jsx

import { ArrowRight, Zap, RefreshCcw, Truck, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { FEATURED_PRODUCTS } from "../data/products.js";

// ─── Marquee ticker items ─────────────────────────────────────────────────────
const TICKER = [
  "RAW CUTS.",
  "HEAVY FABRIC.",
  "PURE DRIP.",
  "30-Day Returns",
  "New Drops Weekly",
  "4.9★ Rated",
];

// ─── Perks ────────────────────────────────────────────────────────────────────
const PERKS = [
  {
    icon: <Zap size={20} strokeWidth={2.5} />,
    title: "Fast Dispatch",
    body: "Orders processed same-day before 2 PM. No delays, no excuses.",
  },
  {
    icon: <Truck size={20} strokeWidth={2.5} />,
    title: "Free Shipping",
    body: "On all orders over $150. Tracked from warehouse to your door.",
  },
  {
    icon: <RefreshCcw size={20} strokeWidth={2.5} />,
    title: "Easy Returns",
    body: "Hassle-free 30-day return window. No questions asked.",
  },
];

// ─── Reviews ──────────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    name: "Maya R.",
    handle: "@mayastyle",
    stars: 5,
    text: "Finally a drop store that actually delivers on quality.",
  },
  {
    name: "Jordan T.",
    handle: "@jtfits",
    stars: 5,
    text: "No subscription, no BS — ordered Monday, wore it Thursday.",
  },
  {
    name: "Priya K.",
    handle: "@priyaedits",
    stars: 5,
    text: "The wide-leg pants are worth every penny.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function Home({ onShopNow }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white">

      {/* ── Scrolling ticker ───────────────────────────────────── */}
      <div className="bg-[#3b82f6] overflow-hidden py-2.5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 mx-8 text-[10px] font-black uppercase tracking-[0.25em] text-white"
            >
              {item}
              <span className="w-1 h-1 rounded-full bg-white/50" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Featured drops ───────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3b82f6] mb-2">
              This Week
            </p>

            <h2 className="text-5xl md:text-6xl font-black uppercase leading-[0.9] tracking-tighter text-[#0b2240]">
              Featured
              <br />
              <span className="text-[#ff5700]">Drops.</span>
            </h2>
          </div>

          <button
            onClick={onShopNow}
            className="hidden md:flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0b2240] hover:text-[#ff5700] transition-colors group"
          >
            View All

            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {FEATURED_PRODUCTS.map((p) => (

            <ProductCard
              key={p.id}
              product={p}
            />

          ))}

        </div>

        {/* Mobile button */}
        <div className="mt-8 flex justify-center md:hidden">

          <button
            onClick={() => {
              if (onShopNow) {
                onShopNow();
                return;
              }

              navigate("/market");
            }}
            className="flex items-center gap-2 bg-[#0b2240] text-white text-xs font-black uppercase tracking-widest px-8 py-4 hover:bg-[#ff5700] transition-colors"
          >
            View All Drops
            <ArrowRight size={14} />
          </button>

        </div>
      </section>

      {/* ── Promo Section ───────────────────────────────────── */}
      <section
        className="relative bg-[#0b2240] py-20 px-6 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      >

        <div className="absolute left-0 top-0 h-full w-1 bg-[#ff5700]" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

          <div className="max-w-xl">

            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3b82f6] mb-3">
              The DropShift Promise
            </p>

            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.88] tracking-tighter text-white">
              No Fluff.
              <br />
              Just
              <br />
              <span className="text-[#ff5700]">Fits.</span>
            </h2>

            <p className="mt-6 text-slate-400 text-sm leading-relaxed max-w-sm">
              Curated high-quality fashion drops without the noise.
            </p>

          </div>

          <button
            onClick={onShopNow}
            className="flex-shrink-0 flex items-center gap-3 bg-[#ff5700] hover:bg-[#e04e00] text-white text-sm font-black uppercase tracking-widest px-10 py-5 transition-colors group"
          >
            Shop the Drop

            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

        </div>
      </section>

    </div>
  );
}