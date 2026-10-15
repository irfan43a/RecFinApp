import React from 'react';
import { Flame, Beef, CookingPot, Sparkles, CakeSlice, UtensilsCrossed, Clock, SlidersHorizontal } from 'lucide-react';
import { CATEGORIES } from '../data/recipes';

const iconMap = {
  UtensilsCrossed: UtensilsCrossed,
  Flame: Flame,
  Beef: Beef,
  CookingPot: CookingPot,
  Sparkles: Sparkles,
  CakeSlice: CakeSlice
};

export default function CategoryPills({
  activeCategory,
  setActiveCategory,
  flameFilter,
  setFlameFilter,
  timeFilter,
  setTimeFilter,
  sortBy,
  setSortBy
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-orange-800">
        {CATEGORIES.map((cat) => {
          const Icon = iconMap[cat.icon] || Flame;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                isActive
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/30 scale-105 border border-orange-400'
                  : 'bg-charcoal-900/90 text-gray-300 hover:text-white hover:bg-orange-950/40 border border-white/10'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-amber-200' : 'text-orange-400'}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Advanced Filter Row (Heat Level & Time) */}
      <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-4 border-t border-white/5 text-xs text-gray-300">
        
        {/* Flame Level Filter */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-orange-400 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5" />
            Level Api:
          </span>
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3, 4, 5].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setFlameFilter(lvl)}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  flameFilter === lvl
                    ? 'bg-red-600 text-white shadow-sm shadow-red-500/50'
                    : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-gray-200'
                }`}
              >
                {lvl === 0 ? 'Semua' : `🔥 ${lvl}`}
              </button>
            ))}
          </div>
        </div>

        {/* Time & Sort Filters */}
        <div className="flex items-center gap-3">
          {/* Time Filter */}
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gray-400" />
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="bg-[#161722] border border-white/10 rounded-lg px-2.5 py-1 text-gray-200 text-xs focus:ring-1 focus:ring-orange-500 focus:outline-none"
            >
              <option value="all">Semua Durasi</option>
              <option value="quick">⚡ Kilat (&le; 20 mnt)</option>
              <option value="medium">⏱️ Sedang (&le; 40 mnt)</option>
              <option value="long">⏳ Mantap (&gt; 40 mnt)</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#161722] border border-white/10 rounded-lg px-2.5 py-1 text-gray-200 text-xs focus:ring-1 focus:ring-orange-500 focus:outline-none"
            >
              <option value="featured">Pilihan Populer</option>
              <option value="flame-high">Api Paling Membara 🔥</option>
              <option value="time-fast">Waktu Tercepat ⚡</option>
              <option value="calories-low">Kalori Terendah 🥗</option>
            </select>
          </div>
        </div>

      </div>
    </div>
  );
}
