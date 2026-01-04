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
      a: ['Yirtqich hayvon', 'O&apos;txo&apos;r hayvon', 'Suv hayvoni'], 
      r: 'Yirtqich hayvon',
      img: 'https://images.unsplash.com/photo-1555273511-700192cc5e03?w=800&q=80' // Sifatli Yo'lbars rasmi
    },
    { 
      id: 'space', 
      n: 'Koinot sirlari', 
      q: 'Biz qaysi sayyorada yashaymiz?', 
      a: ['Mars', 'Yer', 'Yupiter'], 
      r: 'Yer',
      img: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bac4?w=800&q=80' // Yer rasmi
    },
    { 
      id: 'logic', 
      n: 'Mantiqiy jumboq', 
      q: 'Qaysi shaklda burchaklar yo&apos;q?', 
      a: ['Kvadrat', 'Uchburchak', 'Doira'], 
      r: 'Doira',
      img: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&q=80' // Geometriya
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
    <main className="min-h-screen bg-[#F8F9FB] pb-36 pt-12 font-[-apple-system,system-ui] text-[#1D1D1F]">
      
      {/* iOS STYLE GLASS HEADER */}
      <header className="px-6 py-4 flex justify-between items-center sticky top-0 bg-white/70 backdrop-blur-2xl z-50 border-b border-gray-100/50">
        <div>
          <h1 className="text-3xl font-[900] tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">KidUply</h1>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Yangi avlod ta&apos;limi</p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[11px] font-black text-emerald-700 tracking-tight">LVL 5 • 1250 XP</span>
        </div>
      </header>

      <div className="p-5 max-w-lg mx-auto">
        
        {/* LEARN SECTION - SMART CATEGORIES */}
        {activeTab === 'learn' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500 to-blue-600 rounded-[35px] p-8 text-white shadow-2xl shadow-blue-200">
              <h2 className="text-2xl font-bold leading-tight">Bugun sening <br/>muvaffaqiyat kuning! 🚀</h2>
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-[11px] font-bold opacity-80">
                  <span>Haftalik maqsad</span>
                  <span>75%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-[75%] rounded-full shadow-lg" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {['Matematika', 'Mantiqiy fikrlash', 'O&apos;zbek alifbosi', 'Ingliz tili'].map((cat, i) => (
                <div key={i} className="group bg-white p-6 rounded-[28px] shadow-sm border border-gray-100 flex items-center justify-between active:scale-[0.98] transition-all hover:border-emerald-200">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl shadow-inner group-hover:bg-emerald-50">
                      {['🔢','🧠','🇺🇿','🔤'][i]}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{cat}</h4>
                      <p className="text-[11px] text-gray-400 font-medium">12 ta dars mavjud</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <span>›</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PLAY SECTION - FANTASY CARDS */}
        {activeTab === 'play' && !selectedGame && (
          <div className="space-y-8 animate-in slide-in-from-right-10 duration-500">
            <h2 className="text-3xl font-[900] px-2">Kashfiyotlar <br/><span className="text-blue-500">olami</span></h2>
            <div className="grid grid-cols-1 gap-8">
              {games.map((game) => (
                <button 
                  key={game.id} 
                  onClick={() => setSelectedGame(game.id)}
                  className="group relative h-72 w-full rounded-[45px] overflow-hidden shadow-2xl active:scale-[0.97] transition-all border-[6px] border-white"
                >
                  <img src={game.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={game.n} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                    <div>
                      <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Yangi sarguzasht</p>
                      <h3 className="text-white text-2xl font-black">{game.n}</h3>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* GAME PLAY SCREEN */}
        {selectedGame && currentGame && (
          <div className="fixed inset-0 bg-white z-[60] p-6 animate-in zoom-in duration-300 overflow-y-auto">
            <button onClick={() => setSelectedGame(null)} className="mb-8 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-light">
              ✕
            </button>
            <div className="max-w-md mx-auto space-y-10">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-gray-50 aspect-square">
                <img src={currentGame.img} className="w-full h-full object-cover" />
              </div>
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-black text-gray-900 leading-tight px-4">{currentGame.q}</h2>
              </div>
              <div className="space-y-4">
                {currentGame.a.map((ans) => (
                  <button 
                    key={ans} 
                    onClick={() => {
                      if(ans === currentGame.r) alert("To&apos;g&apos;ri! 🎉 Aqllisan!");
                      else alert("O&apos;ylab ko&apos;r, senga ishonaman! ❌");
                      setSelectedGame(null);
                    }}
                    className="w-full py-5 bg-[#F2F2F7] rounded-[24px] font-black text-lg text-gray-800 active:bg-emerald-500 active:text-white transition-all shadow-sm active:shadow-emerald-200">
                    {ans}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PARENTS (STATISTICS) - EXCELLENT GRAPHIC */}
        {activeTab === 'parents' && (
          <div className="space-y-6 animate-in fade-in duration-700">
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">Faollik grafigi</h3>
                <span className="text-emerald-500 text-xs font-bold">Haftalik</span>
              </div>
              <div className="h-56 flex items-end justify-between gap-4 px-2">
                {[40, 75, 55, 100, 65, 85, 45].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-4">
                    <div className="relative w-full group">
                      <div style={{ height: `${h}%` }} className="w-full bg-emerald-500 rounded-full shadow-lg shadow-emerald-100 transition-all duration-1000 ease-out group-hover:bg-emerald-600" />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-[8px] px-2 py-1 rounded">
                        {h}%
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-300 font-bold">Kun {i+1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* iOS TAB BAR - FLOATING DESIGN */}
      <nav className="fixed bottom-8 left-6 right-6 h-20 bg-white/80 backdrop-blur-3xl rounded-[35px] border border-white shadow-2xl shadow-gray-200 flex justify-between items-center px-8 z-50">
        {[
          { id: 'learn', i: '📖', l: 'Darslar' },
          { id: 'play', i: '🎮', l: 'O&apos;yinlar' },
          { id: 'parents', i: '🔒', l: 'Ota-ona' }
        ].map(tab => (
          <button 
            key={tab.id}
            onClick={() => tab.id === 'parents' ? setShowPin(true) : setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${activeTab === tab.id ? 'scale-110 text-emerald-600' : 'text-gray-300 grayscale opacity-70'}`}
          >
            <span className="text-2xl">{tab.i}</span>
            <span className="text-[9px] font-black uppercase tracking-tighter">{tab.l}</span>
          </button>
        ))}
      </nav>

      {/* PARENTAL PIN MODAL */}
      {showPin && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-[100] flex items-end">
          <div className="bg-white w-full rounded-t-[50px] p-12 pb-20 animate-in slide-in-from-bottom duration-500 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
            <div className="w-12 h-1.5 bg-gray-100 rounded-full mx-auto mb-10" />
            <h2 className="text-xl font-black text-center mb-10 text-gray-800">Parol: 1234</h2>
            <div className="grid grid-cols-3 gap-6 max-w-xs mx-auto">
              {['1','2','3','4','5','6','7','8','9','⌫','0','✓'].map(n => (
                <button 
                  key={n} 
                  onClick={() => handlePin(n)} 
                  className="h-16 w-16 text-3xl font-light text-gray-900 active:bg-gray-50 rounded-full border border-gray-50 flex items-center justify-center transition-colors"
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
