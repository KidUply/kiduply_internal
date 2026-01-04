"use client";
import React, { useState } from 'react';

export default function KidUplyApp() {
  const [activeTab, setActiveTab] = useState('learn');
  const [showPin, setShowPin] = useState(false);
  const [interestSelected, setInterestSelected] = useState(false);
  const [pin, setPin] = useState('');

  // PIN-kod tekshirish (1234)
  const handlePinInput = (val: string) => {
    if (val === 'X') { setPin(''); return; }
    const newPin = pin + val;
    if (newPin.length <= 4) {
      setPin(newPin);
      if (newPin === '1234') {
        setActiveTab('parents');
        setShowPin(false);
        setPin('');
      } else if (newPin.length === 4) {
        alert("Xato PIN!");
        setPin('');
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#F0F9F0] pb-32 font-sans text-slate-800">
      
      {/* 1. KIDUPLY HEADER */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 p-5 flex items-center gap-3 border-b border-[#E8F5E9]">
        <div className="w-10 h-10 bg-[#DCEDC8] rounded-xl flex items-center justify-center shadow-sm">
          <span className="text-xl">📖</span>
        </div>
        <h1 className="text-2xl font-black text-[#33691E] tracking-tight">KidUply</h1>
      </header>

      <div className="p-6">
        
        {/* --- LEARN BO'LIMI --- */}
        {activeTab === 'learn' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            {!interestSelected ? (
              <div className="bg-white rounded-[40px] p-8 shadow-sm border border-[#E8F5E9] text-center">
                <h2 className="text-2xl font-black text-[#33691E] mb-6">Nimalarga qiziqasan? 🌟</h2>
                <div className="grid grid-cols-2 gap-4">
                  {['Hayvonlar 🦁', 'Koinot 🚀', 'Raqamlar 🔢', 'Rasm chizish 🎨'].map(i => (
                    <button key={i} onClick={() => setInterestSelected(true)} className="p-5 bg-[#F1F8E9] rounded-[24px] font-bold text-[#558B2F] active:scale-95 transition-all shadow-sm">
                      {i}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-[32px] shadow-sm border border-[#E8F5E9]">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Bugungi progress</p>
                  <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#81C784] to-[#4CAF50] h-full w-[45%]" />
                  </div>
                </div>
                <div className="bg-[#DCEDC8] p-10 rounded-[40px] text-center shadow-inner relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-3xl shadow-md">▶️</div>
                    <h3 className="text-xl font-bold text-[#33691E]">Video darslik</h3>
                    <p className="text-sm text-[#689F38] mt-2">Ko'r va oxirida vazifani bajar!</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* --- PLAY BO'LIMI --- */}
        {activeTab === 'play' && (
          <div className="space-y-4 animate-in fade-in">
            <div className="bg-[#A5D6A7] p-8 rounded-[40px] text-white shadow-lg">
              <h2 className="text-2xl font-black">Hayvonlarni top! 🦁</h2>
              <p className="opacity-90 mt-2">45 soniya ichida mosini toping</p>
              <div className="mt-6 flex gap-2">
                <span className="bg-white/20 px-4 py-2 rounded-full text-xs font-bold">⭐ 10 ball</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-[32px] border border-[#E8F5E9] flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-700">Kunlik sovga</h4>
                <p className="text-xs text-slate-400">Bugungi bonusni olmadingiz</p>
              </div>
              <button className="bg-[#81C784] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-sm">OLISH</button>
            </div>
          </div>
        )}

        {/* --- CONNECT BO'LIMI --- */}
        {activeTab === 'connect' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="bg-[#81C784] p-8 rounded-[40px] text-white text-center shadow-md">
              <div className="text-5xl mb-4">🤝</div>
              <h2 className="text-xl font-bold">Bugun 1,250 ta bola matematika o'rgandi!</h2>
            </div>
            <div className="flex justify-around bg-white p-6 rounded-[32px] shadow-sm">
              {['👍', '🔥', '🌟', '❤️'].map(s => (
                <button key={s} className="text-4xl active:scale-125 transition-transform">{s}</button>
              ))}
            </div>
          </div>
        )}

        {/* --- PARENTS BO'LIMI --- */}
        {activeTab === 'parents' && (
          <div className="space-y-4 animate-in slide-in-from-bottom-10">
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-slate-700 mb-6">Haftalik hisobot</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                  <span className="text-sm font-medium">Sarf langan vaqt</span>
                  <span className="font-bold text-[#388E3C]">45 min</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                  <span className="text-sm font-medium">Sevimli bo'lim</span>
                  <span className="font-bold text-[#388E3C]">Hayvonlar</span>
                </div>
              </div>
            </div>
            <div className="bg-[#E8F5E9] p-6 rounded-[32px] border-2 border-dashed border-[#81C784] text-center">
              <span className="text-[10px] font-black text-[#388E3C] uppercase tracking-[3px]">Premium</span>
              <p className="text-sm font-bold text-[#2E7D32] mt-2">Batafsil PDF hisobotni yuklab olish</p>
            </div>
          </div>
        )}
      </div>

      {/* --- PIN-KOD MODAL --- */}
      {showPin && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center p-8 animate-in fade-in">
          <h2 className="text-2xl font-black text-[#33691E] mb-2 text-center">Ota-onalar bo'limi</h2>
          <p className="text-[#81C784] mb-10 text-sm font-medium">Kodni kiriting: 1234</p>
          
          <div className="flex gap-4 mb-12">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className={`w-5 h-5 rounded-full border-2 transition-all ${pin.length > i ? 'bg-[#4CAF50] border-[#4CAF50] scale-110' : 'border-slate-200'}`} />
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '0', '✓'].map(n => (
              <button key={n} onClick={() => n !== '✓' && handlePinInput(n)} className="w-20 h-20 rounded-full bg-slate-50 text-2xl font-black text-[#33691E] active:bg-[#DCEDC8] transition-colors shadow-sm">
                {n}
              </button>
            ))}
          </div>
          <button onClick={() => {setShowPin(false); setPin('');}} className="mt-12 text-[#81C784] font-bold uppercase tracking-widest text-xs">Bekor qilish</button>
        </div>
      )}

      {/* --- NAVBAR --- */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-[#E8F5E9] px-6 py-5 flex justify-between items-center z-50 rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.04)]">
        <NavButton active={activeTab === 'learn'} icon="📖" label="Learn" onClick={() => setActiveTab('learn')} />
        <NavButton active={activeTab === 'play'} icon="🎮" label="Play" onClick={() => setActiveTab('play')} />
        <NavButton active={activeTab === 'connect'} icon="👥" label="Connect" onClick={() => setActiveTab('connect')} />
        <NavButton active={activeTab === 'parents'} icon="🔒" label="Parents" onClick={() => setShowPin(true)} />
      </nav>
    </main>
  );
}

function NavButton({ active, icon, label, onClick }: any) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center gap-1.5 transition-all ${active ? 'text-[#388E3C] scale-110' : 'text-[#A5D6A7]'}`}>
      <span className="text-2xl">{icon}</span>
      <span className="text-[10px] font-black uppercase tracking-wider">{label}</span>
      {active && <div className="w-1 h-1 bg-[#388E3C] rounded-full" />}
    </button>
  );
}
