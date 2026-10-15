import React from 'react';
import { EXPECTATION_OPTIONS } from '../data/matchingData.ts';

interface Step2ExpectationsProps {
  selectedExpectation: string;
  onSelectExpectation: (expectationId: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Step2Expectations: React.FC<Step2ExpectationsProps> = ({
  selectedExpectation,
  onSelectExpectation,
  onNext,
  onPrev,
}) => {
  return (
    <div className="flex flex-col w-full pb-24 animate-in fade-in duration-200">
      {/* 5-step progress bar (4 filled, 1 empty) */}
      <div
        className="flex items-center gap-1.5 w-full mb-3 px-0.5"
        role="progressbar"
        aria-label="Bölüm İlerlemesi"
        aria-valuenow={4}
        aria-valuemin={1}
        aria-valuemax={5}
      >
        <div className="h-1.5 flex-1 rounded-full bg-[#0058bd] transition-all duration-300" />
        <div className="h-1.5 flex-1 rounded-full bg-[#0058bd] transition-all duration-300" />
        <div className="h-1.5 flex-1 rounded-full bg-[#0058bd] transition-all duration-300" />
        <div className="h-1.5 flex-1 rounded-full bg-[#0058bd] transition-all duration-300 shadow-sm" />
        <div className="h-1.5 flex-1 rounded-full bg-[#d8e3fb] transition-all duration-300" />
      </div>

      {/* Pill Badge */}
      <div className="flex items-center justify-between w-full mb-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dee8ff] text-[#111c2d]">
          <span className="w-2 h-2 rounded-full bg-[#0058bd] animate-pulse"></span>
          <span className="text-[12px] font-semibold tracking-wide font-body">BÖLÜM 2 • 4/5</span>
        </div>
        <span className="text-[12px] text-[#006e2c] font-semibold bg-[#86f898]/40 px-2.5 py-0.5 rounded-full font-body">
          Ortak Hedefler
        </span>
      </div>

      {/* Question Framing Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f0f3ff] via-[#e7eeff] to-[#dee8ff] p-5 mb-4 shadow-sm border border-[#dee8ff]">
        <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-[#0058bd]/10 blur-xl pointer-events-none" />
        <div className="flex items-start gap-3 relative z-10">
          <div className="w-10 h-10 rounded-full bg-[#0058bd] flex items-center justify-center shrink-0 shadow-sm text-white">
            <span className="material-symbols-outlined text-[20px]">psychology_alt</span>
          </div>
          <div className="flex flex-col min-w-0">
            <h2 className="text-[20px] font-bold text-[#111c2d] leading-snug tracking-tight mb-1 font-headline">
              Bu etkinlikten temel beklentin nedir?
            </h2>
            <p className="text-[13px] text-[#424753] leading-relaxed font-body">
              Seni benzer hedefleri ve motivasyonu olan katılımcılarla aynı masada buluşturmak için öğrenmek istiyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Option Cards */}
      <div
        className="flex flex-col gap-3 w-full"
        role="radiogroup"
        aria-label="Temel Beklenti Seçimi"
      >
        {EXPECTATION_OPTIONS.map((opt) => {
          const isSelected = selectedExpectation === opt.id;
          return (
            <div
              key={opt.id}
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onClick={() => onSelectExpectation(opt.id)}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  onSelectExpectation(opt.id);
                }
              }}
              className={`group relative flex items-start gap-3.5 p-4 rounded-2xl transition-all duration-200 cursor-pointer border ${
                isSelected
                  ? 'bg-[#d8e2ff]/35 border-[#0058bd] shadow-sm ring-1 ring-[#0058bd]/20'
                  : 'bg-white border-[#dee8ff]/70 hover:border-[#adc6ff] shadow-sm hover:shadow-md'
              }`}
            >
              {/* Icon Container */}
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 shadow-xs transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#0058bd] text-white shadow-sm'
                    : 'bg-[#dee8ff] text-[#0058bd] group-hover:bg-[#d8e3fb]'
                }`}
              >
                <span className="material-symbols-outlined text-[22px]">{opt.icon}</span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 min-w-0 pt-0.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[14px] font-semibold text-[#111c2d] leading-tight font-headline">
                    {opt.title}
                  </h3>
                  {/* Radio Indicator */}
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'bg-[#0058bd]' : 'bg-[#d8e3fb]'
                    }`}
                  >
                    <span
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        isSelected ? 'bg-white scale-100' : 'bg-transparent scale-0'
                      }`}
                    />
                  </div>
                </div>
                <p className="text-[12px] text-[#424753] mt-1 leading-normal font-body">
                  {opt.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Navigation Buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#f9f9ff]/90 backdrop-blur-md z-30 border-t border-[#dee8ff]/60">
        <div className="max-w-lg mx-auto w-full flex items-center gap-3">
          <button
            type="button"
            onClick={onPrev}
            className="flex-1 h-12 px-4 rounded-full bg-[#dee8ff] text-[#111c2d] hover:bg-[#d8e3fb] font-semibold text-[14px] font-headline flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Önceki</span>
          </button>

          <button
            type="button"
            onClick={onNext}
            className="flex-[1.4] h-12 px-5 rounded-full bg-[#0058bd] hover:bg-[#2771df] text-white font-semibold text-[14px] font-headline flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all cursor-pointer"
          >
            <span>Sonraki Soru (5/5)</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
