import React from 'react';
import { X, Flame, ShieldAlert, Sparkles, ChefHat, CheckCircle2, AlertOctagon } from 'lucide-react';

export default function FlameTechniqueGuide({ isOpen, onClose }) {
  if (!isOpen) return null;

  const techniques = [
    {
      title: "Wok Hei (Nafas Wajan)",
      origin: "Kuliner Kanton & Asia",
      icon: "🥘",
      temp: "250°C - 300°C",
      desc: "Teknik melayangkan butiran makanan melewati lidah api wajan baja karbon berkecepatan tinggi. Butiran minyak halus teratomisasi di udara menciptakan aroma berasap (smoky) yang khas.",
      tips: "Gunakan kompor api jet bertekanan tinggi dan wajan wok yang sudah di-seasoning dengan baik."
    },
    {
      title: "Flambé (Kobaran Api Alkohol / Jus)",
      origin: "Kuliner Prancis Haute Cuisine",
      icon: "🔥",
      temp: "180°C - 220°C",
      desc: "Menyulut uap alkohol (liquor/cognac) atau sari lemak panas pada tepi wajan. Nyala api biru-keemasan membakar alkohol dan meninggalkan rasa karamel pekat tanpa rasa tajam alkohol mentah.",
      tips: "Tuangkan cairan dari wadah kecil, jangan pernah menuang langsung dari botol kaca di atas kompor!"
    },
    {
      title: "Bara Arang Tempurung Kelapa",
      origin: "Kuliner Nusantara Tradisional",
      icon: "🥩",
      temp: "350°C - 500°C",
      desc: "Tetesan lemak bumbu yang menyentuh bara putih arang batok kelapa menghasilkan asap kaya senyawa fenol dan guaiacol yang meresap kuat ke dalam daging sate atau ayam bakar.",
      tips: "Tunggu arang berubah menjadi abu putih keabuan sebelum meletakkan daging agar tidak gosong jelaga."
    },
    {
      title: "Aburi Torching (Semburan Api Langsung)",
      origin: "Kuliner Modern Jepang",
      icon: "⚡",
      temp: "1000°C+ (Ujung Api Torch)",
      desc: "Menyapu permukaan salmon, daging, atau keju dengan kitchen blowtorch butana dalam hitungan detik. Menciptakan kerak renyah karamel sementara bagian dalam tetap lembut segar.",
      tips: "Gerakkan torch secara konstan seperti melukis, hindari memfokuskan api pada satu titik lebih dari 2 detik."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#11121d] border border-orange-500/40 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6 shrink-0">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-600 to-red-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
            <Flame className="w-6 h-6 animate-flame-pulse" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Eksplorasi Seni & Teknik Api Dapur
            </h2>
            <p className="text-xs text-orange-200/70">
              Pelajari sains di balik kelezatan kuliner berapi dan pedoman keselamatan
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto pr-1 space-y-6 flex-1">
          
          {/* Techniques Grid */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400 flex items-center gap-2">
              <ChefHat className="w-4 h-4" /> 4 Pilar Memasak Berapi Spektakuler
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techniques.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="text-[11px] font-mono font-bold text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30">
                      {tech.temp}
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-white">{tech.title}</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">{tech.desc}</p>
                  <div className="pt-2 border-t border-white/5 text-[11px] text-orange-300/80 font-medium">
                    💡 <span className="font-semibold text-orange-200">Tips Chef:</span> {tech.tips}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Rules Banner */}
          <div className="p-5 rounded-2xl bg-red-950/30 border border-red-500/40 space-y-3">
            <div className="flex items-center gap-2 text-red-400 font-black text-sm">
              <AlertOctagon className="w-5 h-5" />
              <span>5 Hukum Keselamatan Api di Dapur Rumah:</span>
            </div>
            <ul className="text-xs sm:text-sm text-red-200/90 space-y-2 list-disc list-inside">
              <li>
                <strong className="text-white">JANGAN PERNAH menyiram air pada minyak panas yang terbakar!</strong> Uap air akan menyebabkan ledakan bola api seketika. Tutup wajan dengan penutup logam untuk mematikan oksigen.
              </li>
              <li>
                <strong className="text-white">Siapkan tutup wajan rapat</strong> di samping kompor sebelum menyalakan api besar atau flambé.
              </li>
              <li>
                <strong className="text-white">Matikan cooker hood / exhaust fan</strong> saat atraksi flambé agar kobaran lidah api tidak tertarik masuk ke ventilasi berminyak.
              </li>
              <li>
                <strong className="text-white">Jauhkan rambut dan kain longgar</strong> saat memiringkan wajan atau menggunakan kitchen torch.
              </li>
              <li>
                <strong className="text-white">Gunakan wadah takar kecil</strong> saat menuang cairan alkohol untuk flambé, jangan pernah langsung dari botol kaca.
              </li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm transition-all"
          >
            Mengerti & Siap Memasak!
          </button>
        </div>

      </div>
    </div>
  );
}
