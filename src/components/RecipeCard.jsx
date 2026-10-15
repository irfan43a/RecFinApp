import React from 'react';
import { Flame, Clock, Users, Heart, Sparkles, ChefHat } from 'lucide-react';
import { soundEngine } from '../utils/soundEffects';

export default function RecipeCard({
  recipe,
  isFavorite,
  onToggleFavorite,
  onSelectRecipe
}) {
  const handleOpen = () => {
    soundEngine.playFlameWhoosh();
    onSelectRecipe(recipe);
  };

  const renderFlameDots = (level) => {
    return (
      <div className="flex items-center gap-0.5" title={`Tingkat Api: ${level}/5`}>
        {[1, 2, 3, 4, 5].map((dot) => (
          <span
            key={dot}
            className={`inline-block text-xs transition-transform ${
              dot <= level ? 'opacity-100 scale-100' : 'opacity-20 scale-75'
            }`}
          >
            🔥
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="group relative rounded-3xl overflow-hidden bg-[#13141f] border border-orange-950/40 hover:border-orange-500/50 shadow-xl shadow-black/40 hover:shadow-orange-500/10 transition-all duration-300 flex flex-col hover:-translate-y-1.5">
      
      {/* Image Container with Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
        <img
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          onError={(e) => {
            // High quality fallback food image
            e.currentTarget.src = "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80";
          }}
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#13141f] via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
          {/* Flame Level Badge */}
          <div className="pointer-events-auto flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-orange-500/40 text-orange-300 text-xs font-bold shadow-lg">
            {renderFlameDots(recipe.flameLevel)}
            <span className="text-[11px] font-mono text-orange-400 font-extrabold ml-1">Lvl {recipe.flameLevel}</span>
          </div>

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(recipe.id);
            }}
            className="pointer-events-auto w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all shadow-md group/btn"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isFavorite
                  ? 'text-red-500 fill-red-500'
                  : 'text-gray-300 group-hover/btn:text-red-400'
              }`}
            />
          </button>
        </div>

        {/* Bottom Image Badge: Cooking Method */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-orange-600/90 text-white shadow-md">
            {recipe.flameType}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Tag Chips */}
          <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
            {recipe.tags?.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-gray-400"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Recipe Title */}
          <h3 
            onClick={handleOpen}
            className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-1 cursor-pointer"
          >
            {recipe.title}
          </h3>

          {/* Subtitle / Teaser */}
          <p className="mt-1 text-xs text-gray-400 line-clamp-2 leading-relaxed">
            {recipe.subtitle || recipe.description}
          </p>
        </div>

        {/* Footer Meta & Action */}
        <div className="mt-4 pt-4 border-t border-white/5">
          <div className="flex items-center justify-between text-xs text-gray-400 mb-3.5">
            <div className="flex items-center gap-1 text-amber-300/90 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>{recipe.timeMinutes} mnt</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-gray-500" />
              <span>{recipe.servings} porsi</span>
            </div>
            <div className="flex items-center gap-1 font-semibold text-orange-400">
              <ChefHat className="w-3.5 h-3.5" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>

          <button
            onClick={handleOpen}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-orange-500/10 via-red-500/15 to-orange-500/10 hover:from-orange-500 hover:to-red-600 border border-orange-500/30 hover:border-transparent text-orange-300 hover:text-white text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-orange-500/25"
          >
            <Flame className="w-4 h-4 text-orange-400 group-hover/btn:text-white group-hover/btn:animate-flame-pulse" />
            <span>Lihat Resep & Mulai Masak</span>
          </button>
        </div>

      </div>

    </div>
  );
}
