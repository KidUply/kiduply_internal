"use client";
import React, { useState, useEffect } from 'react';

export default function KidUplyAdventure() {
  const [activeTab, setActiveTab] = useState('map');
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [coins, setCoins] = useState(100);
  const [mounted, setMounted] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState('');

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  // Xarita bosqichlari (Levels)
  const levels = [
    { id: 1, n: 'Matematika vodiysi', q: '2 + 3 nechchi bo’ladi?', a: ['4', '5', '6'], r: '5', i: '🔢', img: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a67d28?w=800&q=80' },
    { id: 2, n: 'Yovvoyi jungli', q: 'Bu yo’lbars qaysi turga kiradi?', a: ['Yirtqich', 'Uy hayvoni'], r: 'Yirtqich', i: '🐯', img: 'https://images.unsplash.com/photo-1555273511-700192cc5e03?w=800&q=80' },
    { id: 3, n: 'Koinot bekati', q: 'Biz qaysi sayyorada yashaymiz?', a: ['Mars', 'Yer', 'Venera'], r: 'Yer', i: '🌍', img: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bac4?w=800&q=80' },
    { id: 4, n: 'Mantiq oroli', q: 'Qaysi shaklda burchaklar yo’q?', a: ['Kvadrat', 'Doira', 'Uchburchak'], r: 'Doira', i: '🧠', img: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&q=80' },
  ];

  const handleAnswer = (ans: string, right: string) => {
    if (ans === right) {
      setCoins(prev => prev + 20);
      alert("Barakalla! +20 tanga 🪙");
    } else {
      alert("O’ylab ko’r, senga ishonaman! ❌");
    }
    setSelectedLevel(null);
  };

  const currentLevelData = levels.find(l => l.id === selectedLevel);

  return (
    <main className="min-h-screen bg-[#E0F2F1] pb-32 font-sans text-slate-800">
      
      {/* TOP BAR */}
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center border-b border-emerald-100">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-xl shadow-lg shadow-emerald-200">🦄</div>
          <h1 className="text-xl font-black text-emerald-700">KidUply</h1>
        </div>
        <div className="bg-amber-100 px-4 py-1.5 rounded-full border border-amber-200 flex items-center gap-2">
          <span className="text-lg">🪙</span>
          <span className="font-black text-amber-700">{coins}</span>
        </div>
      </div>

      <div className="pt-24 px-6 max-w-md mx-auto">
        
        {/* MAP VIEW */}
        {activeTab === 'map' && !selectedLevel && (
          <div className="relative flex flex-col items-center gap-12 pb-20">
            {/* SVG Yo'lakcha (Path) */}
            <div className="absolute top-10 w-2 h-full bg-emerald-200/50 rounded-full -z-10" />
            
            {[...levels].reverse().map((lvl, index) => (
              <button 
                key={lvl.id}
                onClick={() => setSelectedLevel(lvl.id)}
                className={`group relative w-24 h-24 rounded-full border-8 border-white shadow-xl flex items-center justify-center text-3xl transition-all active:scale-90
                ${index % 2 === 0 ? 'translate-x-12' : '-translate-x-12'}
                ${lvl.id <= 2 ? 'bg-emerald-400' : 'bg-blue-400'}`}
              >
                {lvl.i}
                <div className="absolute -bottom-10 bg-white px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                  <span className="text-[10px] font-black uppercase text-gray-500">{lvl.n}</span>
                </div>
                {lvl.id === 2 && <span className="absolute -top-4 -right-4 text-2xl animate-bounce">🎁</span>}
              </button>
            ))}
            
            <div className="mt-10 bg-white/50 p-6 rounded-[30px] text-center border-2 border-dashed border-emerald-300">
              <p className="text-sm font-bold text-emerald-600">Sarguzashtni boshlash uchun bosing!</p>
            </div>
          </div>
        )}

        {/* GAME SCREEN */}
        {selectedLevel && currentLevelData && (
          <div className="fixed inset-0 bg-white z-[100] p-6 animate-in zoom-in duration-300 flex flex-col items-center overflow-y-auto">
             <button onClick={() => setSelectedLevel(null)} className="self-start w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl mb-6">✕</button>
             
             <div className="w-full max-w-sm space-y-8 text-center">
                <div className="relative h-64 rounded-[40px] overflow-hidden shadow-2xl border-4 border-emerald-50">
                   <img src={currentLevelData.img} className="w-full h-full object-cover" alt="Level" />
                </div>
                
                <div className="flex justify-center gap-3">
                   <div className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-xs font-black uppercase">Bosqich {currentLevelData.id}</div>
                </div>

                <h2 className="text-2xl font-black text-slate-800 leading-tight">{currentLevelData.q}</h2>

                <div className="space-y-4">
                  {currentLevelData.a.map((ans) => (
                    <button 
                      key={ans} 
                      onClick={() => handleAnswer(ans, currentLevelData.r)}
                      className="w-full py-5 bg-slate-50 border-2 border-slate-100 rounded-[25px] font-black text-lg text-slate-700 active:bg-emerald-500 active:text-white active:border-emerald-400 transition-all shadow-sm">
                      {ans}
                    </button>
                  ))}
                </div>
             </div>
          </div>
        )}

        {/* SHOP / PARENTS */}
        {activeTab === 'shop' && (
          <div className="space-y-6 animate-in fade-in">
             <div className="bg-white p-8 rounded-[40px] shadow-sm text-center">
                <div className="text-6xl mb-4">🦄</div>
                <h2 className="text-xl font-black">Unicorn Do’koni</h2>
                <p className="text-gray-400 text-sm mt-2">Tez kunda: Tangalaringizga yangi qahramonlar sotib oling!</p>
             </div>
          </div>
        )}
      </div>

      {/* BOTTOM NAV */}
      <nav className="fixed bottom-8 left-6 right-6 h-20 bg-white/90 backdrop-blur-2xl rounded-[35px] border border-white shadow-2xl flex justify-around items-center z-50">
        <button onClick={() => setActiveTab('map')} className={`flex flex-col items-center gap-1 ${activeTab === 'map' ? 'text-emerald-500 scale-110' : 'text-gray-300'} transition-all`}>
          <span className="text-2xl">🗺️</span>
          <span className="text-[9px] font-black uppercase">Xarita</span>
        </button>
        <button onClick={() => setActiveTab('shop')} className={`flex flex-col items-center gap-1 ${activeTab === 'shop' ? 'text-emerald-500 scale-110' : 'text-gray-300'} transition-all`}>
          <span className="text-2xl">🛍️</span>
          <span className="text-[9px] font-black uppercase">Do’kon</span>
        </button>
        <button onClick={() => { setShowPin(true); }} className={`flex flex-col items-center gap-1 text-gray-300 transition-all`}>
          <span className="text-2xl">🔒</span>
          <span className="text-[9px] font-black uppercase">Ota-ona</span>
        </button>
      </nav>

      {/* PARENT PIN MODAL */}
      {showPin && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-[200] flex items-end">
          <div className="bg-white w-full rounded-t-[50px] p-12 pb-20 animate-in slide-in-from-bottom duration-500">
            <h2 className="text-xl font-black text-center mb-10 text-gray-800">Parol: 1234</h2>
            <div className="grid grid-cols-3 gap-6 max-w-xs mx-auto">
              {['1','2','3','4','5','6','7','8','9','⌫','0','✓'].map(n => (
                <button key={n} onClick={() => {
                  if(n === '⌫') setPin(pin.slice(0, -1));
                  else if(pin.length < 4) {
                    const newPin = pin + n;
                    setPin(newPin);
                    if(newPin === '1234') { alert("Ota-ona bo’limi ochildi!"); setShowPin(false); setPin(''); }
                  }
                }} className="h-16 w-16 text-2xl font-light rounded-full border border-gray-100 flex items-center justify-center active:bg-emerald-50">{n}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
