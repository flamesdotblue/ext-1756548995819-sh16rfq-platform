import React from 'react';
import { Leaf, ShieldCheck, LineChart } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/70">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 grid place-items-center rounded-md bg-emerald-500 text-white">
            <Leaf size={18} />
          </div>
          <span className="font-semibold tracking-tight">Sage Carbon</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#solutions" className="text-slate-600 hover:text-slate-900">Solutions</a>
          <a href="#science" className="text-slate-600 hover:text-slate-900">Science</a>
          <a href="#impact" className="text-slate-600 hover:text-slate-900">Impact</a>
          <a href="#pricing" className="text-slate-600 hover:text-slate-900">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-600 border border-slate-200 rounded-full px-3 py-1">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span>Verified removals</span>
          </div>
          <a href="#buy" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-slate-800 transition-colors">
            <LineChart size={16} />
            <span className="font-medium">Buy Carbon Credits</span>
          </a>
        </div>
      </div>
    </header>
  );
}
