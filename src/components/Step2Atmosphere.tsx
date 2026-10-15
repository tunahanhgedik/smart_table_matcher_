import React from 'react';
import { ATMOSPHERE_OPTIONS } from '../data/matchingData.ts';

interface Step2AtmosphereProps {
  selectedAtmosphere: string;
  onSelectAtmosphere: (atmosphereId: string) => void;
  onSubmit: () => void;
  onPrev: () => void;
  isSubmitting?: boolean;
}

export const Step2Atmosphere: React.FC<Step2AtmosphereProps> = ({
  selectedAtmosphere,
  onSelectAtmosphere,
  onSubmit,
  onPrev,
  isSubmitting = false,
}) => {
  return (
    <div className="flex flex-col w-full pb-24 animate-in fade-in duration-200">
      {/* Progress & Meta Header */}
      <section className="flex flex-col gap-2 mt-1 mb-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#d8e3fb] text-[#111c2d]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0058bd] animate-pulse"></span>
            <span className="text-[11px] font-bold tracking-wider uppercase font-body">
              BÖLÜM 2 • 5/5
            </span>
          </div>
          <span className="text-[12px] text-[#006e2c] font-semibold bg-[#86f898]/40 px-2.5 py-0.5 rounded-full font-body">
            Son Dokunuş
          </span>
        </div>

        {/* Segmented Brand Progress Indicator (4 Google colors) */}
        <div
          className="w-full h-1.5 rounded-full bg-[#d8e3fb] overflow-hidden flex gap-0.5 mt-1"
          aria-label="Google Renkleri İlerleme Çubuğu"
        >
          <div className="h-full w-1/4 bg-[#4285F4] rounded-l-full"></div>
          <div className="h-full w-1/4 bg-[#EA4335]"></div>
          <div className="h-full w-1/4 bg-[#FBBC04]"></div>
          <div className="h-full w-1/4 bg-[#34A853] rounded-r-full"></div>
        </div>
      </section>

      {/* Question Header Section */}
      <section className="flex flex-col mb-4">
        <h2 className="text-[22px] font-bold text-[#111c2d] tracking-tight mb-1 font-headline">
          Nasıl bir masa ortamında daha rahat edersin?
        </h2>
        <p className="text-[13px] text-[#424753] leading-relaxed font-body">
          Enerjine en uygun masayla seni eşleştirmek için son dokunuş.
        </p>
      </section>

      {/* Options List */}
      <div
        className="flex flex-col gap-3 mb-6"
        role="radiogroup"
        aria-label="Masa Atmosferi Tercihi"
      >
        {ATMOSPHERE_OPTIONS.map((opt) => {
          const isSelected = selectedAtmosphere === opt.id;
          return (
            <div
              key={opt.id}
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onClick={() => onSelectAtmosphere(opt.id)}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  onSelectAtmosphere(opt.id);
                }
              }}
              className={`group relative flex items-start gap-3.5 p-4 rounded-2xl transition-all duration-200 cursor-pointer select-none border ${
                isSelected
                  ? 'bg-white border-[#0058bd] shadow-md ring-1 ring-[#0058bd]/20'
                  : 'bg-white border-[#dee8ff]/70 hover:border-[#adc6ff] shadow-sm hover:shadow-md'
              }`}
            >
              {/* Radio Indicator */}
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  isSelected ? 'bg-[#0058bd]' : 'bg-[#dee8ff]'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-white text-[16px] font-bold transition-transform ${
                    isSelected ? 'scale-100' : 'scale-0'
                  }`}
                >
                  check
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 pr-1">
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'bg-[#d8e2ff] text-[#0058bd]' : 'bg-[#dee8ff] text-[#424753]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">{opt.icon}</span>
                  </div>
                  <span className="text-[14px] text-[#111c2d] font-semibold font-headline">
                    {opt.title}
                  </span>
                </div>
                <p className="text-[12px] text-[#424753] leading-normal font-body">
                  {opt.desc}
                </p>

                {/* Social Vibe Mini Pill */}
                <div className="inline-flex items-center gap-1.5 mt-2.5 px-2 py-0.5 rounded-full bg-[#f0f3ff] text-[#424753] text-[11px] self-start font-body font-medium">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: opt.tagColor }}
                  />
                  <span>
                    {opt.id === 'dynamic'
                      ? 'Yüksek Tempo'
                      : opt.id === 'calm'
                      ? 'Derin Dinleme'
                      : 'Esnek Ritim'}
                  </span>
                </div>
              </div>

              {isSelected && (
                <div className="absolute inset-0 rounded-2xl bg-[#0058bd]/5 pointer-events-none" />
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Wizard Actions */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#f9f9ff]/90 backdrop-blur-md z-30 border-t border-[#dee8ff]/60">
        <div className="max-w-lg mx-auto w-full flex items-center gap-3">
          <button
            type="button"
            onClick={onPrev}
            className="h-12 px-5 rounded-full bg-[#dee8ff] hover:bg-[#d8e3fb] text-[#111c2d] font-semibold text-[14px] font-headline flex items-center justify-center gap-1 shrink-0 transition-colors cursor-pointer active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Önceki</span>
          </button>

          <button
            type="button"
            onClick={onSubmit}
            disabled={isSubmitting}
            className="h-12 flex-1 px-5 rounded-full bg-[#006e2c] hover:bg-[#005320] active:scale-[0.98] text-white font-semibold text-[14px] font-headline flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Eşleştiriliyor...</span>
              </>
            ) : (
              <>
                <span>Masamı Belirle & Bitir</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
