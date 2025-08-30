import React from 'react';

const logos = [
  { name: 'Northwind', color: '#0ea5e9' },
  { name: 'Acme', color: '#6366f1' },
  { name: 'Voyage', color: '#22c55e' },
  { name: 'Helios', color: '#f59e0b' },
  { name: 'Pioneer', color: '#ef4444' },
  { name: 'Nimbus', color: '#14b8a6' },
];

function LogoBadge({ name, color }) {
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <svg width="36" height="36" viewBox="0 0 36 36" className="shrink-0">
          <defs>
            <linearGradient id={`grad-${name}`} x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor={color} />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="36" height="36" rx="9" fill={`url(#grad-${name})`} />
          <circle cx="18" cy="18" r="8" fill="white" opacity="0.9" />
          <path d="M18 10 L24 26 L12 26 Z" fill={color} opacity="0.9" />
        </svg>
        <div className="text-slate-700 font-medium">{name}</div>
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">Trusted by climate leaders</h3>
          <p className="text-sm text-slate-600">Procurement teams at technology and industrial companies choose Sage Carbon.</p>
        </div>
        <a href="#contact" className="hidden sm:inline-flex text-sm px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50">Become a partner</a>
      </div>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {logos.map((l) => (
          <LogoBadge key={l.name} name={l.name} color={l.color} />
        ))}
      </div>
    </section>
  );
}
