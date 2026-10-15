import React, { useState } from 'react';
import { X, Sparkles, Flame, ChefHat, Clock, AlertTriangle, Check, Plus } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEngine } from '../utils/soundEffects';

export default function AiRecipeGeneratorModal({
  isOpen,
  onClose,
  onRecipeGenerated
}) {
  const [ingredientsInput, setIngredientsInput] = useState('');
  const [cookingStyle, setCookingStyle] = useState('wok');
  const [flameLevel, setFlameLevel] = useState(4);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState(null);

  if (!isOpen) return null;

  const cookingStyles = [
    { id: 'wok', name: '🥘 Wok-Hei Jet Flame', desc: 'Tumisan kilat suhu wajan sangat tinggi beraroma asap harum' },
    { id: 'flambe', name: '🔥 Flambé Liquor / Broth', desc: 'Atraksi lidah api membakar sari cairan karamel gurih manis' },
    { id: 'torch', name: '⚡ Torched Aburi Blowtorch', desc: 'Karamelisasi lelehan keju / saus dengan api torch langsung' },
    { id: 'grill', name: '🥩 Grill Arang Tempurung', desc: 'Panggangan berlumur bumbu di atas bara arang membara' },
  ];

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!ingredientsInput.trim()) {
      alert("Silakan masukkan bahan-bahan yang ingin Anda masak terlebih dahulu.");
      return;
    }

    setIsGenerating(true);
    soundEngine.playFlameWhoosh();

    setTimeout(() => {
      // Craft an appetizing custom recipe based on user input
      const ingredientsList = ingredientsInput
        .split(',')
        .map(i => i.trim())
        .filter(Boolean);

      const mainIng = ingredientsList[0] || "Daging & Telur";
      const secondIng = ingredientsList[1] || "Bumbu Rempah";

      let generatedTitle = "";
      let generatedImage = "";
      let flameType = "";

      if (cookingStyle === 'wok') {
        generatedTitle = `${mainIng} Wok-Hei Dragon Flame Spesial`;
        generatedImage = "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80";
        flameType = "Wok Hei (Api Jet Wajan Baja)";
      } else if (cookingStyle === 'flambe') {
        generatedTitle = `Gourmet ${mainIng} Flambé Karamel Herb Butter`;
        generatedImage = "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80";
        flameType = "Flambé Direct Flame";
      } else if (cookingStyle === 'torch') {
        generatedTitle = `Aburi Torched ${mainIng} Melted Cheese Lava`;
        generatedImage = "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=1200&q=80";
        flameType = "Kitchen Blowtorch Flame";
      } else {
        generatedTitle = `${mainIng} Bakar Bara Arang Membara Pedas`;
        generatedImage = "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80";
        flameType = "Bara Arang Kayu Keras";
      }

      const newRecipe = {
        id: `ai-custom-${Date.now()}`,
        title: generatedTitle,
        subtitle: `Kreasi Resep Berapi Spesial Berbahan Utama ${ingredientsList.slice(0, 3).join(', ')}`,
        category: cookingStyle === 'wok' ? 'wok' : cookingStyle === 'flambe' ? 'flambe' : 'grill',
        categoryName: cookingStyles.find(s => s.id === cookingStyle)?.name.split(' ')[1] || 'Kreasi Spesial',
        image: generatedImage,
        flameLevel: flameLevel,
        flameType: flameType,
        timeMinutes: 20,
        difficulty: "Mudah",
        servings: 2,
        calories: 520,
        tags: ["Kreasi AI", ...ingredientsList.slice(0, 3)],
        description: `Hidangan istimewa yang memadukan ${ingredientsList.join(', ')} menggunakan teknik ${flameType}. Menghasilkan cita rasa gurih smoky yang intens dan menggugah selera.`,
        fireTip: `Saat memasak dengan teknik ${flameType}, pastikan minyak atau cairan dimasukkan saat wajan sudah benar-benar panas agar sari makanan terkunci sempurna.`,
        ingredients: [
          ...ingredientsList.map((ing, i) => ({
            name: ing,
            amount: 150 + i * 20,
            unit: "gram"
          })),
          { name: "Bawang putih cincang", amount: 3, unit: "siung" },
          { name: "Minyak wijen / butter aromatik", amount: 1.5, unit: "sdm" },
          { name: "Saus bumbu gurih lada hitam", amount: 2, unit: "sdm" }
        ],
        steps: [
          {
            step: 1,
            title: "Persiapan Bahan & Wajan",
            desc: `Siapkan bahan-bahan: ${ingredientsList.join(', ')}. Panaskan wajan hingga berasap tipis.`,
            duration: "3 menit",
            hasFlame: false
          },
          {
            step: 2,
            title: "Searing & Tumisan Api Panas",
            desc: `Masukkan minyak/mentega lalu masukkan ${mainIng}. Masak dengan api besar hingga tercium aroma harum gosong karamel yang menggoda.`,
            duration: "5 menit",
            hasFlame: true
          },
          {
            step: 3,
            title: `Aplikasi Teknik ${flameType}`,
            desc: `Tambahkan ${secondIng} bersama bumbu. Biarkan uap masakan menyentuh panas maksimal untuk menghasilkan sentuhan khas.`,
            duration: "4 menit",
            hasFlame: true
          },
          {
            step: 4,
            title: "Finishing & Penyajian Hangat",
            desc: "Angkat dan sajikan selagi panas mendesis dengan taburan daun bawang atau biji wijen.",
            duration: "2 menit",
            hasFlame: false
          }
        ],
        nutrition: {
          protein: "35g",
          fat: "22g",
          carbs: "45g"
        }
      };

      setGeneratedResult(newRecipe);
      setIsGenerating(false);
      confetti({ particleCount: 70, spread: 60 });
    }, 1200);
  };

  const handleApplyRecipe = () => {
    if (generatedResult) {
      onRecipeGenerated(generatedResult);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#12131e] border border-orange-500/40 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
            <Sparkles className="w-6 h-6 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              AI Fire Recipe Generator
            </h2>
            <p className="text-xs text-orange-200/70">
              Ketik bahan apa pun yang Anda punya, kami racikkan resep berapi istimewa!
            </p>
          </div>
        </div>

        {!generatedResult ? (
          <form onSubmit={handleGenerate} className="space-y-5">
            {/* Ingredients input */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-orange-400 mb-2">
                Bahan yang Ada di Kulkas / Dapurmu:
              </label>
              <textarea
                rows={3}
                value={ingredientsInput}
                onChange={(e) => setIngredientsInput(e.target.value)}
                placeholder="Contoh: ayam, telur, kecap, daun bawang, cabai rawit..."
                className="w-full bg-[#0b0c12] border border-white/15 focus:border-orange-500 rounded-2xl p-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>

            {/* Cooking Style */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-orange-400 mb-2">
                Pilih Karakter Api Memasak:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cookingStyles.map((style) => (
                  <button
                    type="button"
                    key={style.id}
                    onClick={() => setCookingStyle(style.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      cookingStyle === style.id
                        ? 'bg-orange-600/30 border-orange-500 text-white shadow-md'
                        : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="text-xs font-bold text-white mb-0.5">{style.name}</div>
                    <div className="text-[11px] text-gray-400 line-clamp-1">{style.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Flame Level */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-orange-400 mb-2">
                Tingkat Kepedasan & Kobaran Api (Level {flameLevel}/5):
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((lvl) => (
                  <button
                    type="button"
                    key={lvl}
                    onClick={() => setFlameLevel(lvl)}
                    className={`flex-1 py-2 rounded-xl text-xs font-black transition-all ${
                      flameLevel === lvl
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/40'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    🔥 {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isGenerating}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-red-600 to-amber-500 text-white font-black text-sm shadow-xl shadow-orange-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Flame className="w-5 h-5 animate-spin" />
                  <span>Meracik Resep Berapi...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Buatkan Resep Berapi Sekarang!</span>
                </>
              )}
            </button>
          </form>
        ) : (
          /* Result Preview */
          <div className="space-y-5 animate-fadeIn">
            <div className="p-5 rounded-2xl bg-[#0b0c12] border border-orange-500/40 flex items-start gap-4">
              <img
                src={generatedResult.image}
                alt={generatedResult.title}
                className="w-24 h-24 rounded-2xl object-cover shrink-0 border border-orange-500/30"
              />
              <div className="flex-1">
                <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider block">
                  {generatedResult.flameType}
                </span>
                <h3 className="text-lg font-black text-white mt-0.5">
                  {generatedResult.title}
                </h3>
                <p className="text-xs text-gray-300 mt-1 line-clamp-2">
                  {generatedResult.description}
                </p>
                <div className="flex items-center gap-3 mt-3 text-xs text-amber-300 font-semibold">
                  <span>⏱️ {generatedResult.timeMinutes} Menit</span>
                  <span>🔥 Level {generatedResult.flameLevel}/5</span>
                  <span>🍽️ {generatedResult.servings} Porsi</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setGeneratedResult(null)}
                className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-semibold text-xs sm:text-sm border border-white/10"
              >
                Buat Resep Lain
              </button>
              <button
                onClick={handleApplyRecipe}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-black text-xs sm:text-sm shadow-lg shadow-orange-500/30 hover:scale-105 transition-all flex items-center justify-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Simpan & Lihat Resep</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
