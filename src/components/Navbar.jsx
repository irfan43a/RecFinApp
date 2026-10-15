import React, { useState } from 'react';
import { Flame, Heart, Sparkles, Volume2, VolumeX, PlusCircle, BookOpen, Menu, X, Refrigerator } from 'lucide-react';

export default function Navbar({
  activeTab,
  setActiveTab,
  favoritesCount,
  isSizzling,
  onToggleSizzle,
  fireEffectsEnabled,
  onToggleFireEffects,
  onOpenAddModal,
  onOpenAiModal,
  onOpenGuideModal
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-[#0f1016]/90 backdrop-blur-md border-b border-orange-900/30 shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => setActiveTab('explore')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600 via-orange-500 to-amber-400 shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/60 transition-all duration-300 group-hover:scale-105">
              <Flame className="w-7 h-7 text-white animate-flame-pulse" />
              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-red-500">
                  DapurMembara
                </span>
                <span className="inline-block px-1.5 py-0.5 text-[10px] font-bold tracking-widest uppercase bg-red-950/80 border border-red-500/40 text-red-400 rounded">
                  FIRE
                </span>
              </div>
              <p className="text-xs text-orange-200/60 font-medium">Culinary Sizzle & Recipe Finder</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-3">
            <button
              onClick={() => setActiveTab('explore')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === 'explore'
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md shadow-orange-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Jelajahi Resep
            </button>

            <button
              onClick={() => setActiveTab('pantry')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === 'pantry'
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md shadow-orange-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Refrigerator className="w-4 h-4 text-amber-400" />
              <span>Kulkas Ajaib</span>
            </button>

            <button
              onClick={() => setActiveTab('favorites')}
              className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === 'favorites'
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md shadow-orange-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
              <span>Favorit</span>
              {favoritesCount > 0 && (
                <span className="flex items-center justify-center min-w-5 h-5 px-1 text-xs font-bold bg-red-600 text-white rounded-full">
                  {favoritesCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenGuideModal}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium text-amber-300/90 hover:text-amber-200 hover:bg-amber-950/30 border border-amber-500/20 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>Panduan Api</span>
            </button>

            {/* AI Generator Button */}
            <button
              onClick={onOpenAiModal}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-400 hover:to-red-400 text-white shadow-lg shadow-orange-600/30 transition-all hover:scale-105"
            >
              <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Kreasi Resep AI</span>
            </button>

            {/* Sizzle Audio Toggle */}
            <button
              onClick={onToggleSizzle}
              title={isSizzling ? "Matikan suara wajan mendesis" : "Nyalakan suara wajan mendesis"}
              className={`p-2.5 rounded-xl border transition-all duration-200 flex items-center gap-1.5 text-xs font-medium ${
                isSizzling
                  ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm shadow-amber-500/40 animate-pulse'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-gray-200 hover:bg-white/10'
              }`}
            >
              {isSizzling ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden xl:inline">{isSizzling ? "Sizzle Aktif" : "Sizzle Suara"}</span>
            </button>

            {/* Flame Particles Toggle */}
            <button
              onClick={onToggleFireEffects}
              title="Efek Visual Bara Api"
              className={`p-2.5 rounded-xl border transition-all duration-200 flex items-center gap-1.5 text-xs font-medium ${
                fireEffectsEnabled
                  ? 'bg-orange-500/20 border-orange-500 text-orange-300 shadow-sm shadow-orange-500/40'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-gray-200 hover:bg-white/10'
              }`}
            >
              <Flame className={`w-4 h-4 ${fireEffectsEnabled ? 'text-orange-400' : 'text-gray-500'}`} />
              <span className="hidden xl:inline">Bara Api</span>
            </button>

            {/* Add Custom Recipe */}
            <button
              onClick={onOpenAddModal}
              title="Tambah Resep Anda Sendiri"
              className="p-2.5 rounded-xl bg-orange-600/30 hover:bg-orange-600/50 border border-orange-500/40 text-orange-200 transition-all hover:scale-105"
            >
              <PlusCircle className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleSizzle}
              className={`p-2 rounded-lg border ${
                isSizzling ? 'bg-amber-500/20 border-amber-500 text-amber-400' : 'border-white/10 text-gray-400'
              }`}
            >
              {isSizzling ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0e14] border-b border-orange-900/40 px-4 pt-2 pb-6 space-y-2">
          <button
            onClick={() => { setActiveTab('explore'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-xl font-semibold flex items-center justify-between ${
              activeTab === 'explore' ? 'bg-orange-600 text-white' : 'text-gray-300'
            }`}
          >
            Jelajahi Resep
          </button>
          <button
            onClick={() => { setActiveTab('pantry'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-xl font-semibold flex items-center gap-2 ${
              activeTab === 'pantry' ? 'bg-orange-600 text-white' : 'text-gray-300'
            }`}
          >
            <Refrigerator className="w-5 h-5 text-amber-400" />
            Kulkas Ajaib (Cari dari Bahan)
          </button>
          <button
            onClick={() => { setActiveTab('favorites'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-xl font-semibold flex items-center justify-between ${
              activeTab === 'favorites' ? 'bg-orange-600 text-white' : 'text-gray-300'
            }`}
          >
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-400" />
              Favorit Saya
            </div>
            {favoritesCount > 0 && (
              <span className="px-2 py-0.5 text-xs font-bold bg-red-600 text-white rounded-full">
                {favoritesCount}
              </span>
            )}
          </button>
          <button
            onClick={() => { onOpenAiModal(); setMobileMenuOpen(false); }}
            className="w-full text-left px-4 py-3 rounded-xl font-bold bg-gradient-to-r from-amber-500 to-red-600 text-white flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Kreasi Resep AI (Bahan Sendiri)
          </button>
          <button
            onClick={() => { onOpenGuideModal(); setMobileMenuOpen(false); }}
            className="w-full text-left px-4 py-3 rounded-xl font-medium border border-amber-500/30 text-amber-300 flex items-center gap-2"
          >
            <BookOpen className="w-5 h-5" />
            Panduan Teknik Api & Keselamatan
          </button>
          <button
            onClick={() => { onOpenAddModal(); setMobileMenuOpen(false); }}
            className="w-full text-left px-4 py-3 rounded-xl font-medium border border-orange-500/30 text-orange-300 flex items-center gap-2"
          >
            <PlusCircle className="w-5 h-5" />
            + Tambah Resep Baru
          </button>
        </div>
      )}
    </nav>
  );
}
