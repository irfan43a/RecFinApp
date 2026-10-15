import React, { useState } from 'react';
import { X, Flame, Plus, Trash2, Check, Sparkles } from 'lucide-react';

export default function AddRecipeModal({ isOpen, onClose, onAddRecipe }) {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('wok');
  const [image, setImage] = useState('');
  const [flameLevel, setFlameLevel] = useState(4);
  const [flameType, setFlameType] = useState('Wok Hei Wajan Panas');
  const [timeMinutes, setTimeMinutes] = useState(25);
  const [difficulty, setDifficulty] = useState('Mudah');
  const [servings, setServings] = useState(2);
  const [description, setDescription] = useState('');
  const [fireTip, setFireTip] = useState('');

  const [ingredients, setIngredients] = useState([
    { name: 'Bahan utama (cth: Daging Sapi)', amount: 300, unit: 'gram' },
    { name: 'Bawang putih', amount: 3, unit: 'siung' },
    { name: 'Cabai rawit merah', amount: 5, unit: 'buah' }
  ]);

  const [steps, setSteps] = useState([
    { step: 1, title: 'Persiapan Bahan', desc: 'Cuci dan potong semua bahan.', duration: '5 menit', hasFlame: false },
    { step: 2, title: 'Tumis Api Membara', desc: 'Panaskan wajan dengan api besar hingga berasap.', duration: '5 menit', hasFlame: true }
  ]);

  if (!isOpen) return null;

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '', amount: 100, unit: 'gram' }]);
  };

  const handleRemoveIngredient = (idx) => {
    setIngredients(ingredients.filter((_, i) => i !== idx));
  };

  const handleAddStep = () => {
    setSteps([
      ...steps,
      {
        step: steps.length + 1,
        title: `Langkah ${steps.length + 1}`,
        desc: '',
        duration: '5 menit',
        hasFlame: false
      }
    ]);
  };

  const handleRemoveStep = (idx) => {
    const updated = steps.filter((_, i) => i !== idx).map((s, index) => ({
      ...s,
      step: index + 1
    }));
    setSteps(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Silakan masukkan judul masakan.");
      return;
    }

    const defaultImages = {
      wok: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80",
      flambe: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      grill: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      spicy: "https://images.unsplash.com/photo-1527477378377-f8e1215b1368?auto=format&fit=crop&w=1200&q=80",
      dessert: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=1200&q=80"
    };

    const newRecipe = {
      id: `user-custom-${Date.now()}`,
      title,
      subtitle: subtitle || "Resep Istimewa Kreasi Pribadi",
      category,
      categoryName: category === 'flambe' ? 'Flambé & Torch' : category === 'grill' ? 'Grill & BBQ Arang' : category === 'wok' ? 'Wok-Hei & Tumis' : category === 'spicy' ? 'Pedas Berapi' : 'Dessert & Manis',
      image: image.trim() || defaultImages[category] || defaultImages.wok,
      flameLevel: Number(flameLevel),
      flameType: flameType || "Wok Hei Wajan Panas",
      timeMinutes: Number(timeMinutes) || 20,
      difficulty,
      servings: Number(servings) || 2,
      calories: 450,
      tags: ["Kreasi Sendiri", category],
      description: description || `Resep kreasi buatan sendiri dengan bumbu pilihan dan teknik api istimewa.`,
      fireTip: fireTip || "Gunakan sarung tangan tahan panas dan kontrol besar api kompor dengan cermat.",
      ingredients: ingredients.filter(i => i.name.trim()),
      steps: steps.filter(s => s.desc.trim()),
      nutrition: {
        protein: "30g",
        fat: "18g",
        carbs: "35g"
      }
    };

    onAddRecipe(newRecipe);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#11121d] border border-orange-500/40 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 max-h-[92vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6 shrink-0">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-red-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
            <Plus className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Tambah Resep Berapi Sendiri
            </h2>
            <p className="text-xs text-orange-200/70">
              Dokumentasikan resep masakan membara andalan dapur keluarga Anda
            </p>
          </div>
        </div>

        {/* Scrollable Form */}
        <form onSubmit={handleSubmit} className="overflow-y-auto pr-2 space-y-5 flex-1">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-orange-400 mb-1.5">
                Nama Hidangan:
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Contoh: Bebek Bakar Madu Berasap"
                className="w-full bg-[#0c0d14] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-orange-400 mb-1.5">
                Kategori Masakan:
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#0c0d14] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
              >
                <option value="wok">🥘 Wok-Hei & Tumis</option>
                <option value="flambe">🔥 Flambé & Torch</option>
                <option value="grill">🥩 Grill & BBQ Arang</option>
                <option value="spicy">🌶️ Pedas Berapi</option>
                <option value="dessert">🍮 Dessert & Manis</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-orange-400 mb-1.5">
                Level Api (1-5):
              </label>
              <select
                value={flameLevel}
                onChange={(e) => setFlameLevel(Number(e.target.value))}
                className="w-full bg-[#0c0d14] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
              >
                {[1, 2, 3, 4, 5].map((lvl) => (
                  <option key={lvl} value={lvl}>Level {lvl} 🔥</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-orange-400 mb-1.5">
                Waktu (Menit):
              </label>
              <input
                type="number"
                value={timeMinutes}
                onChange={(e) => setTimeMinutes(Number(e.target.value))}
                className="w-full bg-[#0c0d14] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-orange-400 mb-1.5">
                Jumlah Porsi:
              </label>
              <input
                type="number"
                value={servings}
                onChange={(e) => setServings(Number(e.target.value))}
                className="w-full bg-[#0c0d14] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-orange-400 mb-1.5">
              URL Foto Makanan (Opsional):
            </label>
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://images.unsplash.com/... (atau kosongkan untuk foto otomatis)"
              className="w-full bg-[#0c0d14] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-orange-400 mb-1.5">
              Deskripsi Singkat / Keistimewaan:
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ceritakan kelezatan dan aroma hidangan ini..."
              className="w-full bg-[#0c0d14] border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Ingredients list editor */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Bahan-Bahan:
              </label>
              <button
                type="button"
                onClick={handleAddIngredient}
                className="text-xs font-bold text-orange-400 hover:text-white flex items-center gap-1"
              >
                + Tambah Bahan
              </button>
            </div>
            <div className="space-y-2">
              {ingredients.map((ing, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={ing.name}
                    onChange={(e) => {
                      const updated = [...ingredients];
                      updated[idx].name = e.target.value;
                      setIngredients(updated);
                    }}
                    placeholder="Nama bahan"
                    className="flex-1 bg-[#0c0d14] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white"
                  />
                  <input
                    type="number"
                    value={ing.amount}
                    onChange={(e) => {
                      const updated = [...ingredients];
                      updated[idx].amount = Number(e.target.value);
                      setIngredients(updated);
                    }}
                    placeholder="Jml"
                    className="w-20 bg-[#0c0d14] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    value={ing.unit}
                    onChange={(e) => {
                      const updated = [...ingredients];
                      updated[idx].unit = e.target.value;
                      setIngredients(updated);
                    }}
                    placeholder="Satuan (sdm/gram)"
                    className="w-24 bg-[#0c0d14] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveIngredient(idx)}
                    className="p-1.5 text-gray-500 hover:text-red-400"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Steps list editor */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Tahapan Memasak:
              </label>
              <button
                type="button"
                onClick={handleAddStep}
                className="text-xs font-bold text-orange-400 hover:text-white flex items-center gap-1"
              >
                + Tambah Langkah
              </button>
            </div>
            <div className="space-y-3">
              {steps.map((st, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-300">Langkah {idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveStep(idx)}
                      className="text-gray-500 hover:text-red-400"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <input
                    type="text"
                    value={st.title}
                    onChange={(e) => {
                      const updated = [...steps];
                      updated[idx].title = e.target.value;
                      setSteps(updated);
                    }}
                    placeholder="Judul langkah (cth: Tumis Bumbu Halus)"
                    className="w-full bg-[#0c0d14] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white"
                  />
                  <textarea
                    rows={2}
                    value={st.desc}
                    onChange={(e) => {
                      const updated = [...steps];
                      updated[idx].desc = e.target.value;
                      setSteps(updated);
                    }}
                    placeholder="Penjelasan detail langkah ini..."
                    className="w-full bg-[#0c0d14] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tips Api */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-orange-400 mb-1.5">
              Tips Api & Keamanan Dapur:
            </label>
            <input
              type="text"
              value={fireTip}
              onChange={(e) => setFireTip(e.target.value)}
              placeholder="Contoh: Pastikan wajan sangat panas sebelum menuang saus."
              className="w-full bg-[#0c0d14] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Submit */}
          <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs sm:text-sm font-semibold"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/30"
            >
              Simpan Resep Baru
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
