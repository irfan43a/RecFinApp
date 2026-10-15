import React from 'react';
import { Flame, Sparkles, Search, Shuffle, ShieldAlert, ChefHat, Timer } from 'lucide-react';

export default function Hero({ 
  searchQuery, 
  setSearchQuery, 
  onRandomRecipe,
  onOpenGuide
}) {
  const quickSearches = [
    "Wagyu Flambé", "Ayam Taliwang", "Salmon Aburi", 
    "Buldak Pedas", "Wok Hei", "Sate Maranggi", "Creme Brûlée"
  ];

  return (
    <div className="relative overflow-hidden pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-orange-950/40">
      {/* Ambient Radial Flame Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-red-600/20 via-orange-500/20 to-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500/20 via-red-500/20 to-amber-500/20 border border-orange-500/40 text-orange-300 text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-orange-500/10">
          <Flame className="w-4 h-4 text-orange-400 animate-bounce" />
          <span>Sensasi Kuliner Berapi: Wok-Hei, Flambé, Grill Arang & Torched</span>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight sm:leading-tight">
          Masakan Paling Memikat dengan <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 drop-shadow-sm">
            Sentuhan Lidah Api & Aroma Asap
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Temukan resep makanan istimewa dari dapur profesional hingga tradisional nusantara. Lengkap dengan panduan tingkat api, timer masak, dan efek desisan wajan nyata!
        </p>

        {/* Search Input Box */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative flex items-center shadow-2xl rounded-2xl bg-[#14151f] border-2 border-orange-500/40 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-500/20 transition-all p-1.5">
            <div className="pl-3.5 pr-2 text-orange-400">
              <Search className="w-6 h-6" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari resep, bahan (cth: wagyu, ayam, salmon, cabai)..."
              className="w-full bg-transparent border-0 text-white placeholder-gray-400 text-sm sm:text-base focus:ring-0 focus:outline-none py-2.5 pr-3"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-gray-400 hover:text-white px-2 py-1"
              >
                Reset
              </button>
            )}
            <button
              onClick={onRandomRecipe}
              title="Pilih Resep Acak Membara"
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all shrink-0 hover:scale-[1.02]"
            >
              <Shuffle className="w-4 h-4" />
              <span className="hidden sm:inline">Pilih Acak</span>
            </button>
          </div>

          {/* Quick Search Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
            <span className="text-gray-400 font-medium">Tren Pencarian:</span>
            {quickSearches.map((item) => (
              <button
                key={item}
                onClick={() => setSearchQuery(item)}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-orange-500/20 hover:border-orange-500/40 border border-white/10 text-gray-300 hover:text-orange-200 transition-all"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Highlights Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mt-10">
          <div className="p-3.5 rounded-xl bg-charcoal-900/60 border border-orange-900/30 flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Tingkat Api</p>
              <p className="text-sm font-bold text-white">5 Level Panas</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-charcoal-900/60 border border-orange-900/30 flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Timer className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Cooking Mode</p>
              <p className="text-sm font-bold text-white">Timer Otomatis</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-charcoal-900/60 border border-orange-900/30 flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
              <ChefHat className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Porsi Dinamis</p>
              <p className="text-sm font-bold text-white">Hitung Bahan</p>
            </div>
          </div>

          <div 
            onClick={onOpenGuide}
            className="p-3.5 rounded-xl bg-charcoal-900/60 border border-orange-900/30 flex items-center gap-3 text-left cursor-pointer hover:border-orange-500/50 transition-all group"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Keamanan</p>
              <p className="text-sm font-bold text-emerald-300">Tips Api Dapur</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
