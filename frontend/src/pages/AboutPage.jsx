// src/pages/AboutPage.jsx
import { ArrowRight, Zap, Shield, Globe, Users } from "lucide-react";

const STATS = [
  { value: "600+", label: "Orders Shipped" },
  { value: "4.9★", label: "Avg Rating" },
  { value: "30",   label: "Day Returns" },
  { value: "3",    label: "Global Brands" },
];

const TEAM = [
  { initials: "SR", name: "Saketh R.", role: "Founder & Creative Dir.", color: "bg-[#ff5700]" },
  { initials: "AK", name: "Aanya K.",  role: "Head of Sourcing",        color: "bg-[#3b82f6]" },
  { initials: "MV", name: "Mihir V.",  role: "Logistics & Ops",         color: "bg-[#0b2240]" },
];

const VALUES = [
  { icon: <Zap size={18} strokeWidth={2.5} />,    title: "No Filler",     body: "Every piece in a drop is hand-selected. If it doesn't hit, it doesn't ship." },
  { icon: <Shield size={18} strokeWidth={2.5} />, title: "Radical Honesty", body: "No fake reviews, no inflated prices, no greenwashing. Just the truth about what you're buying." },
  { icon: <Globe size={18} strokeWidth={2.5} />,  title: "Global Reach",  body: "Sourced internationally, shipped domestically. Quality without the import markup." },
  { icon: <Users size={18} strokeWidth={2.5} />,  title: "Community First", body: "Built by the community, for the community. Early access, member drops, zero gatekeeping." },
];

export default function AboutPage({ onShopNow }) {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <div
        className="relative bg-[#0b2240] py-24 px-6 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      >
        <div className="absolute left-0 top-0 h-1 w-32 bg-[#ff5700]" />
        <div className="absolute right-16 top-16 w-36 h-36 border border-[#3b82f6]/15 rotate-12 hidden lg:block" />
        <div className="absolute right-28 bottom-16 w-16 h-16 bg-[#ff5700]/10 -rotate-6 hidden lg:block" />

        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#ff5700] mb-4">
            Who We Are
          </p>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.86] tracking-tighter text-white">
            Built<br />
            <span className="text-[#3b82f6]">Different.</span><br />
            Always.
          </h1>
          {/* Rebranded brand line below */}
          <p className="mt-8 text-slate-400 text-sm leading-relaxed max-w-lg">
            LuxZera started as a rejection of everything wrong with fashion retail —
            the markups, the contracts, the bloated agencies. We built the antidote.
          </p>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="bg-[#ff5700]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="py-8 px-4 border-r border-white/20 last:border-0 text-center">
              <p className="text-3xl md:text-4xl font-black text-white">{value}</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/70 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Story ── */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3b82f6] mb-3">
            The Origin
          </p>
          <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter text-[#0b2240] mb-8">
            Tired of<br />
            <span className="text-[#ff5700]">the BS.</span>
          </h2>
          {/* Rebranded brand lines below */}
          <div className="space-y-4 text-sm text-slate-500 leading-relaxed">
            <p>
              In 2024, our founder walked out of a meeting with a major fashion agency — they wanted a 12-month
              contract, a $30k retainer, and 6 weeks to ship the first product. He walked straight to a
              manufacturer and placed an order the same afternoon.
            </p>
            <p>
              LuxZera was built on that principle: <span className="font-black text-[#0b2240]">move fast,
              cut the fluff, and deliver something real.</span> We source heavyweight streetwear blanks
              and limited-run capsule pieces directly from makers — no middlemen, no markups.
            </p>
            <p>
              Today we ship to customers across the country, run weekly drop cycles, and have a community
              of over 2,000 members who get first access to every capsule.
            </p>
          </div>
        </div>

        {/* Image collage */}
        <div className="relative h-[480px]">
          <div className="absolute left-0 top-0 w-3/5 h-4/5 overflow-hidden bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80"
              alt="LuxZera model"
              className="w-full h-full object-cover object-top grayscale"
            />
          </div>
          <div className="absolute right-0 bottom-0 w-2/5 h-3/5 overflow-hidden bg-slate-50 border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80"
              alt="LuxZera product"
              className="w-full h-full object-cover object-top grayscale"
            />
          </div>
          <div className="absolute right-[38%] top-8 w-12 h-12 bg-[#ff5700] z-10" />
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3b82f6] mb-3">
            What We Stand For
          </p>
          <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter text-[#0b2240] mb-12">
            Our Values.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon, title, body }) => (
              <div key={title}
                className="bg-white border border-slate-100 p-7 hover:border-[#0b2240] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-[#0b2240] group-hover:bg-[#ff5700] flex items-center justify-center text-white mb-5 transition-colors duration-300">
                  {icon}
                </div>
                <h3 className="text-xs font-black uppercase tracking-widest text-[#0b2240] mb-2">{title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3b82f6] mb-3">The People</p>
        <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter text-[#0b2240] mb-12">
          Behind the<br />
          <span className="text-[#ff5700]">Drop.</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TEAM.map(({ initials, name, role, color }) => (
            <div key={name} className="border border-slate-100 p-8 hover:border-[#0b2240] transition-colors group">
              <div className={`w-14 h-14 ${color} flex items-center justify-center text-white text-lg font-black mb-5`}>
                {initials}
              </div>
              <p className="text-sm font-black uppercase tracking-widest text-[#0b2240]">{name}</p>
              <p className="text-xs text-slate-400 mt-1">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div
        className="bg-[#0b2240] py-20 px-6 relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      >
        <div className="absolute left-0 top-0 h-full w-1 bg-[#ff5700]" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tighter text-white">
            Ready to<br /><span className="text-[#ff5700]">Shop?</span>
          </h2>
          <button
            onClick={onShopNow}
            className="flex-shrink-0 flex items-center gap-3 bg-[#ff5700] hover:bg-white hover:text-[#ff5700] text-white text-sm font-black uppercase tracking-widest px-10 py-5 transition-colors group"
          >
            Browse the Drop
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}