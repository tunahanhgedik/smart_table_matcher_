import React from 'react';
import { SOCIAL_STYLE_OPTIONS } from '../data/matchingData.ts';

interface Step2SocialStyleProps {
  selectedOption: string;
  onSelectOption: (optionId: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Step2SocialStyle: React.FC<Step2SocialStyleProps> = ({
  selectedOption,
  onSelectOption,
  onNext,
  onPrev,
}) => {
  return (
    <div className="flex flex-col w-full pb-24 animate-in fade-in duration-200">
      {/* Top Meta Section */}
      <div className="flex items-center justify-between pt-1 pb-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dee8ff] text-[#424753] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#0058bd] animate-pulse"></span>
          <span className="text-[11px] uppercase tracking-wider font-semibold font-body">
            BÖLÜM 2 • 2/5
          </span>
        </div>

        <span className="text-[12px] text-[#0058bd] font-semibold px-2.5 py-0.5 rounded-full bg-[#e7eeff] font-body">
          Sosyal Dinamik
        </span>
      </div>

      {/* Headline */}
      <div className="flex flex-col gap-1.5 mb-5 mt-1">
        <h2 className="text-[22px] font-bold text-[#111c2d] tracking-tight font-headline">
          Bir masada sohbet tarzın nasıldır?
        </h2>
        <p className="text-[13px] text-[#424753] font-body">
          Sohbet akışını dengeli kılmak için her masaya farklı iletişim tarzlarını harmanlıyoruz.
        </p>
      </div>

      {/* Radio options group */}
      <div className="flex flex-col gap-3" role="radiogroup" aria-label="Sohbet Tarzı Seçenekleri">
        {SOCIAL_STYLE_OPTIONS.map((opt) => {
          const isSelected = selectedOption === opt.id;
          return (
            <div
              key={opt.id}
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onClick={() => onSelectOption(opt.id)}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  onSelectOption(opt.id);
                }
              }}
              className={`group relative flex items-start gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-200 border ${
                isSelected
                  ? 'bg-[#dee8ff] border-[#0058bd] shadow-md'
                  : 'bg-white border-[#dee8ff]/70 hover:border-[#adc6ff] shadow-sm hover:shadow-md'
              }`}
            >
              {/* Radio Indicator */}
              <div className="mt-0.5 shrink-0">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-[#0058bd]' : 'bg-[#e7eeff]'
                  }`}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      isSelected ? 'bg-white scale-100' : 'bg-transparent scale-0'
                    }`}
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-bold shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-[#0058bd] text-white'
                        : 'bg-[#dee8ff] text-[#0058bd]'
                    }`}
                  >
                    {opt.badge}
                  </span>
                  <h3 className="text-[14px] text-[#111c2d] font-semibold leading-snug font-headline">
                    {opt.title}
                  </h3>
                </div>
                <p className="text-[12px] text-[#424753] leading-relaxed font-body">
                  {opt.desc}
                </p>
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
            className="h-12 px-5 rounded-full bg-[#dee8ff] text-[#111c2d] hover:bg-[#d8e3fb] font-semibold text-[14px] font-headline flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Önceki</span>
          </button>

          <button
            type="button"
            onClick={onNext}
            className="flex-1 h-12 px-6 rounded-full bg-[#0058bd] hover:bg-[#2771df] text-white font-semibold text-[14px] font-headline flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Sonraki Soru (3/5)</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
