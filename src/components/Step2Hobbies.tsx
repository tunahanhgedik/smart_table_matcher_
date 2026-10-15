import React from 'react';
import { HOBBY_OPTIONS } from '../data/matchingData.ts';

interface Step2HobbiesProps {
  selectedHobby: string;
  onSelectHobby: (hobbyId: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Step2Hobbies: React.FC<Step2HobbiesProps> = ({
  selectedHobby,
  onSelectHobby,
  onNext,
  onPrev,
}) => {
  return (
    <div className="flex flex-col w-full pb-24 animate-in fade-in duration-200">
      {/* Sub-Progress Header */}
      <div className="flex flex-col gap-2 mt-1 mb-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#d8e2ff] text-[#004494] text-[11px] font-bold tracking-wide uppercase font-body">
            BÖLÜM 2 • 3/5
          </span>
          <span className="inline-flex items-center gap-1 text-[12px] text-[#0058bd] font-semibold bg-[#dee8ff] px-2.5 py-0.5 rounded-full font-body">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0058bd] animate-pulse"></span>
            Hobiler & Yaşam
          </span>
        </div>

        {/* 5-part segmented progress bar */}
        <div className="flex items-center gap-1.5 pt-1" aria-label="Adım 2 İlerleme Çubuğu">
          <div className="h-1.5 flex-1 rounded-full bg-[#0058bd] transition-all" />
          <div className="h-1.5 flex-1 rounded-full bg-[#0058bd] transition-all" />
          <div className="h-1.5 flex-1 rounded-full bg-[#0058bd] shadow-sm transition-all" />
          <div className="h-1.5 flex-1 rounded-full bg-[#d8e3fb] transition-all" />
          <div className="h-1.5 flex-1 rounded-full bg-[#d8e3fb] transition-all" />
        </div>
      </div>

      {/* Question Heading Banner Card with Ambient GDG Accent */}
      <div className="relative overflow-hidden rounded-2xl bg-[#f0f3ff] p-5 shadow-sm border border-[#dee8ff]/80 mb-4">
        <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-[#d8e2ff] opacity-40 blur-xl pointer-events-none" />
        <div className="absolute -left-6 -top-6 w-20 h-20 rounded-full bg-[#89fa9b] opacity-30 blur-lg pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-1.5">
          <h2 className="text-[22px] text-[#111c2d] font-bold leading-tight font-headline">
            Teknoloji dışında vaktini en çok neyle geçirirsin?
          </h2>
          <p className="text-[13px] text-[#424753] font-body">
            Masandaki arkadaşlarla sadece kod değil, ortak tutkular üzerinden de bağ kurmanı sağlıyoruz.
          </p>
        </div>
      </div>

      {/* Single Choice Cards List */}
      <div
        className="flex flex-col gap-3"
        role="radiogroup"
        aria-label="Teknoloji dışı hobiler seçim listesi"
      >
        {HOBBY_OPTIONS.map((opt) => {
          const isSelected = selectedHobby === opt.id;
          return (
            <div
              key={opt.id}
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onClick={() => onSelectHobby(opt.id)}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  onSelectHobby(opt.id);
                }
              }}
              className={`group cursor-pointer select-none relative flex items-start gap-3.5 p-4 rounded-2xl transition-all duration-200 border ${
                isSelected
                  ? 'bg-white border-[#0058bd] shadow-md ring-1 ring-[#0058bd]/20'
                  : 'bg-white border-[#dee8ff]/70 hover:border-[#adc6ff] shadow-sm hover:shadow-md'
              }`}
            >
              {/* Icon Container */}
              <div
                className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center transition-colors ${
                  isSelected
                    ? 'bg-[#d8e2ff] text-[#0058bd]'
                    : 'bg-[#dee8ff] text-[#424753] group-hover:bg-[#d8e3fb]'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={{ fontVariationSettings: isSelected ? "'FILL' 1" : "'FILL' 0" }}
                >
                  {opt.icon}
                </span>
              </div>

              {/* Text info */}
              <div className="flex-1 min-w-0 pr-2">
                <span className="text-[14px] font-semibold text-[#111c2d] leading-snug font-headline block">
                  {opt.title}
                </span>
                <p className="text-[12px] text-[#424753] mt-0.5 leading-relaxed font-body">
                  {opt.desc}
                </p>
              </div>

              {/* Radio indicator */}
              <div className="shrink-0 pt-0.5">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    isSelected ? 'bg-[#0058bd]' : 'bg-[#d8e3fb]'
                  }`}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      isSelected ? 'bg-white scale-100' : 'bg-transparent scale-0'
                    }`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#f9f9ff]/90 backdrop-blur-md z-30 border-t border-[#dee8ff]/60">
        <div className="max-w-lg mx-auto w-full flex items-center gap-3">
          <button
            type="button"
            onClick={onPrev}
            className="h-12 px-5 rounded-full bg-[#dee8ff] text-[#424753] hover:text-[#111c2d] hover:bg-[#d8e3fb] font-semibold text-[14px] font-headline flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Önceki</span>
          </button>

          <button
            type="button"
            onClick={onNext}
            className="flex-1 h-12 rounded-full bg-[#0058bd] hover:bg-[#2771df] text-white font-semibold text-[14px] font-headline flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Sonraki Soru (4/5)</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
