"use client";
import React, { useState, useEffect } from 'react';

export default function KidUplyUnicorn() {
  const [activeTab, setActiveTab] = useState('learn');
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => setIsLoaded(true), []);

  if (!isLoaded) return null;

  return (
    <main className="min-h-screen bg-[#F0FDF4] pb-32 pt-[env(safe-area-inset-top)] font-sans text-emerald-950 antialiased overflow-x-hidden">
      
      {/* GLOSSY HEADER */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-emerald-100/50 px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200 group-hover:rotate-6 transition-transform">
            <span className="text-white text-2xl">🦄</span>
          </div>
          <div>
            <h1 className="text-2xl font-[900] tracking-tighter text-emerald-900 leading-none">KidUply</h1>
            <span className="text-[10px] font-bold text-emerald-500 tracking-[0.2em] uppercase">Unicorn Edition</span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-sm border border-emerald-50">
          <span className="text-amber-400">💎</span>
          <span className="text-xs font-black text-emerald-800 tracking-tight">2,450</span>
        </div>
      </header>

      <div className="p-6 space-y-8 max-w-lg mx-auto">
        
        {/* LEARN: ADAPTIVE JOURNEY */}
        {activeTab === 'learn' && (
          <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
            {/* Main Course Card */}
            <div className="relative group overflow-hidden bg-gradient-to-br from-white to-emerald-50 rounded-[40px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-white">
              <div className="relative z-10">
                <h2 className="text-3xl font-black text-emerald-900 leading-tight">Sening sarguzashting! 🚀</h2>
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-xs font-bold text-emerald-700 uppercase tracking-widest">
                    <span>Level 8</span>
                    <span>85% Completed</span>
                  </div>
                  <div className="w-full bg-emerald-100/50 h-3 rounded-full overflow-hidden p-0.5 border border-emerald-50">
                    <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-full rounded-full w-[85%] shadow-sm" />
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -bottom-6 text-9xl opacity-10 grayscale group-hover:grayscale-0 transition-all duration-700">🦖</div>
            </div>

            {/* Interest Hub */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: 'Dino World', i: '🦖', d: '24 Lessons', c: 'from-orange-50 to-orange-100' },
                { n: 'Deep Sea', i: '🐙', d: '18 Lessons', c: 'from-blue-50 to-blue-100' }
              ].map(card => (
                <div key={card.n} className={`bg-gradient-to-br ${card.c} p-6 rounded-[32px] border border-white shadow-sm hover:shadow-md transition-shadow`}>
                  <div className="text-4xl mb-4">{card.i}</div>
                  <h4 className="font-extrabold text-emerald-950 text-sm">{card.n}</h4>
                  <p className="text-[10px] font-bold text-emerald-700/60 uppercase mt-1">{card.d}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PARENTS: UNICORN ANALYTICS */}
        {activeTab === 'parents' && (
          <div className="space-y-6 animate-in slide-in-from-bottom-12 duration-500">
            <div className="bg-white rounded-[40px] p-8 shadow-sm border border-emerald-50">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-black text-xl text-emerald-900">Education Analytics</h3>
                <span className="text-[10px] font-black bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full uppercase">Weekly</span>
              </div>
              
              {/* Pro Chart */}
              <div className="h-44 flex items-end justify-between gap-3">
                {[55, 30, 85, 45, 95, 60, 75].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-3">
                    <div style={{ height: `${h}%` }} className={`w-full rounded-2xl relative group ${h > 70 ? 'bg-emerald-500 shadow-lg shadow-emerald-100' : 'bg-emerald-100'}`}>
                       <div className="hidden group-hover:flex absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">Score {h}</div>
                    </div>
                    <span className="text-[10px] font-black text-emerald-300">Mon</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-900 rounded-[40px] p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-2">Unicorn Pro 💎</h3>
                <p className="text-sm opacity-70 mb-6 font-medium">Barcha darslar va hisobotlarni PDF shaklida yuklab oling.</p>
                <button className="w-full bg-emerald-400 hover:bg-emerald-300 py-4 rounded-2xl font-black text-emerald-950 shadow-xl shadow-emerald-400/20 transition-all active:scale-95">UPGRADE NOW</button>
              </div>
              <div className="absolute top-0 right-0 p-4 text-6xl opacity-20">🪄</div>
            </div>
          </div>
        )}

      </div>

      {/* LUXURY NAV BAR */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-2xl border-t border-emerald-100/50 px-10 py-6 flex justify-between items-center z-50 rounded-t-[45px] shadow-[0_-25px_50px_rgba(0,0,0,0.04)]">
        {[
          { id: 'learn', i: '📖', l: 'Learn' },
          { id: 'play', i: '🎮', l: 'Play' },
          { id: 'connect', i: '👥', l: 'Connect' },
          { id: 'parents', i: '🔒', l: 'Parents', isPin: true }
        ].map(item => (
          <button key={item.id} onClick={() => item.isPin ? setShowPin(true) : setActiveTab(item.id)}
            className={`flex flex-col items-center gap-2 transition-all duration-300 ${activeTab === item.id && !showPin ? 'text-emerald-600 scale-125' : 'text-emerald-200'}`}>
            <span className="text-2xl drop-shadow-sm">{item.i}</span>
            {activeTab === item.id && !showPin && <span className="text-[10px] font-black uppercase tracking-widest">{item.l}</span>}
          </button>
        ))}
      </nav>

      {/* MODERN PIN MODAL */}
      {showPin && (
        <div className="fixed inset-0 bg-emerald-950/20 backdrop-blur-3xl z-[100] flex items-end">
          <div className="bg-white w-full rounded-t-[50px] p-10 pb-16 animate-in slide-in-from-bottom duration-500 shadow-2xl">
            <div className="w-16 h-1.5 bg-emerald-50 rounded-full mx-auto mb-10" />
            <h2 className="text-3xl font-black text-center text-emerald-900 mb-8">Parent Gate</h2>
            <div className="flex justify-center gap-5 mb-14">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className={`w-5 h-5 rounded-full border-4 transition-all duration-300 ${pin.length > i ? 'bg-emerald-500 border-emerald-100 scale-125 shadow-lg shadow-emerald-200' : 'border-emerald-50'}`} />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-8 max-w-xs mx-auto mb-10 text-center">
              {['1','2','3','4','5','6','7','8','9','⌫','0','✓'].map(num => (
                <button key={num} onClick={() => {
                   if (num === '⌫') setPin(pin.slice(0, -1));
                   else if (pin.length < 4 && num !== '✓') {
                     const newPin = pin + num;
                     setPin(newPin);
                     if (newPin === '1234') { setActiveTab('parents'); setShowPin(false); setPin(''); }
                   }
                }} className="h-16 w-16 text-3xl font-black text-emerald-900 active:bg-emerald-50 rounded-full transition-all">
                  {num}
                </button>
              ))}
            </div>
            <button onClick={() => setShowPin(false)} className="w-full text-emerald-300 font-black text-xs uppercase tracking-widest">Back to Kids Mode</button>
          </div>
        </div>
      )}
    </main>
  );
}
