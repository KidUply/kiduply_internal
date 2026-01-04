"use client";
import React, { useState } from 'react';

export default function HomePage() {
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState('');

  const handleParentsClick = () => setShowPin(true);
  
  const checkPin = (value: string) => {
    if (value === '1234') {
      alert("Ota-onalar bo'limiga xush kelibsiz!");
      setShowPin(false);
      setPin('');
    } else if (value.length === 4) {
      alert("Xato PIN-kod!");
      setPin('');
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-28 font-sans text-slate-800 relative">
      
      {/* 1. Header */}
      <section className="p-5">
        <div className="rounded-[32px] bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] p-7 shadow-sm border border-[#A5D6A7]/40">
          <div className="flex justify-between items-center text-[#2E7D32]">
            <div>
              <h1 className="text-2xl font-bold">Salom, Do'stim! 👋</h1>
              <p className="text-sm font-medium mt-1">Bugun nima o'rganamiz?</p>
            </div>
            <div className="bg-white/80 px-4 py-2 rounded-2xl shadow-sm">
              <p className="text-xs font-bold">Lvl 5 • 1250 XP</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Progress */}
      <section className="px-5 mt-2">
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100">
          <h3 className="text-xs font-bold text-slate-400 uppercase mb-6">Haftalik progress</h3>
          <div className="h-32 flex items-end justify-around gap-3">
            {[30, 50, 40, 80, 60, 45, 70].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div style={{ height: `${h}%` }} className="w-3 bg-[#A5D6A7] rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Kategoriyalar */}
      <section className="mt-8 px-5">
        <h3 className="text-lg font-bold text-slate-700 mb-4">Kategoriyalar</h3>
        <div className="grid grid-cols-2 gap-4">
          {['Matematika', 'O\'zbek tili', 'Tarix', 'Mantiq'].map((cat) => (
            <div key={cat} className="bg-white p-4 rounded-[24px] shadow-sm flex flex-col gap-3">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl">📚</div>
              <span className="text-[13px] font-bold text-slate-600">{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PIN-KOD OYNASI (MODAL) */}
      {showPin && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
          <div className="bg-white rounded-[32px] p-8 w-full max-w-sm text-center shadow-2xl">
            <h3 className="text-xl font-bold mb-2">Ota-onalar nazorati</h3>
            <p className="text-sm text-slate-500 mb-6">Faqat kattalar kirmasligi uchun PIN-kodni kiriting</p>
            <input 
              type="password" 
              maxLength={4}
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
                checkPin(e.target.value);
              }}
              className="w-full text-center text-3xl tracking-[1.5rem] border-b-2 border-[#4CAF50] outline-none mb-6"
              autoFocus
            />
            <button onClick={() => setShowPin(false)} className="text-slate-400 text-sm font-bold">BEKOR QILISH</button>
          </div>
        </div>
      )}

      {/* 5. Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-100 px-8 py-4 flex justify-between items-center z-50 rounded-t-[30px] shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
        <div className="flex flex-col items-center gap-1 text-[#4CAF50]">
          <span className="text-2xl">📖</span>
          <span className="text-[11px] font-bold">Learn</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400">
          <span className="text-2xl">🎮</span>
          <span className="text-[11px] font-bold">Play</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400">
          <span className="text-2xl">👥</span>
          <span className="text-[11px] font-bold">Connect</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400">
          <span className="text-2xl">🎥</span>
          <span className="text-[11px] font-bold">Video</span>
        </div>
        <div onClick={handleParentsClick} className="flex flex-col items-center gap-1 text-slate-400 cursor-pointer">
          <span className="text-2xl">🔒</span>
          <span className="text-[11px] font-bold">Parents</span>
        </div>
      </nav>

    </main>
  );
}
