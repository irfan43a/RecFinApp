import React from 'react';
import { Flame, Heart, ShieldCheck, Sparkles } from 'lucide-react';

export default function Footer({ onOpenGuide }) {
  return (
    <footer className="mt-20 border-t border-orange-950/40 bg-[#0c0d14] text-gray-400 text-xs py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-red-600 flex items-center justify-center text-white shadow-lg shadow-orange-600/30">
            <Flame className="w-5 h-5 animate-flame-pulse" />
          </div>
          <div>
            <span className="text-base font-black text-white block">
              DapurMembara <span className="text-orange-400">🔥</span>
            </span>
            <p className="text-gray-400 text-xs">
              Platform Penemu Resep Berapi & Kuliner Sensasional
            </p>
          </div>
        </div>

        {/* Safety Note */}
        <div className="flex items-center gap-2 p-3 rounded-xl bg-orange-950/20 border border-orange-500/20 max-w-md text-orange-200/80 text-[11px] leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-orange-400 shrink-0" />
          <span>
            Selalu utamakan keselamatan saat memasak dengan teknik api tinggi (Wok Hei, Flambé, Blowtorch). Pastikan ventilasi udara memadai.
          </span>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right space-y-1">
          <button
            onClick={onOpenGuide}
            className="text-amber-400 hover:text-amber-300 font-semibold underline block"
          >
            Baca Panduan Teknik Api & Keamanan Dapur
          </button>
          <p className="text-gray-400">
            Dibuat untuk para pecinta kuliner lezat & beraroma membara.
          </p>
        </div>

      </div>
    </footer>
  );
}
