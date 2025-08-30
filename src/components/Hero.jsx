import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-[-10%] h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl"></div>
        <div className="absolute top-40 -left-24 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-100 border border-emerald-200 rounded-full px-3 py-1 text-xs font-medium">
            <Sparkles size={14} /> New: Instant checkout for DAC credits
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">Permanent carbon removal for companies building a cleaner future.</h1>
          <p className="mt-4 text-lg text-slate-600">Sage Carbon makes it simple to buy high-quality Direct Air Capture credits. Every tonne is measured, verified, and retired on-chain for maximum transparency.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a id="buy" href="#pricing" className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-slate-900 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-400 transition-colors">
              Buy Carbon Credits <ArrowRight size={18} />
            </a>
            <a href="#science" className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors">
              How it works
            </a>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">
              <dt className="text-xs text-slate-500">Avg. permanence</dt>
              <dd className="text-2xl font-semibold">1,000+ yrs</dd>
            </div>
            <div className="rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">
              <dt className="text-xs text-slate-500">Projects supported</dt>
              <dd className="text-2xl font-semibold">18</dd>
            </div>
            <div className="rounded-2xl bg-white p-4 border border-slate-100 shadow-sm">
              <dt className="text-xs text-slate-500">Tonnes retired</dt>
              <dd className="text-2xl font-semibold">42,680</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-xl p-6 md:p-8">
            <h3 className="text-lg font-semibold tracking-tight">Your climate portfolio</h3>
            <p className="text-sm text-slate-500">Illustrative data based on suggested allocation.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div>
                <div className="relative h-48 w-full">
                  <svg viewBox="0 0 300 180" className="h-full w-full">
                    <defs>
                      <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#34d399" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#34d399" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>
                    <rect x="0" y="0" width="300" height="180" fill="#f8fafc" rx="10" />
                    <polyline fill="url(#grad)" stroke="#10b981" strokeWidth="2" points="0,160 20,150 40,140 60,138 80,130 100,118 120,120 140,112 160,100 180,90 200,82 220,70 240,60 260,52 280,40 300,36 300,180 0,180" />
                    <text x="12" y="24" fontSize="12" fill="#334155">Projected removals</text>
                    <text x="12" y="40" fontSize="10" fill="#64748b">tCO₂e over time</text>
                  </svg>
                </div>
                <div className="mt-3 text-sm text-slate-600">Expected removal trajectory when purchasing 1,000 tCO₂e/yr with a 12% YoY increase.</div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="relative h-40 w-40">
                  <svg viewBox="0 0 120 120" className="h-full w-full">
                    <defs>
                      <linearGradient id="seg1" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#34d399" />
                      </linearGradient>
                      <linearGradient id="seg2" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#a7f3d0" />
                        <stop offset="100%" stopColor="#6ee7b7" />
                      </linearGradient>
                    </defs>
                    <circle cx="60" cy="60" r="46" fill="#f8fafc" />
                    <g transform="rotate(-90 60 60)">
                      <circle cx="60" cy="60" r="46" stroke="url(#seg1)" strokeWidth="12" strokeDasharray="289 1000" strokeLinecap="round" fill="none" />
                      <circle cx="60" cy="60" r="46" stroke="url(#seg2)" strokeWidth="12" strokeDasharray="144 1000" strokeDashoffset="-289" strokeLinecap="round" fill="none" />
                    </g>
                    <text x="60" y="60" textAnchor="middle" dominantBaseline="middle" fontSize="18" fontWeight="600" fill="#0f172a">DAC</text>
                  </svg>
                </div>
                <div className="mt-3 text-center text-sm text-slate-600">
                  Suggested mix: 67% Direct Air Capture, 33% Biomass + MRV
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                <div className="text-slate-500">Price / tCO₂e</div>
                <div className="text-slate-900 font-semibold">$450</div>
              </div>
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                <div className="text-slate-500">Lead time</div>
                <div className="text-slate-900 font-semibold">0–6 mo</div>
              </div>
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                <div className="text-slate-500">Certifications</div>
                <div className="text-slate-900 font-semibold">ISO, Puro</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="pricing" className="mx-auto max-w-6xl px-6 pb-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm">
            <div className="text-sm text-slate-500">Starter</div>
            <div className="mt-1 text-2xl font-semibold">From $450/t</div>
            <p className="mt-2 text-sm text-slate-600">Ideal for pilot programs and disclosures under 1,000 tCO₂e.</p>
            <a href="#buy" className="mt-4 inline-flex justify-center items-center w-full bg-slate-900 text-white py-2.5 rounded-xl hover:bg-slate-800 font-medium">Buy now</a>
          </div>
          <div className="rounded-2xl bg-slate-900 p-6 border border-slate-900 shadow-sm text-white ring-2 ring-emerald-400/50">
            <div className="text-sm text-slate-300">Growth</div>
            <div className="mt-1 text-2xl font-semibold">Volume pricing</div>
            <p className="mt-2 text-sm text-slate-300">Scaled procurement with delivery schedules and reporting.</p>
            <a href="#contact" className="mt-4 inline-flex justify-center items-center w-full bg-emerald-400 text-slate-900 py-2.5 rounded-xl hover:bg-emerald-300 font-semibold">Talk to sales</a>
          </div>
          <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm">
            <div className="text-sm text-slate-500">Enterprise</div>
            <div className="mt-1 text-2xl font-semibold">Custom</div>
            <p className="mt-2 text-sm text-slate-600">Multi-year offtake, MRV integrations, audit support, and SLAs.</p>
            <a href="#contact" className="mt-4 inline-flex justify-center items-center w-full bg-white border border-slate-200 text-slate-900 py-2.5 rounded-xl hover:bg-slate-50 font-medium">Contact us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
