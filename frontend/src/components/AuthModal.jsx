import { useState } from "react";
import { X } from "lucide-react";

export default function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState("signup");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0b2240]/70 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 transition-colors hover:text-[#ff5700]"
          aria-label="Close account modal"
        >
          <X size={20} />
        </button>

        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.32em] text-[#ff5700]">
          DropShift Account
        </p>
        <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tight text-[#0b2240]">
          {mode === "signup" ? "Join The Drop." : "Welcome Back."}
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          {mode === "signup"
            ? "Create an account for early drop access, faster checkout, and order tracking."
            : "Sign in to track orders, save your bag, and unlock member-only capsules."}
        </p>

        <div className="mt-6 grid grid-cols-2 border border-slate-200">
          {["signup", "login"].map((item) => (
            <button
              key={item}
              onClick={() => setMode(item)}
              className={`py-3 text-xs font-black uppercase tracking-widest transition-colors ${
                mode === item ? "bg-[#0b2240] text-white" : "text-slate-500 hover:text-[#0b2240]"
              }`}
            >
              {item === "signup" ? "Sign Up" : "Login"}
            </button>
          ))}
        </div>

        <form className="mt-6 space-y-3">
          {mode === "signup" && (
            <input
              type="text"
              placeholder="Full name"
              className="w-full border border-slate-200 px-4 py-3 text-sm font-bold outline-none transition-colors focus:border-[#0b2240]"
            />
          )}
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-slate-200 px-4 py-3 text-sm font-bold outline-none transition-colors focus:border-[#0b2240]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-slate-200 px-4 py-3 text-sm font-bold outline-none transition-colors focus:border-[#0b2240]"
          />
          <button
            type="button"
            className="w-full bg-[#ff5700] py-4 text-xs font-black uppercase tracking-[0.24em] text-white transition-colors hover:bg-[#0b2240]"
          >
            {mode === "signup" ? "Create Account" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
