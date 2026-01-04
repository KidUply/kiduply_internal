"use client";
import React, { useState } from 'react';

export default function KidUplyPro() {
  const [activeTab, setActiveTab] = useState('learn');
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState('');

  return (
    // safe-area-inset orqali kameradan uyoqqa o'tmaydigan qilinadi
    <main className="min-h-screen bg-[#F8FBF8] pb-32 pt-[env(safe-area-inset-top)] font-sans text-slate-800">
      
      {/* 1. STICKY PROFESSIONAL HEADER */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-40 px-6 py-4 flex justify-between items-center border-b border-emerald-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200">
            <span className="text-white text-xl">📖</span>
          </div>
          <h1 className="text-2xl font-black text-emerald-900 tracking-tight italic">KidUply</h1>
        </div>
        <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
          <span className="text-emerald-600 font-bold text-xs">LVL 5</span>
          <div className="w-px h-3 bg-emerald-200" />
          <span className="text-emerald-700 font-black text-xs">1250 XP</span>
        </div>
      </header>

      <div className="p-5 max-w-md mx-auto">
        
        {/* --- LEARN: Interest Grid & Pro Progress --- */}
        {activeTab === 'learn' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-white rounded-[32px] p-6 shadow-sm border border-emerald-50">
              <h2 className="text-lg font-bold text-slate-800 mb-4">Nimalarni o'rganamiz?</h2>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { n: 'Animals', i: '🦁', c: 'bg-orange-50' },
                  { n: 'Space', i: '🚀', c: 'bg-blue-50' },
                  { n: 'Math', i: '🔢', c: 'bg-emerald-50' },
                  { n: 'Art', i: '🎨', c: 'bg-purple-50' },
                  { n: 'Logic', i: '🧠', c: 'bg-pink-50' },
                  { n: 'Code', i: '🤖', c: 'bg-slate-100' }
                ].map(item => (
                  <button key={item.n} className="flex flex-col items-center gap-2 p-3 rounded-2xl active:scale-90 transition-all bg-white border border-slate-50 shadow-sm">
                    <div className={`w-12 h-12 ${item.c} rounded-xl flex items-center justify-center text-2xl shadow-inner`}>{item.i}</div>
                    <span className="text-[10px] font-bold text-slate-600">{item.n}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- PLAY: Game Cards --- */}
        {activeTab === 'play' && (
          <div className="space-y-4 animate-in slide-in-from-right duration-500">
             <div className="relative overflow-hidden bg-gradient-to-br from-emerald-400 to-teal-600 rounded-[32px] p-6 text-white shadow-xl">
                <div className="relative z-10">
                  <span className="bg-white/20 text-[10px] font-bold px-2 py-1 rounded-md uppercase">New Game</span>
                  <h3 className="text-2xl font-black mt-2">Animal Quiz</h3>
                  <p className="text-xs opacity-80 mt-1">Hozirgi mavzuga mos o'yin</p>
                  <button className="mt-6 bg-white text-emerald-600 px-6 py-2.5 rounded-xl font-black text-sm shadow-lg">PLAY NOW</button>
                </div>
                <div className="absolute -right-4 -bottom-4 text-8xl opacity-20 rotate-12">🦁</div>
             </div>
          </div>
        )}

        {/* --- CONNECT: Global Leaderboard --- */}
        {activeTab === 'connect' && (
          <div className="space-y-4 animate-in fade-in">
            <h3 className="text-lg font-bold px-1 text-slate-800">Top O'quvchilar 🏆</h3>
            <div className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm">
              {[
                { r: 1, n: 'Alijon', x: '2450 XP', i: '🥇' },
                { r: 2, n: 'Zahro', x: '2100 XP', i: '🥈' },
                { r: 3, n: 'Temur', x: '1980 XP', i: '🥉' }
              ].map(user => (
                <div key={user.r} className="flex items-center justify-between p-4 border-b border-slate-50 last:border-0 hover:bg-emerald-50/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="w-6 text-sm font-black text-slate-400">#{user.r}</span>
                    <div className="w-10 h-10 bg-slate-100 rounded-full border-2 border-white shadow-sm" />
                    <span className="text-sm font-bold text-slate-700">{user.n}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-emerald-600">{user.x}</span>
                    <span>{user.i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- PARENTS: Full Analytics & Charts --- */}
        {activeTab === 'parents' && (
          <div className="space-y-5 animate-in slide-in-from-bottom-8">
            <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Haftalik Faollik</h3>
              {/* Professional Grafik Simulyatsiyasi */}
              <div className="h-40 flex items-end justify-between gap-2 px-2">
                {[60, 40, 90, 70, 100, 50, 80].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="hidden group-hover:block absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded">{h}%</div>
                    <div style={{ height: `${h}%` }} className={`w-full max-w-[12px] rounded-t-full transition-all duration-500 ${h > 80 ? 'bg-emerald-500' : 'bg-emerald-200'}`} />
                    <span className="text-[9px] font-bold text-slate-400">D{i+1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Qiziqishlar Grafikasi</h3>
              <div className="space-y-4">
                {[
                  { n: 'Matematika', p: 85, c: 'bg-blue-400' },
                  { n: 'Mantiq', p: 60, c: 'bg-emerald-400' },
                  { n: 'Tillar', p: 40, c: 'bg-orange-400' }
                ].map(stat => (
                  <div key={stat.n} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-600">{stat.n}</span>
                      <span className="text-slate-400">{stat.p}%</span>
                    </div>
                    <div className="w-full bg-slate-50 h-2 rounded-full overflow-hidden">
                      <div style={{ width: `${stat.p}%` }} className={`${stat.c} h-full rounded-full transition-all duration-1000`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* --- PROFESSIONAL PIN MODAL --- */}
      {showPin && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xl z-[100] flex items-end">
          <div className="bg-white w-full rounded-t-[40px] p-8 pb-12 animate-in slide-in-from-bottom duration-300">
             <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-8" />
             <h2 className="text-xl font-black text-center text-slate-800 mb-2">PIN Kodni Kiriting</h2>
             <p className="text-sm text-slate-500 text-center mb-10">Ota-onalar bo'limiga faqat kattalar kira oladi</p>
             
             <div className="flex justify-center gap-4 mb-12">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className={`w-4 h-4 rounded-full border-2 transition-all ${pin.length > i ? 'bg-emerald-500 border-emerald-500 scale-125' : 'border-slate-200'}`} />
                ))}
             </div>

             <div className="grid grid-cols-3 gap-y-6 gap-x-12 max-w-xs mx-auto">
               {['1','2','3','4','5','6','7','8','9','','0','⌫'].map(n => (
                 <button key={n} onClick={() => n === '⌫' ? setPin(pin.slice(0,-1)) : n && pin.length < 4 && (setPin(pin+n), pin+n === '1234' && (setActiveTab('parents'), setShowPin(false), setPin('')))} 
                   className="h-16 w-16 text-2xl font-black text-slate-700 active:bg-emerald-50 rounded-full transition-colors">
                   {n}
                 </button>
               ))}
             </div>
             <button onClick={() => setShowPin(false)} className="w-full mt-10 text-slate-400 font-bold text-xs uppercase tracking-widest">Bekor qilish</button>
          </div>
        </div>
      )}

      {/* --- FIXED NAVIGATION BAR --- */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-emerald-50 px-8 py-5 flex justify-between items-center z-50 rounded-t-[32px] shadow-[0_-20px_40px_rgba(0,0,0,0.03)]">
        {[
          { id: 'learn', i: '📖', l: 'Learn' },
          { id: 'play', i: '🎮', l: 'Play' },
          { id: 'connect', i: '👥', l: 'Connect' },
          { id: 'parents', i: '🔒', l: 'Parents', pin: true }
        ].map(tab => (
          <button key={tab.id} onClick={() => tab.pin ? setShowPin(true) : setActiveTab(tab.id)} 
            className={`flex flex-col items-center gap-1.5 transition-all ${activeTab === tab.id && !showPin ? 'text-emerald-600 scale-110' : 'text-slate-300'}`}>
            <span className="text-2xl">{tab.i}</span>
            <span className="text-[10px] font-black uppercase tracking-widest">{tab.l}</span>
          </button>
        ))}
      </nav>
    </main>
  );
}
