import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DataVisuals from './components/DataVisuals';
import Partners from './components/Partners';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <DataVisuals />
        <Partners />

        <section className="relative isolate overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="rounded-3xl bg-slate-900 text-white p-10 md:p-16 shadow-lg grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Ready to neutralize your footprint?</h2>
                <p className="mt-3 text-slate-300">Purchase high-integrity Direct Air Capture credits that scale with your growth. Transparent pricing, verifiable removals.</p>
              </div>
              <div className="flex md:justify-end items-center gap-4">
                <a href="#buy" className="inline-flex items-center gap-2 bg-emerald-400 text-slate-900 font-medium px-6 py-3 rounded-xl hover:bg-emerald-300 transition-colors">
                  Buy Carbon Credits
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/70">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-emerald-500"></div>
            <span className="font-semibold">Sage Carbon</span>
          </div>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Sage Carbon, Inc. All rights reserved.</p>
          <div className="text-sm text-slate-500 flex gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Contact</a>
          </div>
        </div>
      </footer>

      <a href="#buy" className="fixed bottom-6 right-6 inline-flex items-center gap-2 bg-emerald-500 text-slate-900 font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-emerald-400 transition-colors">
        Buy Carbon Credits
      </a>
    </div>
  );
}
