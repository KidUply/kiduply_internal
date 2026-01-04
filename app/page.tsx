import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] p-4 font-sans text-slate-800">
      
      {/* 1. Ixcham va Yumshoq Header */}
      <section className="rounded-3xl bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] p-5 shadow-sm border border-[#A5D6A7]/30">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-extrabold text-[#2E7D32] tracking-tight">
              Salom, Do'stim! 👋
            </h1>
            <p className="text-xs font-medium text-[#4CAF50] mt-0.5">
              Bugun nima o'rganamiz?
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-2xl shadow-sm border border-white">
            <p className="text-[10px] font-bold text-[#388E3C] uppercase tracking-wider">
              Lvl 5 • 1250 XP
            </p>
          </div>
        </div>
      </section>

      {/* 2. Haftalik Progress - Kichikroq va Silliq */}
      <section className="mt-6 bg-white rounded-3xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            Haftalik progress
          </h3>
          <span className="text-[10px] text-blue-500 font-bold bg-blue-50 px-2 py-0.5 rounded-full">
            +12% o'sish
          </span>
        </div>
        <div className="h-24 flex items-end justify-around gap-2 px-1">
          {[30, 50, 40, 80, 60, 45, 70].map((height, i) => (
            <div key={i} className="group relative flex-1 flex flex-col items-center">
              <div 
                style={{ height: `${height}%` }} 
                className="w-full max-w-[12px] bg-gradient-to-t from-[#A5D6A7] to-[#81C784] rounded-full transition-all duration-500 hover:scale-110 shadow-sm"
              ></div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Kategoriyalar - 2 talik Grid (Joyni tejaydi) */}
      <section className="mt-6">
        <h3 className="text-sm font-bold text-slate-700 mb-3 ml-1">Kategoriyalar</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: 'Matematika', color: '#E3F2FD', icon: '🔢', text: '#1E88E5' },
            { name: 'O\'zbek tili', color: '#FFF3E0', icon: '🇺🇿', text: '#FB8C00' },
            { name: 'Tarix', color: '#F3E5F5', icon: '🏛️', text: '#8E24AA' },
            { name: 'Mantiq', color: '#E8F5E9', icon: '🧠', text: '#43A047' }
          ].map((cat) => (
            <div key={cat.name} className="bg-white p-3 rounded-2xl border border-slate-50 shadow-sm flex items-center gap-3 active:scale-95 transition-transform">
              <div style={{ backgroundColor: cat.color }} className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-inner">
                {cat.icon}
              </div>
              <span className="text-[11px] font-bold text-slate-600 leading-tight">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Do'stlar Ro'yxati - Ixcham va Chiziqdan chiqmaydi */}
      <section className="mt-6 mb-10">
        <h3 className="text-sm font-bold text-slate-700 mb-3 ml-1">O'quvchi do'stlar</h3>
        <div className="space-y-2">
          {['Sarah Johnson', 'Michael Chen'].map((friend) => (
            <div key={friend} className="bg-white p-3 rounded-2xl border border-slate-50 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 bg-slate-100 rounded-full border-2 border-white shadow-sm shrink-0"></div>
                <div className="min-w-0">
                  <h4 className="text-[11px] font-bold text-slate-700 truncate">{friend}</h4>
                  <p className="text-[9px] text-[#4CAF50] font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full animate-pulse"></span> Online
                  </p>
                </div>
              </div>
              <div className="flex gap-1.5 shrink-0">
                <button className="px-3 py-1.5 bg-[#E8F5E9] text-[#2E7D32] text-[9px] font-extrabold rounded-xl hover:bg-[#C8E6C9] transition-colors shadow-sm uppercase">
                  Sms
                </button>
                <button className="px-3 py-1.5 bg-slate-50 text-slate-400 text-[9px] font-extrabold rounded-xl hover:bg-slate-100 transition-colors uppercase">
                  Profil
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
