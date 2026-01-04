"use client";
import React, { useState, useEffect } from 'react';

export default function KidUplyUnicorn() {
  const [activeTab, setActiveTab] = useState('learn');
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handlePin = (val: string) => {
    if (val === '⌫') {
      setPin(prev => prev.slice(0, -1));
      return;
    }
    if (pin.length < 4) {
      const newPin = pin + val;
      setPin(newPin);
      if (newPin === '1234') {
        setActiveTab('parents');
        setShowPin(false);
        setPin('');
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FBF8] pb-32 pt-[env(safe-area-inset-top)] font-sans text-emerald-950">
      
      {/* GLOSSY HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-emerald-100/50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200">
            <span className="text-white text-2xl font-bold">📖</span>
          </div>
          <h1 className="text-2xl font-black text-emerald-900 tracking-tighter">KidUply</h1>
        </div>
        <div className="bg-emerald-50 px-4 py-2 rounded-2xl border border-emerald-100">
          <span className="text-xs font-black text-emerald-700 uppercase tracking-widest">Lvl 5 • 1250 XP</span>
        </div>
      </header>

      <div className="p-6 max-w-lg mx-auto space-y-8">
        
        {/* LEARN: INTERACTIVE DASHBOARD */}
        {activeTab === 'learn' && (
          <div className="space-y-6 animate-in fade-in duration-700">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[40px] p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-black leading-tight">Salom, Do'stim! 👋</h2>
                <p className="mt-2 opacity-90 font-medium">Bugun sarguzashtni davom ettiramiz!</p>
                <div className="mt-8">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2 opacity-80">
                    <span>Haftalik Progress</span>
                    <span>+12% o'sish</span>
                  </div>
                  <div className="w-full bg-white/20 h-4 rounded-full p-1">
                    <div className="bg-white h-full rounded-full w-[65%] shadow-md" />
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 text-9xl opacity-10 rotate-12">🚀</div>
            </div>

            <h3 className="text-lg font-black text-emerald-900 px-2">Kategoriyalar</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: 'Matematika', i: '🔢', c: 'bg-blue-50' },
                { n: "O'zbek tili", i: '🇺🇿', c: 'bg-emerald-50' },
                { n: 'Tarix', i: '🏛️', c: 'bg-purple-50' },
                { n: 'Mantiq', i: '🧠', c: 'bg-pink-50' }
              ].map((cat) => (
                <div key={cat.n} className="bg-white p-6 rounded-[32px] border border-emerald-50 shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-3">
                  <div className={`w-14 h-14 ${cat.c} rounded-2xl flex items-center justify-center text-3xl shadow-inner`}>{cat.i}</div>
                  <span className="font-bold text-emerald-900 text-sm">{cat.n}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PARENTS: UNICORN ANALYTICS */}
        {activeTab === 'parents' && (
          <div className="space-y-6 animate-in slide-in-from-bottom duration-500">
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-emerald-50">
              <h3 className="text-xs font-black text-emerald-300 uppercase tracking-[0.2em] mb-8 text-center">Bolaning Faollik Grafigi</h3>
              <div className="h-48 flex items-end justify-between gap-3 px-2">
                {[45, 80, 55, 100, 65, 40, 90].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                    <div style={{ height: `${h}%` }} className={`w-full rounded-2xl transition-all duration-700 ${h > 75 ? 'bg-emerald-500 shadow-lg shadow-emerald-100' : 'bg-emerald-100'}`} />
                    <span className="text-[9px] font-black text-emerald-300 tracking-tighter">Kun {i+1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* LUXURY NAVBAR */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-2xl px-8 py-6 flex justify-between items-center z-50 rounded-t-[45px] shadow-[0_-20px_60px_rgba(0,0,0,0.05)] border-t border-emerald-50">
        {[
          { id: 'learn', i: '📖', l: 'Learn' },
          { id: 'play', i: '🎮', l: 'Play' },
          { id: 'connect', i: '👥', l: 'Connect' },
          { id: 'parents', i: '🔒', l: 'Parents', pin: true }
        ].map(tab => (
          <button key={tab.id} onClick={() => tab.pin ? setShowPin(true) : setActiveTab(tab.id)} 
            className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${activeTab === tab.id && !showPin ? 'text-emerald-600 scale-125' : 'text-emerald-300'}`}>
            <span className="text-2xl">{tab.i}</span>
            {activeTab === tab.id && !showPin && <span className="text-[10px] font-black uppercase tracking-widest">{tab.l}</span>}
          </button>
        ))}
      </nav>

      {/* PARENT GATE MODAL */}
      {showPin && (
        <div className="fixed inset-0 bg-emerald-950/20 backdrop-blur-3xl z-[100] flex items-end">
          <div className="bg-white w-full rounded-t-[50px] p-10 pb-16 animate-in slide-in-from-bottom duration-500">
            <div className="w-16 h-1.5 bg-emerald-50 rounded-full mx-auto mb-10" />
            <h2 className="text-3xl font-black text-center text-emerald-900 mb-12">Parent Gate</h2>
            <div className="flex justify-center gap-6 mb-16">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className={`w-5 h-5 rounded-full border-4 ${pin.length > i ? 'bg-emerald-500 border-emerald-100 scale-125 shadow-lg shadow-emerald-200' : 'border-emerald-50'}`} />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-y-8 gap-x-12 max-w-xs mx-auto text-center">
              {['1','2','3','4','5','6','7','8','9','⌫','0','✓'].map(n => (
                <button key={n} onClick={() => handlePin(n)} className="h-16 w-16 text-3xl font-black text-emerald-900 active:bg-emerald-50 rounded-full">{n}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
