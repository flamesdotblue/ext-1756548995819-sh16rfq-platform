import React from 'react';
import { ShieldCheck, Leaf, LineChart } from 'lucide-react';

export default function DataVisuals() {
  return (
    <section id="impact" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6">
          <div className="flex items-center gap-2">
            <LineChart className="text-emerald-500" size={18} />
            <h3 className="text-lg font-semibold tracking-tight">Impact dashboard</h3>
          </div>
          <p className="mt-1 text-sm text-slate-600">Track purchased credits, delivered tonnes, and retirements in real time.</p>
          <div className="mt-6">
            <svg viewBox="0 0 560 220" className="w-full h-[220px]">
              <rect x="0" y="0" width="560" height="220" rx="14" fill="#f8fafc" />
              {Array.from({ length: 6 }).map((_, i) => (
                <g key={i}>
                  <rect x={40 + i * 80} y={40} width="36" height={40 + i * 12} fill="#a7f3d0" rx="6" />
                  <rect x={40 + i * 80 + 40} y={40} width="36" height={20 + i * 18} fill="#34d399" rx="6" />
                </g>
              ))}
              <text x="20" y="24" fontSize="12" fill="#334155">Delivered vs. Retired (tCO₂e)</text>
              <g>
                <rect x="420" y="16" width="12" height="12" fill="#a7f3d0" rx="2" />
                <text x="440" y="26" fontSize="11" fill="#475569">Delivered</text>
                <rect x="500" y="16" width="12" height="12" fill="#34d399" rx="2" />
                <text x="520" y="26" fontSize="11" fill="#475569">Retired</text>
              </g>
            </svg>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
              <div className="text-slate-500">Purchased</div>
              <div className="text-xl font-semibold text-slate-900">12,000 t</div>
            </div>
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
              <div className="text-slate-500">Delivered</div>
              <div className="text-xl font-semibold text-slate-900">9,450 t</div>
            </div>
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
              <div className="text-slate-500">Retired</div>
              <div className="text-xl font-semibold text-slate-900">8,900 t</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-emerald-500" size={18} />
              <h3 className="text-lg font-semibold tracking-tight">High-integrity removals</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• ISO-aligned measurement, reporting, and verification (MRV)</li>
              <li>• Independent 3rd-party audits with serialized certificates</li>
              <li>• On-chain retirement receipts for full traceability</li>
              <li>• Leakage and durability accounted for in delivered tonnes</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-slate-900 border border-slate-900 text-white shadow-sm p-6">
            <div className="flex items-center gap-2">
              <Leaf className="text-emerald-400" size={18} />
              <h3 className="text-lg font-semibold tracking-tight">Fast checkout</h3>
            </div>
            <p className="mt-2 text-sm text-slate-300">Purchase credits with card or invoice. Volume discounts automatically applied at checkout.</p>
            <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="text-slate-300">Min. order</div>
                <div className="text-white font-semibold">10 tCO₂e</div>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="text-slate-300">Settlement</div>
                <div className="text-white font-semibold">T+2 days</div>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="text-slate-300">Invoices</div>
                <div className="text-white font-semibold">Net 30</div>
              </div>
            </div>
            <a href="#buy" className="mt-6 inline-flex items-center justify-center w-full bg-emerald-400 text-slate-900 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-300 transition-colors">Buy Carbon Credits</a>
          </div>
        </div>
      </div>
    </section>
  );
}
