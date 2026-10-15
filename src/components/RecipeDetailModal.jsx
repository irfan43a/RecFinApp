import React, { useState, useEffect } from 'react';
import { 
  X, Flame, Clock, Users, ChefHat, Heart, Volume2, 
  Play, Pause, RotateCcw, CheckCircle2, AlertTriangle, 
  Sparkles, Check, ChevronRight, ChevronLeft, Share2, Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEngine } from '../utils/soundEffects';

export default function RecipeDetailModal({
  recipe,
  isFavorite,
  onToggleFavorite,
  onClose
}) {
  const [servingMultiplier, setServingMultiplier] = useState(1);
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [cookingMode, setCookingMode] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Timer state
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerInitial, setTimerInitial] = useState(0);

  // Voice narration
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    // Reset checked items & portion when recipe changes
    setCheckedIngredients({});
    setServingMultiplier(1);
    setCookingMode(false);
    setCurrentStepIndex(0);
    setTimerRunning(false);
    setTimerSeconds(0);
  }, [recipe]);

  // Keyboard shortcut for closing
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (cookingMode) {
          setCookingMode(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cookingMode, onClose]);

  // Timer interval
  useEffect(() => {
    let interval = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev <= 1) {
            setTimerRunning(false);
            soundEngine.playTimerBell();
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.6 }
            });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  if (!recipe) return null;

  const baseServings = recipe.servings || 2;
  const currentServings = Math.round(baseServings * servingMultiplier);

  // Parse duration from text like "3 menit" or "30 menit"
  const extractMinutes = (durationText) => {
    if (!durationText) return 2;
    const match = durationText.match(/\d+/);
    return match ? parseInt(match[0], 10) : 2;
  };

  const handleStartStepTimer = (durationText) => {
    const mins = extractMinutes(durationText);
    const totalSecs = mins * 60;
    setTimerInitial(totalSecs);
    setTimerSeconds(totalSecs);
    setTimerRunning(true);
  };

  const toggleIngredientCheck = (idx) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // Text-to-Speech in Indonesian
  const speakText = (text) => {
    if (!('speechSynthesis' in window)) {
      alert("Browser ini tidak mendukung pembaca suara (Text-to-Speech).");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = 0.95;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const currentStep = recipe.steps?.[currentStepIndex];

  const handleNextStep = () => {
    if (currentStepIndex < recipe.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
      setTimerRunning(false);
      setTimerSeconds(0);
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      }
    } else {
      // Completed!
      soundEngine.playFlameWhoosh();
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.5 }
      });
      alert("🎉 Selamat! Anda telah menyelesaikan seluruh langkah memasak hidangan berapi ini. Selamat menikmati!");
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
      setTimerRunning(false);
      setTimerSeconds(0);
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      }
    }
  };

  const formatTimer = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      <div className="relative w-full max-w-4xl bg-[#11121c] border border-orange-500/40 rounded-3xl shadow-2xl shadow-orange-950/50 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Floating Controls (Top Right) */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={() => onToggleFavorite(recipe.id)}
            className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all shadow-lg"
            title="Simpan ke Favorit"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? 'text-red-500 fill-red-500' : 'text-white'
              }`}
            />
          </button>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:scale-110 active:scale-95 transition-all shadow-lg"
            title="Tutup (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          
          {/* Hero Banner Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11121c] via-[#11121c]/40 to-transparent" />
            
            {/* Badges Over Image */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-red-600 text-white shadow-lg flex items-center gap-1.5">
                  <Flame className="w-4 h-4" />
                  <span>Level Api {recipe.flameLevel}/5</span>
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-600/90 text-white backdrop-blur-md">
                  {recipe.flameType}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 border border-amber-400/40 text-amber-300 backdrop-blur-md">
                  {recipe.categoryName}
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight drop-shadow-md">
                {recipe.title}
              </h1>
              <p className="text-sm text-gray-300 mt-1 max-w-2xl drop-shadow">
                {recipe.subtitle}
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-5 bg-[#0e0f17] border-y border-white/5 text-center">
            <div className="p-2">
              <span className="text-xs text-gray-400 block">Waktu Memasak</span>
              <span className="text-sm sm:text-base font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                <Clock className="w-4 h-4 text-amber-400" />
                {recipe.timeMinutes} Menit
              </span>
            </div>
            <div className="p-2 border-l border-white/5">
              <span className="text-xs text-gray-400 block">Tingkat Kesulitan</span>
              <span className="text-sm sm:text-base font-bold text-orange-400 flex items-center justify-center gap-1 mt-0.5">
                <ChefHat className="w-4 h-4" />
                {recipe.difficulty}
              </span>
            </div>
            <div className="p-2 border-l border-white/5">
              <span className="text-xs text-gray-400 block">Porsi Standar</span>
              <span className="text-sm sm:text-base font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                <Users className="w-4 h-4 text-blue-400" />
                {currentServings} Porsi
              </span>
            </div>
            <div className="p-2 border-l border-white/5">
              <span className="text-xs text-gray-400 block">Estimasi Kalori</span>
              <span className="text-sm sm:text-base font-bold text-emerald-400 flex items-center justify-center gap-1 mt-0.5">
                <Award className="w-4 h-4" />
                {recipe.calories} kkal
              </span>
            </div>
          </div>

          {/* Fire Safety Alert Box */}
          {recipe.fireTip && (
            <div className="mx-5 mt-5 p-4 rounded-2xl bg-orange-950/30 border border-orange-500/40 flex items-start gap-3 shadow-inner">
              <div className="p-2 rounded-xl bg-orange-600/30 text-orange-400 shrink-0">
                <AlertTriangle className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-orange-300">Tips Api & Keamanan Dapur</h4>
                <p className="text-xs sm:text-sm text-orange-200/80 mt-1 leading-relaxed">
                  {recipe.fireTip}
                </p>
              </div>
            </div>
          )}

          {/* Mode Switcher Buttons */}
          <div className="px-5 pt-6 pb-2 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCookingMode(false)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  !cookingMode
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Ringkasan Resep
              </button>
              <button
                onClick={() => setCookingMode(true)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  cookingMode
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Flame className="w-4 h-4 text-amber-300 animate-bounce" />
                <span>Mode Masak Step-by-Step</span>
              </button>
            </div>

            {/* Portion Scaler */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-gray-400 hidden sm:inline">Porsi:</span>
              {[0.5, 1, 2, 3].map((mult) => {
                const calculated = Math.round(baseServings * mult);
                return (
                  <button
                    key={mult}
                    onClick={() => setServingMultiplier(mult)}
                    className={`px-2 py-1 rounded-lg font-bold transition-all ${
                      servingMultiplier === mult
                        ? 'bg-orange-500 text-white'
                        : 'bg-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    {calculated}P
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Body: Full View OR Step-by-Step Cooking View */}
          {!cookingMode ? (
            <div className="p-5 sm:p-7 grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Left Column: Ingredients Checklist (5 cols) */}
              <div className="md:col-span-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-400" />
                    <span>Daftar Bahan ({currentServings} Porsi)</span>
                  </h3>
                  <span className="text-xs text-gray-400 font-medium">
                    {Object.values(checkedIngredients).filter(Boolean).length}/{recipe.ingredients?.length} Siap
                  </span>
                </div>

                <div className="space-y-2">
                  {recipe.ingredients?.map((ing, idx) => {
                    const isChecked = !!checkedIngredients[idx];
                    const scaledAmount = ing.amount
                      ? (ing.amount * servingMultiplier).toFixed(
                          (ing.amount * servingMultiplier) % 1 === 0 ? 0 : 1
                        )
                      : '';

                    return (
                      <div
                        key={idx}
                        onClick={() => toggleIngredientCheck(idx)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                          isChecked
                            ? 'bg-emerald-950/20 border-emerald-500/30 text-gray-400 line-through opacity-75'
                            : 'bg-white/5 border-white/5 hover:border-orange-500/30 text-gray-200'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                            isChecked
                              ? 'bg-emerald-500 text-white'
                              : 'border border-gray-500 bg-transparent'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div className="flex-1 text-xs sm:text-sm">
                          <span className="font-semibold text-white">
                            {scaledAmount} {ing.unit}{' '}
                          </span>
                          <span>{ing.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Nutrition Card */}
                {recipe.nutrition && (
                  <div className="p-4 rounded-2xl bg-charcoal-900 border border-white/5 space-y-2 mt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Kandungan Nutrisi (Per Porsi)
                    </h4>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2 rounded-lg bg-white/5">
                        <span className="text-gray-400 block">Protein</span>
                        <span className="font-bold text-white">{recipe.nutrition.protein}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/5">
                        <span className="text-gray-400 block">Lemak</span>
                        <span className="font-bold text-white">{recipe.nutrition.fat}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/5">
                        <span className="text-gray-400 block">Karbo</span>
                        <span className="font-bold text-white">{recipe.nutrition.carbs}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Cooking Steps Overview (7 cols) */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <ChefHat className="w-5 h-5 text-amber-400" />
                    <span>Tahapan Memasak Berapi</span>
                  </h3>
                  <button
                    onClick={() => setCookingMode(true)}
                    className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1"
                  >
                    Buka Mode Fokus <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  {recipe.steps?.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-full bg-orange-600/30 border border-orange-500/50 text-orange-300 text-xs font-bold flex items-center justify-center">
                            {step.step}
                          </span>
                          <h4 className="text-sm font-bold text-white">{step.title}</h4>
                        </div>
                        <div className="flex items-center gap-2">
                          {step.hasFlame && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-600/30 text-red-400 border border-red-500/40 flex items-center gap-1">
                              <Flame className="w-3 h-3 text-red-400" /> Ada Api
                            </span>
                          )}
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {step.duration}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 pl-8 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setCookingMode(true)}
                  className="w-full mt-4 py-3 rounded-2xl bg-gradient-to-r from-orange-500 via-red-600 to-amber-500 text-white font-bold text-sm shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 transition-all flex items-center justify-center gap-2"
                >
                  <Flame className="w-5 h-5 animate-flame-pulse" />
                  <span>Mulai Masak Sekarang (Dengan Timer & Suara)</span>
                </button>
              </div>

            </div>
          ) : (
            /* Focus Cooking Mode (Step-by-Step with Timer & Voice) */
            <div className="p-6 sm:p-10 space-y-8 animate-fadeIn">
              
              {/* Step Progress Bar */}
              <div>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                  <span className="font-bold text-orange-400">
                    Langkah {currentStepIndex + 1} dari {recipe.steps?.length}
                  </span>
                  <span>{Math.round(((currentStepIndex + 1) / recipe.steps?.length) * 100)}% Selesai</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-300"
                    style={{
                      width: `${((currentStepIndex + 1) / recipe.steps?.length) * 100}%`
                    }}
                  />
                </div>
              </div>

              {/* Current Step Card */}
              {currentStep && (
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#161726] to-[#1d1216] border-2 border-orange-500/50 shadow-2xl relative space-y-6">
                  
                  {/* Step Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-600 to-red-600 text-white font-black text-lg flex items-center justify-center shadow-lg shadow-orange-500/30">
                        {currentStep.step}
                      </span>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-black text-white">
                          {currentStep.title}
                        </h2>
                        <span className="text-xs text-amber-300/80 font-medium">
                          Estimasi: {currentStep.duration}
                        </span>
                      </div>
                    </div>

                    {/* Voice Assistant Button */}
                    <button
                      onClick={() => speakText(`${currentStep.title}. ${currentStep.desc}`)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                        isSpeaking
                          ? 'bg-amber-500 text-black border-amber-400 animate-pulse'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                      title="Bacakan langkah ini dengan suara"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>{isSpeaking ? 'Hentikan Suara' : 'Bacakan Suara Chef'}</span>
                    </button>
                  </div>

                  {/* Flame warning banner in step */}
                  {currentStep.hasFlame && (
                    <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 flex items-center gap-3 text-red-300 text-xs sm:text-sm font-semibold">
                      <Flame className="w-5 h-5 text-red-400 animate-bounce shrink-0" />
                      <span>
                        Tahap ini melibatkan nyala api atau wajan bersuhu ekstrem! Jaga jarak aman dan gunakan peralatan tahan panas.
                      </span>
                    </div>
                  )}

                  {/* Step Description in big comfortable font */}
                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-medium">
                    {currentStep.desc}
                  </p>

                  {/* Integrated Cooking Countdown Timer */}
                  <div className="p-5 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl sm:text-4xl font-mono font-black text-orange-400">
                        {formatTimer(timerSeconds)}
                      </div>
                      <div className="text-xs text-gray-400">
                        <span className="font-bold text-white block">Timer Langkah Ini</span>
                        <span>{timerSeconds === 0 ? 'Siap dimulai' : timerRunning ? 'Menghitung mundur...' : 'Dijeda'}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {timerSeconds === 0 ? (
                        <button
                          onClick={() => handleStartStepTimer(currentStep.duration)}
                          className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md"
                        >
                          <Play className="w-4 h-4" />
                          <span>Mulai Timer ({currentStep.duration})</span>
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={() => setTimerRunning(!timerRunning)}
                            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm flex items-center gap-1.5"
                          >
                            {timerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                            <span>{timerRunning ? 'Jeda' : 'Lanjut'}</span>
                          </button>
                          <button
                            onClick={() => {
                              setTimerRunning(false);
                              setTimerSeconds(timerInitial);
                            }}
                            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300"
                            title="Reset Timer"
                          >
                            <RotateCcw className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handlePrevStep}
                  disabled={currentStepIndex === 0}
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-white text-sm font-bold border border-white/10 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Sebelumnya</span>
                </button>

                <button
                  onClick={handleNextStep}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white text-sm font-black shadow-lg shadow-orange-500/30 transition-all hover:scale-105"
                >
                  <span>
                    {currentStepIndex === recipe.steps?.length - 1
                      ? 'Selesai & Sajikan! 🎉'
                      : 'Langkah Berikutnya'}
                  </span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
