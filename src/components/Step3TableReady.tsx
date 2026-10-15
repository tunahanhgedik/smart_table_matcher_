import React, { useState } from 'react';
import { TableAssignment, UserSelections } from '../types.ts';

interface Step3TableReadyProps {
  selections: UserSelections;
  table: TableAssignment;
  onRestart: () => void;
}

export const Step3TableReady: React.FC<Step3TableReadyProps> = ({
  selections,
  table,
  onRestart,
}) => {
  const [isCheckedIn, setIsCheckedIn] = useState(selections.isCheckedIn || false);
  const [icebreakerIndex, setIcebreakerIndex] = useState(0);
  const [showRoster, setShowRoster] = useState(false);

  const allIcebreakers = [table.icebreaker, ...(table.backupIcebreakers || [])];
  const currentIcebreaker = allIcebreakers[icebreakerIndex % allIcebreakers.length];

  const handleCheckIn = () => {
    setIsCheckedIn(true);
  };

  const handleNextIcebreaker = () => {
    setIcebreakerIndex((prev) => (prev + 1) % allIcebreakers.length);
  };

  return (
    <div className="flex flex-col w-full pb-8 pt-1 animate-in fade-in duration-300">
      {/* Kutlama Başlığı */}
      <div className="flex flex-col items-start mb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#86f898]/40 text-[#00722f] text-[12px] font-semibold mb-2 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#006e2c] animate-pulse"></span>
          <span>Masa Eşleşmesi Tamamlandı</span>
        </div>

        <h2 className="text-[24px] font-bold text-[#111c2d] tracking-tight font-headline">
          Masanız hazırlandı
        </h2>
        <p className="text-[13px] text-[#424753] mt-1 leading-snug font-body">
          {selections.fullName ? `${selections.fullName}, ilgi` : 'Katılımcı ilgi'} alanlarına ve dengeli sohbet gruplarına göre belirlendi.
        </p>
      </div>

      {/* Devasa Masa Numarası Kartı */}
      <div className="relative w-full bg-white rounded-2xl shadow-sm border border-[#dee8ff] overflow-hidden mb-4">
        {/* Bilet Üst Başlık Şeridi */}
        <div className="px-5 py-3 bg-[#f0f3ff] border-b border-[#dee8ff]/70 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0058bd] text-[19px]">
              table_restaurant
            </span>
            <span className="text-[12px] text-[#111c2d] font-bold tracking-wide uppercase font-headline">
              Masa Tahsisi
            </span>
          </div>

          <span className="text-[11px] font-semibold text-[#0058bd] bg-[#dee8ff] px-2 py-0.5 rounded-full font-body">
            {table.currentCount + 1}/{table.capacity} Koltuk Dolu
          </span>
        </div>

        {/* Masa Odak Alanı */}
        <div className="flex flex-col items-center text-center p-6">
          <span className="text-[11px] text-[#424753] font-semibold uppercase tracking-wider mb-1 font-body">
            Ayrılan Masa
          </span>
          <div className="flex items-baseline justify-center gap-2 my-1">
            <span className="text-[34px] leading-none text-[#0058bd] font-extrabold tracking-tight font-headline">
              {table.tableNumber}
            </span>
          </div>

          <p className="text-[13px] font-semibold text-[#111c2d] mt-2 font-headline">
            {table.name}
          </p>

          <div className="flex items-center gap-2 mt-2 flex-wrap justify-center">
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#dee8ff] text-[#0058bd]">
              {table.domainFocus}
            </span>
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#f0f3ff] text-[#424753]">
              {table.vibe}
            </span>
          </div>
        </div>

        {/* Masa Arkadaşları Önizleme */}
        <div className="px-5 py-3 bg-[#f9f9ff] border-t border-[#dee8ff]/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2 overflow-hidden">
              {table.members.map((m, idx) => (
                <div
                  key={idx}
                  style={{ backgroundColor: m.avatarColor }}
                  title={`${m.name} (${m.role})`}
                  className="inline-block h-7 w-7 rounded-full ring-2 ring-white text-[10px] font-bold text-white flex items-center justify-center shrink-0 uppercase"
                >
                  {m.name.slice(0, 2)}
                </div>
              ))}
              <div className="inline-block h-7 w-7 rounded-full bg-[#0058bd] ring-2 ring-white text-[10px] font-bold text-white flex items-center justify-center shrink-0">
                Sen
              </div>
            </div>
            <span className="text-[11px] text-[#424753] font-medium">
              +{table.members.length} masada seni bekliyor
            </span>
          </div>

          <button
            type="button"
            onClick={() => setShowRoster(!showRoster)}
            className="text-[11px] text-[#0058bd] font-semibold hover:underline"
          >
            {showRoster ? 'Kapat' : 'Gör'}
          </button>
        </div>

        {showRoster && (
          <div className="p-4 bg-white border-t border-[#dee8ff]/60 space-y-2 animate-in fade-in duration-150">
            <p className="text-[11px] font-bold text-[#727785] uppercase tracking-wider mb-2">
              Masadaki Diğer Katılımcılar
            </p>
            {table.members.map((m, idx) => (
              <div key={idx} className="flex items-center justify-between py-1 border-b border-[#f0f3ff] last:border-0">
                <div className="flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-full text-white text-[9px] font-bold flex items-center justify-center"
                    style={{ backgroundColor: m.avatarColor }}
                  >
                    {m.name.slice(0, 1)}
                  </span>
                  <span className="text-[12px] font-semibold text-[#111c2d]">{m.name}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] text-[#727785]">{m.role}</span>
                  <span className="text-[10px] bg-[#dee8ff] text-[#0058bd] px-1.5 py-0.5 rounded">
                    {m.domain}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Masada İlk Sohbet Başlatıcı (Icebreaker) Kartı */}
      <div className="w-full bg-white rounded-2xl p-5 shadow-sm border border-[#dee8ff] mb-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#0058bd]/10 text-[#0058bd] flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px]">forum</span>
            </div>
            <span className="text-[14px] text-[#111c2d] font-semibold font-headline">
              İlk Sohbet Başlatıcı
            </span>
          </div>

          <button
            type="button"
            onClick={handleNextIcebreaker}
            title="Başka bir soru öner"
            className="text-[11px] text-[#0058bd] hover:text-[#2771df] font-semibold flex items-center gap-1 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[15px]">refresh</span>
            <span>Yeni Soru</span>
          </button>
        </div>

        <div className="p-4 rounded-xl bg-[#f0f3ff] border-l-4 border-[#0058bd] relative transition-all">
          <p className="text-[15px] leading-relaxed text-[#111c2d] font-medium font-body italic">
            {currentIcebreaker}
          </p>
        </div>
        <p className="text-[11px] text-[#727785]">
          Masaya oturduğunda buzları eritmek için bu soruyu masadakilere sorabilirsin!
        </p>
      </div>

      {/* Aksiyon Alanı: Masamdayım Butonu */}
      <div className="w-full flex flex-col gap-2.5 mt-2">
        <button
          type="button"
          onClick={handleCheckIn}
          className={`w-full h-14 rounded-full font-semibold text-[15px] font-headline flex items-center justify-center gap-2.5 shadow-md active:scale-[0.98] transition-all duration-200 cursor-pointer ${
            isCheckedIn
              ? 'bg-[#86f898] text-[#00722f]'
              : 'bg-[#0058bd] hover:bg-[#2771df] text-white hover:shadow-lg'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">
            {isCheckedIn ? 'done_all' : 'check_circle'}
          </span>
          <span>{isCheckedIn ? 'Harika! Keyifli Sohbetler ✨' : 'Masamdayım & Yerimi Aldım'}</span>
        </button>

        <button
          type="button"
          onClick={onRestart}
          className="w-full py-2.5 text-center text-[12px] font-semibold text-[#424753] hover:text-[#0058bd] transition-colors"
        >
          Baştan Başla veya Farklı Alanlar Seç
        </button>
      </div>
    </div>
  );
};
