// src/pages/FaqPage.jsx
import { useState } from "react";
import { ChevronDown, ArrowRight, MessageCircle, Mail, Phone } from "lucide-react";

const FAQ_CATEGORIES = [
  {
    category: "Orders & Shipping",
    items: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping is 3–7 business days. Orders placed before 2 PM are dispatched the same day. Expedited options are available at checkout.",
      },
      {
        q: "Do you offer free shipping?",
        a: "Yes — all orders over $150 ship free. For orders under $150, a flat $9.99 shipping fee applies regardless of item count or weight.",
      },
      {
        q: "Can I track my order?",
        a: "Absolutely. Once your order ships, you'll receive a tracking number via email. You can also check the My Orders tab in your account at any time.",
      },
      {
        q: "Do you ship internationally?",
        a: "Currently we ship domestically only. International shipping is on our roadmap — drop your email in the footer to get notified when it launches.",
      },
    ],
  },
  {
    category: "Returns & Refunds",
    items: [
      {
        q: "What is your return policy?",
        a: "We offer a no-questions-asked 30-day return window from the delivery date. Items must be unworn, unwashed, and in original packaging with tags attached.",
      },
      {
        q: "How do I start a return?",
        a: "Head to the Returns tab in your account, select the order and items you'd like to return, choose a reason, and confirm. A prepaid return label will be emailed within 24 hours.",
      },
      {
        q: "How long do refunds take?",
        a: "Once we receive and inspect the returned item, refunds are processed within 3–5 business days. Your bank may take an additional 2–3 days to reflect the amount.",
      },
      {
        q: "Can I exchange for a different size?",
        a: "We don't currently offer direct exchanges. Return your original item for a refund and place a new order in the correct size — this way you get it faster.",
      },
    ],
  },
  {
    category: "Products & Sizing",
    items: [
      {
        q: "How do I find the right size?",
        a: "Each product page has a size guide with chest, waist, and length measurements. Our blanks run true-to-size with a relaxed fit — when in doubt, size down for a structured look.",
      },
      {
        q: "Are your products sustainable?",
        a: "We prioritize heavyweight organic and recycled-blend fabrics wherever possible and are actively expanding our sustainable sourcing. Full material composition is listed on every product page.",
      },
      {
        q: "Will sold-out items be restocked?",
        a: "Drop items are limited by design — that's the point. However, core blanks and bestsellers are restocked regularly. Hit 'Notify Me' on any sold-out product to get an email when it's back.",
      },
      {
        q: "Are your products unisex?",
        a: "Most of our pieces are designed with a unisex, oversized silhouette. We also carry men's and women's fits that are labelled clearly on the product page.",
      },
    ],
  },
  {
    category: "Account & Payments",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept Visa, Mastercard, Amex, PayPal, Apple Pay, and UPI. All transactions are secured with 256-bit SSL encryption.",
      },
      {
        q: "Do I need an account to order?",
        a: "No — you can check out as a guest. However, creating an account gives you order tracking, saved addresses, early drop access, and a persistent bag across devices.",
      },
      {
        q: "How do promo codes work?",
        a: "Enter your promo code at checkout in the promo field. Codes are single-use and cannot be combined with other offers unless stated. Try DROP10 for 10% off your first order.",
      },
      {
        q: "Is my payment information safe?",
        a: "Yes. We never store raw card details — all payment processing is handled through PCI-DSS compliant providers. Your data is encrypted end-to-end.",
      },
    ],
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className={`text-sm font-black uppercase tracking-tight leading-snug transition-colors duration-200
          ${open ? "text-[#ff5700]" : "text-[#0b2240] group-hover:text-[#ff5700]"}`}>
          {q}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={2.5}
          className={`flex-shrink-0 mt-0.5 text-slate-400 transition-transform duration-200
            ${open ? "rotate-180 text-[#ff5700]" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-sm text-slate-500 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage({ onShopNow }) {
  const [activeCategory, setActiveCategory] = useState(FAQ_CATEGORIES[0].category);

  const current = FAQ_CATEGORIES.find((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Header ───────────────────────────────────────────────────────── */}
      <div
        className="relative bg-[#0b2240] py-20 px-6 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      >
        <div className="absolute left-0 top-0 h-1 w-24 bg-[#ff5700]" />
        <div className="absolute right-20 bottom-10 w-28 h-28 border border-[#3b82f6]/15 rotate-12 hidden lg:block" />

        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#ff5700] mb-4">
            Help Center
          </p>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.86] tracking-tighter text-white">
            Got<br />
            <span className="text-[#3b82f6]">Questions?</span>
          </h1>
          <p className="mt-6 text-slate-400 text-sm max-w-md">
            Everything you need to know about orders, shipping, returns, and more.
            Can't find it? Reach out — we're real people.
          </p>
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">

        {/* Sidebar — category nav */}
        <aside className="lg:sticky lg:top-24 self-start">
          <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4">Categories</p>
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
            {FAQ_CATEGORIES.map(({ category }) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 text-left text-[10px] font-black uppercase tracking-widest px-4 py-3 border transition-all duration-200
                  ${activeCategory === category
                    ? "bg-[#0b2240] text-white border-[#0b2240]"
                    : "border-slate-100 text-slate-500 hover:border-[#0b2240] hover:text-[#0b2240]"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </aside>

        {/* FAQ accordion */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-[#ff5700]" />
            <h2 className="text-2xl font-black uppercase tracking-tight text-[#0b2240]">
              {activeCategory}
            </h2>
          </div>

          <div className="border border-slate-100 px-6">
            {current?.items.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Contact band ─────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3b82f6] mb-3">Still stuck?</p>
          <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter text-[#0b2240] mb-10">
            Talk to a<br />
            <span className="text-[#ff5700]">Human.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: <MessageCircle size={18} strokeWidth={2.5} />, title: "Live Chat", detail: "Mon–Fri, 9am–6pm", action: "Start Chat" },
              { icon: <Mail size={18} strokeWidth={2.5} />,          title: "Email Us",  detail: "support@dropshift.co", action: "Send Email" },
              { icon: <Phone size={18} strokeWidth={2.5} />,         title: "Call Us",   detail: "+1 (800) 000-0000",   action: "Call Now" },
            ].map(({ icon, title, detail, action }) => (
              <div key={title}
                className="bg-white border border-slate-100 p-7 hover:border-[#0b2240] transition-colors duration-300 group flex flex-col gap-4"
              >
                <div className="w-10 h-10 bg-[#0b2240] group-hover:bg-[#ff5700] flex items-center justify-center text-white transition-colors duration-300">
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-[#0b2240]">{title}</p>
                  <p className="text-xs text-slate-400 mt-1">{detail}</p>
                </div>
                <button className="self-start flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#ff5700] hover:text-[#0b2240] transition-colors group/btn">
                  {action}
                  <ArrowRight size={10} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <div className="bg-[#ff5700] py-14 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-[0.9] tracking-tighter text-white">
            Questions answered?<br />Let's shop.
          </h2>
          <button
            onClick={onShopNow}
            className="flex-shrink-0 flex items-center gap-3 bg-white text-[#ff5700] hover:bg-[#0b2240] hover:text-white text-sm font-black uppercase tracking-widest px-8 py-4 transition-colors group"
          >
            Browse the Drop
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}