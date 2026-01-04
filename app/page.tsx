"use client";
import React, { useState, useEffect } from 'react';

export default function KidUply() {
  const [activeTab, setActiveTab] = useState('learn');
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const games = [
    { 
      id: 'animals', 
      n: 'Yovvoyi tabiat', 
      q: 'Rasmga qara! Bu hayvon qaysi guruhga kiradi?', 
      a: ['Yirtqich hayvon', 'O\'txo\'r hayvon', 'Uy hayvoni'], 
      r: 'Yirtqich hayvon',
      img: 'https://images.unsplash.com/photo-1555273511-700192cc5e03?w=800&q=80'
    },
    { 
      id: 'space', 
      n: 'Koinot sirlari', 
      q: 'Biz qaysi sayyorada yashaymiz?', 
      a: ['Mars', 'Yer', 'Yupiter'], 
      r: 'Yer',
      img: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bac4?w=800&q=80'
    }
  ];

  const handlePin = (val: string) => {
    if (val === '⌫') { setPin(prev => prev.slice(0, -1)); return; }
    if (pin.length < 4) {
      const newPin = pin + val;
      setPin(newPin);
      if (newPin === '1234') { setActiveTab('parents'); setShowPin(false); setPin(''); }
    }
  };

  const currentGame = games.find(g => g.id === selectedGame);

  return (
    <main className="min-h-screen bg-[#F8F9FB] pb-36 pt-12 font-sans text-[#1D1D1F]">
      
      {/* iOS Header */}
      <header className="px-6 py-4 flex justify-between items-center sticky top-0 bg-white/70 backdrop-blur-2xl z-50 border-b border-gray-100/50">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-emerald-600">KidUply</h1>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">O'zbekcha Talqin</p>
        </div>
        <div className="bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
          <span className="text-[11px] font-black text-emerald-700 tracking-tight">LVL 5 • 1250 XP</span>
        </div>
      </header>

      <div className="p-5 max-w-lg mx-auto">
        
        {/* Darslar (Learn) */}
        {activeTab === 'learn' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-5">
            <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-[30px] p-8 text-white shadow-xl shadow-blue-100">
              <h2 className="text-2xl font-bold leading-tight">Salom! Bugun nima <br/>o'rganamiz? 🚀</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {['Matematika', 'Mantiqiy fikrlash', 'O\'zbek alifbosi', 'Ingliz tili'].map((cat, i) => (
                <div key={i} className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{['🔢','🧠','🇺🇿','🔤'][i]}</div>
                    <h4 className="font-bold text-gray-800">{cat}</h4>
                  </div>
                  <span className="text-blue-500 text-xl">›</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* O'yinlar (Play) */}
        {activeTab === 'play' && !selectedGame && (
          <div className="space-y-6 animate-in slide-in-from-right">
            <h2 className="text-2xl font-black">Sarguzashtlar</h2>
            <div className="grid grid-cols-1 gap-6">
              {games.map((game) => (
                <button key={game.id} onClick={() => setSelectedGame(game.id)} className="relative h-60 w-full rounded-[40px] overflow-hidden shadow-lg border-4 border-white">
                  <img src={game.img} className="w-full h-full object-cover" alt={game.n} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 p-6 flex items-end">
                    <h3 className="text-white text-xl font-bold">{game.n}</h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Game Play Screen */}
        {selectedGame && currentGame && (
          <div className="fixed inset-0 bg-white z-[60] p-6 animate-in zoom-in overflow-y-auto">
            <button onClick={() => setSelectedGame(null)} className="mb-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">✕</button>
            <div className="max-w-md mx-auto space-y-8">
              <img src={currentGame.img} className="w-full h-72 object-cover rounded-[35px] shadow-xl" alt="Savol" />
              <h2 className="text-2xl font-black text-center">{currentGame.q}</h2>
              <div className="space-y-3">
                {currentGame.a.map((ans) => (
                  <button key={ans} onClick={() => {
                    alert(ans === currentGame.r ? "To'g'ri! 🎉" : "Xato! ❌");
                    setSelectedGame(null);
                  }} className="w-full py-5 bg-[#F2F2F7] rounded-[22px] font-bold text-lg active:bg-emerald-500 active:text-white transition-all">
                    {ans}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Parents (Graph) - BU YERDA XATO BO'LMAYDI */}
        {activeTab === 'parents' && (
          <div className="bg-white p-8 rounded-[35px] shadow-sm border border-gray-100">
            <h3 className="text-xs font-black text-gray-400 uppercase mb-8 tracking-widest">Faollik grafigi</h3>
            <div className="h-48 flex items-end justify-between gap-3">
              {[40, 75, 55, 95, 65, 85, 45].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-3">
                  <div style={{ height: `${h}%` }} className="w-full bg-emerald-500 rounded-full shadow-lg shadow-emerald-50" />
                  <span className="text-[10px] text-gray-300 font-bold">{i+1}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* iOS Tab Bar */}
      <nav className="fixed bottom-6 left-6 right-6 h-20 bg-white/80 backdrop-blur-3xl rounded-[30px] border border-white shadow-xl flex justify-between items-center px-10 z-50">
        {[
          { id: 'learn', i: '📖', l: 'Darslar' },
          { id: 'play', i: '🎮', l: 'O\'yinlar' },
          { id: 'parents', i: '🔒', l: 'Ota-ona' }
        ].map(tab => (
          <button key={tab.id} onClick={() => tab.id === 'parents' ? setShowPin(true) : setActiveTab(tab.id)} className={`flex flex-col items-center gap-1 ${activeTab === tab.id ? 'text-emerald-600 scale-110' : 'text-gray-300 opacity-70'} transition-all`}>
            <span className="text-2xl">{tab.i}</span>
            <span className="text-[9px] font-black uppercase tracking-tighter">{tab.l}</span>
          </button>
        ))}
      </nav>

      {/* Pin Modal */}
      {showPin && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-[100] flex items-end">
          <div className="bg-white w-full rounded-t-[40px] p-10 pb-20 animate-in slide-in-from-bottom">
            <h2 className="text-xl font-black text-center mb-10">Parol: 1234</h2>
            <div className="grid grid-cols-3 gap-6 max-w-xs mx-auto">
              {['1','2','3','4','5','6','7','8','9','⌫','0','✓'].map(n => (
                <button key={n} onClick={() => handlePin(n)} className="h-14 w-14 text-2xl font-light rounded-full border border-gray-50 flex items-center justify-center active:bg-gray-100">{n}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
