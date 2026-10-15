import React, { useState } from 'react';
import { Refrigerator, Check, Plus, X, Sparkles, ChefHat } from 'lucide-react';
import { PANTRY_INGREDIENTS } from '../data/recipes';

export default function PantryFilter({
  selectedIngredients,
  setSelectedIngredients,
  onClear
}) {
  const [customInput, setCustomInput] = useState('');

  const toggleIngredient = (name) => {
    if (selectedIngredients.includes(name)) {
      setSelectedIngredients(selectedIngredients.filter((i) => i !== name));
    } else {
      setSelectedIngredients([...selectedIngredients, name]);
    }
  };

  const handleAddCustom = (e) => {
    e.preventDefault();
    const trimmed = customInput.trim();
    if (trimmed && !selectedIngredients.includes(trimmed)) {
      setSelectedIngredients([...selectedIngredients, trimmed]);
      setCustomInput('');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#151624] via-[#12131d] to-[#1c1214] border border-orange-500/30 shadow-2xl relative overflow-hidden">
        
        {/* Glow Element */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                <Refrigerator className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  Kulkas Ajaib & Pantry
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 font-semibold">
                    Cari dari Bahan Anda
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                  Centang bahan yang tersedia di dapurmu, kami carikan resep yang cocok!
                </p>
              </div>
            </div>

            {selectedIngredients.length > 0 && (
              <button
                onClick={onClear}
                className="self-start sm:self-center text-xs font-semibold px-3 py-1.5 rounded-xl bg-red-950/60 hover:bg-red-900 border border-red-500/30 text-red-300 flex items-center gap-1.5 transition-all"
              >
                <X className="w-3.5 h-3.5" />
                Reset Bahan ({selectedIngredients.length})
              </button>
            )}
          </div>

          {/* Quick Select Buttons */}
          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Pilih Bahan Yang Kamu Miliki:
            </p>
            <div className="flex flex-wrap gap-2">
              {PANTRY_INGREDIENTS.map((item) => {
                const isSelected = selectedIngredients.includes(item);
                return (
                  <button
                    key={item}
                    onClick={() => toggleIngredient(item)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isSelected
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md shadow-orange-500/30 scale-105 border border-orange-400'
                        : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 hover:border-orange-500/30'
                    }`}
                  >
                    {isSelected ? (
                      <Check className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-gray-400" />
                    )}
                    <span>{item}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom Ingredient Input */}
          <form onSubmit={handleAddCustom} className="mt-5 flex items-center gap-2 max-w-md">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Ketik bahan lain (cth: santan, mie, kentang)..."
              className="flex-1 bg-[#0f1017] border border-white/15 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-bold transition-all shrink-0"
            >
              + Tambah
            </button>
          </form>

          {/* Selected Summary */}
          {selectedIngredients.length > 0 && (
            <div className="mt-5 p-3 rounded-xl bg-orange-950/20 border border-orange-500/20 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-gray-400 font-medium">Bahan Terpilih:</span>
              {selectedIngredients.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-600/30 border border-orange-500/40 text-orange-200 font-semibold"
                >
                  {item}
                  <button onClick={() => toggleIngredient(item)} className="hover:text-white">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
