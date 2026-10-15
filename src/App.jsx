import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FireCanvas from './components/FireCanvas';
import CategoryPills from './components/CategoryPills';
import PantryFilter from './components/PantryFilter';
import RecipeCard from './components/RecipeCard';
import RecipeDetailModal from './components/RecipeDetailModal';
import AiRecipeGeneratorModal from './components/AiRecipeGeneratorModal';
import AddRecipeModal from './components/AddRecipeModal';
import FlameTechniqueGuide from './components/FlameTechniqueGuide';
import Footer from './components/Footer';

import { INITIAL_RECIPES } from './data/recipes';
import { soundEngine } from './utils/soundEffects';
import { Flame, Sparkles, Heart, SearchX, ChefHat, RefreshCw } from 'lucide-react';

export default function App() {
  // Recipes state (with local storage persistence)
  const [recipes, setRecipes] = useState(() => {
    try {
      const saved = localStorage.getItem('dapurmembara_recipes');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure initial recipes are included if missing
        const ids = new Set(parsed.map(r => r.id));
        const merged = [...parsed];
        INITIAL_RECIPES.forEach(r => {
          if (!ids.has(r.id)) merged.push(r);
        });
        return merged;
      }
    } catch (e) {
      console.warn("Storage load error:", e);
    }
    return INITIAL_RECIPES;
  });

  // Favorites state
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('dapurmembara_favorites');
      return saved ? JSON.parse(saved) : ['flambe-wagyu-steak', 'dragon-wok-hei-fried-rice'];
    } catch (e) {
      return ['flambe-wagyu-steak', 'dragon-wok-hei-fried-rice'];
    }
  });

  // Navigation & view states
  const [activeTab, setActiveTab] = useState('explore'); // 'explore' | 'pantry' | 'favorites'
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [flameFilter, setFlameFilter] = useState(0); // 0 = all, 1-5
  const [timeFilter, setTimeFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Pantry ingredients
  const [pantryIngredients, setPantryIngredients] = useState(['Ayam', 'Bawang Putih', 'Cabai Rawit']);

  // Modals & Dialogs
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  // Sound & Visual Ambience
  const [isSizzling, setIsSizzling] = useState(false);
  const [fireEffectsEnabled, setFireEffectsEnabled] = useState(true);

  // Persist recipes
  useEffect(() => {
    try {
      localStorage.setItem('dapurmembara_recipes', JSON.stringify(recipes));
    } catch (e) {}
  }, [recipes]);

  // Persist favorites
  useEffect(() => {
    try {
      localStorage.setItem('dapurmembara_favorites', JSON.stringify(favorites));
    } catch (e) {}
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        soundEngine.playTimerBell();
        return [...prev, id];
      }
    });
  };

  const handleToggleSizzle = () => {
    const newState = soundEngine.toggleSizzle();
    setIsSizzling(newState);
  };

  const handleRandomRecipe = () => {
    if (recipes.length === 0) return;
    const randomIndex = Math.floor(Math.random() * recipes.length);
    setSelectedRecipe(recipes[randomIndex]);
    soundEngine.playFlameWhoosh();
  };

  const handleAddRecipe = (newRecipe) => {
    setRecipes([newRecipe, ...recipes]);
    setSelectedRecipe(newRecipe);
    soundEngine.playFlameWhoosh();
  };

  // Filter recipes logic
  const filteredRecipes = useMemo(() => {
    let list = [...recipes];

    // Favorites tab filter
    if (activeTab === 'favorites') {
      list = list.filter(r => favorites.includes(r.id));
    }

    // Pantry tab filter & calculation
    if (activeTab === 'pantry' && pantryIngredients.length > 0) {
      list = list.map(recipe => {
        const recipeIngs = recipe.ingredients.map(i => i.name.toLowerCase());
        let matches = 0;
        pantryIngredients.forEach(selected => {
          const s = selected.toLowerCase();
          const matchFound = recipeIngs.some(ri => ri.includes(s) || s.includes(ri));
          if (matchFound) matches++;
        });

        const matchScore = Math.round((matches / pantryIngredients.length) * 100);
        return {
          ...recipe,
          matchScore,
          matchedCount: matches
        };
      }).filter(r => r.matchedCount > 0);

      // Sort by best match score
      list.sort((a, b) => b.matchedCount - a.matchedCount);
      return list;
    }

    // Query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(r => 
        r.title.toLowerCase().includes(q) ||
        r.subtitle?.toLowerCase().includes(q) ||
        r.description?.toLowerCase().includes(q) ||
        r.tags?.some(t => t.toLowerCase().includes(q)) ||
        r.ingredients?.some(i => i.name.toLowerCase().includes(q))
      );
    }

    // Category filter
    if (activeCategory !== 'all') {
      list = list.filter(r => r.category === activeCategory);
    }

    // Flame level filter
    if (flameFilter > 0) {
      list = list.filter(r => r.flameLevel === flameFilter);
    }

    // Cooking time filter
    if (timeFilter === 'quick') {
      list = list.filter(r => r.timeMinutes <= 20);
    } else if (timeFilter === 'medium') {
      list = list.filter(r => r.timeMinutes > 20 && r.timeMinutes <= 40);
    } else if (timeFilter === 'long') {
      list = list.filter(r => r.timeMinutes > 40);
    }

    // Sort order
    if (sortBy === 'flame-high') {
      list.sort((a, b) => b.flameLevel - a.flameLevel);
    } else if (sortBy === 'time-fast') {
      list.sort((a, b) => a.timeMinutes - b.timeMinutes);
    } else if (sortBy === 'calories-low') {
      list.sort((a, b) => a.calories - b.calories);
    }

    return list;
  }, [recipes, favorites, activeTab, pantryIngredients, searchQuery, activeCategory, flameFilter, timeFilter, sortBy]);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-gray-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white relative">
      
      {/* Background Animated Fire Embers Canvas */}
      <FireCanvas enabled={fireEffectsEnabled} />

      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favoritesCount={favorites.length}
        isSizzling={isSizzling}
        onToggleSizzle={handleToggleSizzle}
        fireEffectsEnabled={fireEffectsEnabled}
        onToggleFireEffects={() => setFireEffectsEnabled(!fireEffectsEnabled)}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        onOpenAiModal={() => setIsAiModalOpen(true)}
        onOpenGuideModal={() => setIsGuideModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-20">
        
        {/* Hero Section (Visible in explore or favorites when no heavy filter) */}
        {activeTab === 'explore' && (
          <Hero
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onRandomRecipe={handleRandomRecipe}
            onOpenGuide={() => setIsGuideModalOpen(true)}
          />
        )}

        {/* Pantry Search View */}
        {activeTab === 'pantry' && (
          <PantryFilter
            selectedIngredients={pantryIngredients}
            setSelectedIngredients={setPantryIngredients}
            onClear={() => setPantryIngredients([])}
          />
        )}

        {/* Category & Advanced Filters (Explore & Favorites tabs) */}
        {activeTab !== 'pantry' && (
          <CategoryPills
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            flameFilter={flameFilter}
            setFlameFilter={setFlameFilter}
            timeFilter={timeFilter}
            setTimeFilter={setTimeFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        )}

        {/* Section Heading & Result Stats */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              {activeTab === 'favorites' ? (
                <>
                  <Heart className="w-6 h-6 text-red-500 fill-red-500" />
                  <span>Resep Favorit Anda</span>
                </>
              ) : activeTab === 'pantry' ? (
                <>
                  <ChefHat className="w-6 h-6 text-amber-400" />
                  <span>Resep Berdasarkan Kulkas Anda</span>
                </>
              ) : (
                <>
                  <Flame className="w-6 h-6 text-orange-500 animate-flame-pulse" />
                  <span>Koleksi Resep Paling Menggoda</span>
                </>
              )}
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/10 text-orange-300">
              {filteredRecipes.length} Hidangan
            </span>
          </div>

          {(searchQuery || flameFilter > 0 || activeCategory !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setFlameFilter(0);
                setActiveCategory('all');
                setTimeFilter('all');
              }}
              className="text-xs font-bold text-orange-400 hover:text-white flex items-center gap-1.5 transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Filter</span>
            </button>
          )}
        </div>

        {/* Recipe Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredRecipes.map((recipe) => (
                <div key={recipe.id} className="relative">
                  {/* Pantry match badge if applicable */}
                  {activeTab === 'pantry' && recipe.matchedCount !== undefined && (
                    <div className="absolute -top-2.5 right-4 z-30 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-black shadow-lg flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{recipe.matchedCount} Bahan Cocok!</span>
                    </div>
                  )}

                  <RecipeCard
                    recipe={recipe}
                    isFavorite={favorites.includes(recipe.id)}
                    onToggleFavorite={toggleFavorite}
                    onSelectRecipe={setSelectedRecipe}
                  />
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20 px-4 rounded-3xl bg-charcoal-900/60 border border-white/5 max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-3xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mx-auto mb-4">
                <SearchX className="w-8 h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Tidak Ada Resep yang Sesuai
              </h3>
              <p className="text-sm text-gray-400 mt-1 max-w-md mx-auto">
                {activeTab === 'favorites'
                  ? 'Anda belum menambahkan resep favorit. Klik tombol hati pada hidangan mana pun untuk menyimpannya di sini!'
                  : activeTab === 'pantry'
                  ? 'Coba pilih bahan lain atau kurangi bahan pilihan kulkas Anda.'
                  : 'Coba gunakan kata kunci lain atau reset filter untuk melihat seluruh resep lezat.'}
              </p>
              <div className="mt-6 flex justify-center gap-3">
                {activeTab !== 'explore' && (
                  <button
                    onClick={() => setActiveTab('explore')}
                    className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-bold shadow-lg"
                  >
                    Jelajahi Semua Resep
                  </button>
                )}
                {(searchQuery || flameFilter > 0 || activeCategory !== 'all') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setFlameFilter(0);
                      setActiveCategory('all');
                      setTimeFilter('all');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold"
                  >
                    Reset Filter Pencarian
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

      </main>

      {/* Footer */}
      <Footer onOpenGuide={() => setIsGuideModalOpen(true)} />

      {/* Detailed Recipe Modal */}
      {selectedRecipe && (
        <RecipeDetailModal
          recipe={selectedRecipe}
          isFavorite={favorites.includes(selectedRecipe.id)}
          onToggleFavorite={toggleFavorite}
          onClose={() => setSelectedRecipe(null)}
        />
      )}

      {/* AI Recipe Generator Modal */}
      <AiRecipeGeneratorModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        onRecipeGenerated={handleAddRecipe}
      />

      {/* Add Recipe Modal */}
      <AddRecipeModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddRecipe={handleAddRecipe}
      />

      {/* Flame Technique & Safety Guide Modal */}
      <FlameTechniqueGuide
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
      />

    </div>
  );
}
