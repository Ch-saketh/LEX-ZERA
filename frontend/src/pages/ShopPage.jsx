// src/pages/ShopPage.jsx
import { useState, useMemo } from "react";
import { SlidersHorizontal, ChevronDown, X, ArrowUpDown } from "lucide-react";
import ProductCard from "../components/ProductCard.jsx";
import { PRODUCTS } from "../data/products.js";

const CATEGORIES   = ["All", "Tops", "Bottoms", "Outerwear"];
const DEPARTMENTS  = ["All", "Men", "Women", "Unisex"];
const SIZES        = ["XS", "S", "M", "L", "XL", "XXL"];
const SORT_OPTIONS = [
  { label: "Featured",         value: "featured"   },
  { label: "Price: Low → High", value: "price_asc"  },
  { label: "Price: High → Low", value: "price_desc" },
  { label: "Newest",           value: "newest"     },
];

// ── Filter accordion section ──────────────────────────────────────────────────
function FilterSection({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-xs font-black uppercase tracking-widest text-[#0b2240]"
      >
        {title}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="mt-3">{children}</div>}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function ShopPage({ initialDepartment = "All" }) {
  const [activeDept,     setActiveDept]     = useState(initialDepartment);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSizes,    setActiveSizes]    = useState([]);
  const [priceMax,       setPriceMax]       = useState(200);
  const [sortBy,         setSortBy]         = useState("featured");
  const [sidebarOpen,    setSidebarOpen]    = useState(false);

  const toggleSize = (s) =>
    setActiveSizes((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s]);

  const displayed = useMemo(() => {
    let list = [...PRODUCTS].filter((p) => p.price <= priceMax);
    if (activeDept     !== "All") list = list.filter((p) => p.department === activeDept);
    if (activeCategory !== "All") list = list.filter((p) => p.category   === activeCategory);
    if (activeSizes.length)       list = list.filter((p) => activeSizes.some((s) => p.sizes.includes(s)));
    if (sortBy === "price_asc")   list.sort((a, b) => a.price - b.price);
    if (sortBy === "price_desc")  list.sort((a, b) => b.price - a.price);
    return list;
  }, [activeDept, activeCategory, activeSizes, priceMax, sortBy]);

  const activeFiltersCount =
    (activeDept !== "All" ? 1 : 0) +
    (activeCategory !== "All" ? 1 : 0) +
    activeSizes.length +
    (priceMax < 200 ? 1 : 0);

  const clearAll = () => {
    setActiveDept("All");
    setActiveCategory("All");
    setActiveSizes([]);
    setPriceMax(200);
  };

  const SidebarContent = () => (
    <aside className="w-full">
      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-5">Refine Results</p>

      <FilterSection title="Department">
        <div className="flex flex-col gap-2">
          {DEPARTMENTS.map((d) => (
            <button key={d} onClick={() => setActiveDept(d)}
              className={`text-left text-xs font-bold uppercase tracking-wider transition-colors
                ${activeDept === d ? "text-[#ff5700]" : "text-slate-500 hover:text-[#0b2240]"}`}
            >
              {d}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Category">
        <div className="flex flex-col gap-2">
          {CATEGORIES.map((c) => (
            <button key={c} onClick={() => setActiveCategory(c)}
              className={`text-left text-xs font-bold uppercase tracking-wider transition-colors
                ${activeCategory === c ? "text-[#ff5700]" : "text-slate-500 hover:text-[#0b2240]"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Size">
        <div className="flex flex-wrap gap-2">
          {SIZES.map((s) => (
            <button key={s} onClick={() => toggleSize(s)}
              className={`px-3 py-1.5 text-[10px] font-black uppercase border transition-all
                ${activeSizes.includes(s)
                  ? "bg-[#0b2240] text-white border-[#0b2240]"
                  : "border-slate-300 text-slate-600 hover:border-[#0b2240]"}`}
            >
              {s}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Max Price">
        <div>
          <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-2">
            <span>$0</span>
            <span className="text-[#ff5700] font-black">${priceMax}</span>
          </div>
          <input type="range" min={20} max={200} step={10} value={priceMax}
            onChange={(e) => setPriceMax(Number(e.target.value))}
            className="w-full accent-[#ff5700]" />
        </div>
      </FilterSection>

      {activeFiltersCount > 0 && (
        <button onClick={clearAll}
          className="mt-4 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#ff5700] hover:text-[#0b2240] transition-colors">
          <X size={11} /> Clear all filters
        </button>
      )}
    </aside>
  );

  // Department label for hero
  const deptLabel = activeDept === "All" ? "The Fresh Drop" : `${activeDept}'s Drop`;

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero banner ─────────────────────────────────────────────────── */}
      <div
        className="relative bg-[#0b2240] py-16 px-6 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      >
        <div className="absolute left-0 top-0 h-1 w-24 bg-[#ff5700]" />
        <div className="absolute right-12 top-1/2 -translate-y-1/2 w-32 h-32 border-2 border-[#ff5700] opacity-20 rotate-12 hidden md:block" />
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#3b82f6] mb-2">
            Season 2026 · Now Live
          </p>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.88] tracking-tighter text-white">
            {deptLabel.split(" ").map((word, i) => (
              <span key={i} className={`block ${i === 1 ? "text-[#3b82f6]" : ""}`}>{word}</span>
            ))}
          </h1>
        </div>
      </div>

      {/* ── Department quick-tabs ────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex gap-1 overflow-x-auto py-2">
          {DEPARTMENTS.map((d) => (
            <button key={d} onClick={() => setActiveDept(d)}
              className={`flex-shrink-0 px-5 py-2.5 text-[10px] font-black uppercase tracking-widest border transition-all duration-200
                ${activeDept === d
                  ? "bg-[#0b2240] text-white border-[#0b2240]"
                  : "border-transparent text-slate-400 hover:text-[#0b2240]"}`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* ── Toolbar ─────────────────────────────────────────────────────── */}
      <div className="sticky top-0 z-30 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <button onClick={() => setSidebarOpen((o) => !o)}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0b2240] lg:hidden">
            <SlidersHorizontal size={14} />
            Filters
            {activeFiltersCount > 0 && (
              <span className="bg-[#ff5700] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>
          <span className="hidden lg:block text-[10px] font-bold uppercase tracking-widest text-slate-400">
            {displayed.length} result{displayed.length !== 1 ? "s" : ""}
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <ArrowUpDown size={12} className="text-slate-400" />
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-black uppercase tracking-wider text-[#0b2240] border-none outline-none bg-transparent cursor-pointer">
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-10">

        {/* Desktop sidebar */}
        <div className="hidden lg:block w-52 flex-shrink-0">
          <SidebarContent />
        </div>

        {/* Mobile drawer */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 flex lg:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
            <div className="relative bg-white w-72 h-full overflow-y-auto p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-[#0b2240]">Filters</span>
                <button onClick={() => setSidebarOpen(false)}><X size={18} className="text-[#0b2240]" /></button>
              </div>
              <SidebarContent />
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="flex-1 min-w-0">
          {displayed.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {displayed.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <p className="text-5xl font-black uppercase text-slate-100 tracking-tighter">No results</p>
              <p className="text-sm text-slate-400 mt-2">Try adjusting your filters.</p>
              <button onClick={clearAll}
                className="mt-6 flex items-center gap-2 bg-[#ff5700] text-white text-xs font-black uppercase tracking-widest px-6 py-3 hover:bg-[#0b2240] transition-colors">
                <X size={12} /> Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}