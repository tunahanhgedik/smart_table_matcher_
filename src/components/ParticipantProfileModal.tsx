import React from 'react';
import { UserSelections } from '../types.ts';
import { DOMAINS } from '../data/matchingData.ts';

interface ParticipantProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  selections: UserSelections;
  onReset: () => void;
}

export const ParticipantProfileModal: React.FC<ParticipantProfileModalProps> = ({
  isOpen,
  onClose,
  selections,
  onReset,
}) => {
  if (!isOpen) return null;

  const selectedDomainTitles = DOMAINS.filter((d) =>
    selections.selectedDomains.includes(d.id)
  ).map((d) => d.title);

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-2xl p-6 shadow-2xl border border-[#dee8ff] max-h-[85vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#dee8ff]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#0058bd] text-white flex items-center justify-center font-bold text-xs">
              {selections.fullName ? selections.fullName.slice(0, 2).toUpperCase() : 'GDG'}
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-[#111c2d] font-headline">
                {selections.fullName || 'Misafir Katılımcı'}
              </h3>
              <p className="text-[11px] text-[#424753]">GDG On Campus Info Session '26</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f0f3ff] text-[#424753] hover:text-[#111c2d] flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="py-4 space-y-4">
          <div>
            <span className="text-[11px] font-semibold text-[#727785] uppercase tracking-wider block mb-1.5 font-body">
              Seçilen İlgi Alanları
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedDomainTitles.length > 0 ? (
                selectedDomainTitles.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#dee8ff] text-[#0058bd]"
                  >
                    {t}
                  </span>
                ))
              ) : (
                <span className="text-[12px] text-[#727785] italic">Henüz alan seçilmedi</span>
              )}
            </div>
          </div>

          {selections.assignedTable && (
            <div className="p-3 rounded-xl bg-[#f0f3ff] border border-[#dee8ff] flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold text-[#727785] uppercase">
                  Tahsis Edilen Masa
                </span>
                <p className="text-[16px] font-bold text-[#0058bd] font-headline">
                  {selections.assignedTable.tableNumber}
                </p>
              </div>
              <span className="text-[12px] font-semibold text-[#00722f] bg-[#86f898]/30 px-2.5 py-1 rounded-full">
                {selections.isCheckedIn ? 'Masadasınız ✓' : 'Atandı'}
              </span>
            </div>
          )}
        </div>

        <div className="pt-2 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => {
              onReset();
              onClose();
            }}
            className="w-full py-2.5 rounded-xl border border-[#ba1a1a]/30 text-[#ba1a1a] hover:bg-[#ffdad6]/20 text-[13px] font-semibold transition-colors"
          >
            Sıfırla ve Yeniden Başla
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-[#0058bd] text-white text-[13px] font-semibold shadow-xs"
          >
            Tamam
          </button>
        </div>
      </div>
    </div>
  );
};
