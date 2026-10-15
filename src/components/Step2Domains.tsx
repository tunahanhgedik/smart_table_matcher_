import React from 'react';
import { DOMAINS } from '../data/matchingData.ts';

interface Step2DomainsProps {
  selectedDomains: string[];
  onToggleDomain: (domainId: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Step2Domains: React.FC<Step2DomainsProps> = ({
  selectedDomains,
  onToggleDomain,
  onNext,
  onPrev,
}) => {
  const count = selectedDomains.length;

  return (
    <div className="flex flex-col w-full pb-24 animate-in fade-in duration-200">
      {/* Top Meta Section */}
      <div className="flex items-center justify-between pt-1 pb-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dee8ff] text-[#424753] text-[12px] font-semibold font-body">
          <span className="w-2 h-2 rounded-full bg-[#0058bd] animate-pulse"></span>
          <span>BÖLÜM 2 • 1/5</span>
        </div>

        <div
          className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all duration-300 font-body ${
            count > 0
              ? 'bg-[#0058bd] text-white shadow-sm scale-105'
              : 'bg-white text-[#727785] border border-[#dee8ff]'
          }`}
        >
          {count > 0 ? `${count} seçildi` : 'Seçim yapınız'}
        </div>
      </div>

      {/* Header & Instructions */}
      <div className="mt-1 mb-4">
        <h2 className="text-[22px] font-bold text-[#111c2d] tracking-tight font-headline">
          Hangi konularda sohbet etmek istersin?
        </h2>
        <p className="text-[13px] text-[#424753] mt-1">
          İlgi duyduğun alanları seç, seni en uygun masayla eşleştirelim. (Birden fazla seçebilirsin)
        </p>
      </div>

      {/* 8 Card Interactive Grid */}
      <div className="grid grid-cols-2 gap-2.5" id="topic-grid">
        {DOMAINS.map((domain) => {
          const isSelected = selectedDomains.includes(domain.id);
          return (
            <button
              key={domain.id}
              type="button"
              onClick={() => onToggleDomain(domain.id)}
              className={`group text-left flex flex-col justify-between p-3 rounded-2xl transition-all duration-200 active:scale-[0.98] relative overflow-hidden h-[130px] border cursor-pointer ${
                isSelected
                  ? 'bg-[#f0f3ff] border-[#0058bd] shadow-sm ring-1 ring-[#0058bd]/20'
                  : 'bg-white border-[#dee8ff]/70 hover:border-[#adc6ff] shadow-[0_2px_8px_rgba(17,28,45,0.03)] hover:shadow-md'
              }`}
            >
              <div className="flex items-start justify-between w-full">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-[#0058bd] text-white'
                      : 'bg-[#dee8ff] text-[#0058bd] group-hover:bg-[#d8e3fb]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[19px]">{domain.icon}</span>
                </div>
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#0058bd] text-white scale-105'
                      : 'bg-[#e7eeff] text-transparent'
                  }`}
                >
                  <span className="material-symbols-outlined text-[13px] font-bold">check</span>
                </div>
              </div>

              <div className="z-10">
                <h3
                  className={`text-[13px] font-semibold leading-tight font-headline transition-colors ${
                    isSelected ? 'text-[#0058bd]' : 'text-[#111c2d]'
                  }`}
                >
                  {domain.title}
                </h3>
                <p className="text-[11px] text-[#424753] line-clamp-2 mt-1 leading-tight font-body">
                  {domain.desc}
                </p>
              </div>

              {isSelected && (
                <div className="absolute inset-0 bg-[#0058bd]/5 pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>

      {/* Sticky Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#f9f9ff]/90 backdrop-blur-md z-30 border-t border-[#dee8ff]/60">
        <div className="max-w-lg mx-auto w-full flex items-center gap-3">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Önceki Soru"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#dee8ff] text-[#424753] hover:text-[#111c2d] hover:bg-[#d8e3fb] active:scale-95 transition-all shrink-0 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">chevron_left</span>
          </button>

          <button
            type="button"
            onClick={onNext}
            className={`flex-1 h-12 px-5 rounded-full font-semibold text-[14px] font-headline shadow-md flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer ${
              count > 0
                ? 'bg-[#0058bd] hover:bg-[#2771df] text-white'
                : 'bg-[#cfdaf2] text-[#424753] opacity-80'
            }`}
          >
            <span>Sonraki Soru (2/5)</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
