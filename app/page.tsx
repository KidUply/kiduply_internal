"use client";
import React, { useState } from 'react';

export default function KidUplyUnicorn() {
  const [activeTab, setActiveTab] = useState('learn');
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState('');

  return (
    <main className="min-h-screen bg-[#F7FBF7] pb-32 pt-[env(safe-area-inset-top)] font-sans text-emerald-950">
      
      {/* PROFESSIONAL HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-emerald-100/50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200">
            <span className="text-white text-2xl">🦄</span>
          </div>
          <h1 className="text-2xl font-black text-emerald-900 tracking-tighter">KidUply</h1>
        </div>
        <div className="bg-emerald-50 px-4 py-2 rounded-2xl border border-emerald-100">
          <span className="text-xs font-black text-emerald-700 uppercase tracking-widest">Lvl 8 • 2450 XP</span>
        </div>
      </header>

      <div className="p-6 max-w-lg mx-auto space-y-8">
        
        {/* LEARN: INTERACTIVE DASHBOARD */}
        {activeTab === 'learn' && (
          <div className="space-y-6 animate-in fade-in duration-700">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[40px] p-8 text-white shadow-2xl">
              <h2 className="text-3xl font-black leading-tight">Sening Yo'ling 🚀</h2>
              <div className="mt-8">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2 opacity-80">
                  <span>Hozirgi Progress</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-white/20 h-4 rounded-full p-1 shadow-inner">
                  <div className="bg-white h-full rounded-full w-[85%] shadow-md animate-pulse" />
                </div>
              </div>
            </div>
            {/* Grafik qiziqishlar bo'yicha */}
            <div className="grid grid-cols-2 gap-4">
              {['Matematika 🔢', 'Koinot 🚀', 'San'at 🎨', 'Mantiq 🧠'].map((cat) => (
                <div key={cat} className="bg-white p-6 rounded-[32px] border border-emerald-50 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-emerald-900 text-sm">{cat}</h4>
                  <div className="mt-3 flex gap-1">
                    {[1,2,3,4,5].map(s => <div key={s} className={`h-1 flex-1 rounded-full ${s <= 4 ? 'bg-emerald-400' : 'bg-emerald-100'}`} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONNECT: REAL-TIME LEADERBOARD */}
        {activeTab === 'connect' && (
          <div className="space-y-6 animate-in slide-in-from-right duration-500">
            <h3 className="text-xl font-black text-emerald-900 px-2">Top Unicornlar 🏆</h3>
            <div className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-emerald-50">
              {[
                { r: 1, n: 'Alijon', x: '4,250 XP', i: '🥇', c: 'bg-yellow-50' },
                { r: 2, n: 'Zahro', x: '3,800 XP', i: '🥈', c: 'bg-slate-50' },
                { r: 3, n: 'Temur', x: '3,100 XP', i: '🥉', c: 'bg-orange-50' }
              ].map(user => (
                <div key={user.r} className={`flex items-center justify-between p-5 border-b border-emerald-50 last:border-0 ${user.c}`}>
                  <div className="flex items-center gap-4">
                    <span className="w-6 font-black text-emerald-300">#{user.r}</span>
                    <div className="w-12 h-12 bg-white rounded-full border-2 border-emerald-100 shadow-sm" />
                    <span className="font-bold text-emerald-900">{user.n}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-emerald-600 tracking-tight">{user.x}</span>
                    <span className="text-xl">{user.i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PARENTS: ADVANCED ANALYTICS */}
        {activeTab === 'parents' && (
          <div className="space-y-6 animate-in slide-in-from-bottom duration-500">
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-emerald-50">
              <h3 className="text-xs font-black text-emerald-300 uppercase tracking-[0.2em] mb-8">Haftalik Faollik (Daqiqa)</h3>
              <div className="h-48 flex items-end justify-between gap-3 px-2">
                {[45, 80, 55, 100, 65, 40, 90].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                    <div style={{ height: `${h}%` }} className={`w-full rounded-2xl relative transition-all duration-700 ${h > 75 ? 'bg-emerald-500 shadow-lg shadow-emerald-100' : 'bg-emerald-100'}`}>
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-emerald-900 text-white text-[10px] font-bold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{h} min</div>
                    </div>
                    <span className="text-[10px] font-black text-emerald-300">Kun {i+1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* LUXURY NAVBAR */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-2xl px-10 py-6 flex justify-between items-center z-50 rounded-t-[45px] shadow-[0_-20px_60px_rgba(0,0,0,0.05)] border-t border-emerald-50">
        {[
          { id: 'learn', i: '📖', l: 'Learn' },
          { id: 'play', i: '🎮', l: 'Play' },
          { id: 'connect', i: '👥', l: 'Connect' },
          { id: 'parents', i: '🔒', l: 'Parents', pin: true }
        ].map(tab => (
          <button key={tab.id} onClick={() => tab.pin ? setShowPin(true) : setActiveTab(tab.id)} 
            className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${activeTab === tab.id && !showPin ? 'text-emerald-600 scale-125' : 'text-emerald-200'}`}>
            <span className="text-2xl drop-shadow-sm">{tab.i}</span>
            {activeTab === tab.id && !showPin && <span className="text-[10px] font-black uppercase tracking-widest">{tab.l}</span>}
          </button>
        ))}
      </nav>

      {/* PROFESSIONAL PIN GATE */}
      {showPin && (
        <div className="fixed inset-0 bg-emerald-950/20 backdrop-blur-3xl z-[100] flex items-end">
          <div className="bg-white w-full rounded-t-[50px] p-10 pb-16 animate-in slide-in-from-bottom duration-500 shadow-2xl">
            <div className="w-16 h-1.5 bg-emerald-50 rounded-full mx-auto mb-10" />
            <h2 className="text-3xl font-black text-center text-emerald-900 mb-2">Ota-onalar Nazorati</h2>
            <p className="text-center text-emerald-400 text-sm mb-12">Davom etish uchun PIN kodni kiriting</p>
            <div className="flex justify-center gap-6 mb-16">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className={`w-5 h-5 rounded-full border-4 transition-all duration-300 ${pin.length > i ? 'bg-emerald-500 border-emerald-100 scale-125 shadow-lg shadow-emerald-200' : 'border-emerald-50'}`} />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-y-8 gap-x-12 max-w-xs mx-auto">
              {['1','2','3','4','5','6','7','8','9','⌫','0','✓'].map(n => (
                <button key={n} onClick={() => {
                  if (n === '⌫') setPin(pin.slice(0,-1));
                  else if (pin.length < 4 && n !== '✓') {
                    const next = pin + n;
                    setPin(next);
                    if (next === '1234') { setActiveTab('parents'); setShowPin(false); setPin(''); }
                  }
                }} className="h-16 w-16 text-3xl font-black text-emerald-900 active:bg-emerald-50 rounded-full transition-all">{n}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
