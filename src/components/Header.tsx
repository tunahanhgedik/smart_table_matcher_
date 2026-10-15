import React from 'react';
import { Step } from '../types.ts';

interface HeaderProps {
  currentStep: Step;
  onBack: () => void;
  canGoBack: boolean;
  participantName?: string;
  onOpenProfile?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentStep,
  onBack,
  canGoBack,
  participantName,
  onOpenProfile,
}) => {
  const getStepTitle = (step: Step): string => {
    switch (step) {
      case 'welcome':
        return 'Giriş Ve Hoş Geldin';
      case 'domains':
        return 'Domain Selection';
      case 'social_style':
      case 'hobbies':
      case 'expectations':
      case 'atmosphere':
        return 'Social Style';
      case 'table_ready':
        return 'Masan Hazır';
      default:
        return 'GDG on Campus';
    }
  };

  const getMainStepNumber = (step: Step): number => {
    if (step === 'welcome') return 1;
    if (step === 'table_ready') return 3;
    return 2;
  };

  const mainStep = getMainStepNumber(currentStep);

  return (
    <header className="sticky top-0 w-full z-40 bg-[#f9f9ff]/90 backdrop-blur-xl border-b border-[#dee8ff]/50 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="px-4 py-3 flex flex-col justify-between max-w-lg mx-auto">
        <div className="flex items-center justify-between min-h-[48px]">
          <div className="flex items-center gap-1.5">
            {canGoBack ? (
              <button
                type="button"
                onClick={onBack}
                aria-label="Geri"
                className="w-10 h-10 -ml-1 rounded-full flex items-center justify-center text-[#424753] hover:text-[#111c2d] hover:bg-[#dee8ff]/50 active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[22px]">arrow_back</span>
              </button>
            ) : (
              <div className="w-10 h-10 -ml-1 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#0058bd] text-[22px]">hub</span>
              </div>
            )}
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-medium tracking-wide text-[#0058bd] uppercase font-body">
                Info Session - GDG on Campus
              </span>
              <h1 className="text-[19px] font-bold text-[#111c2d] truncate font-headline leading-tight">
                {getStepTitle(currentStep)}
              </h1>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenProfile}
            title={participantName ? `Katılımcı: ${participantName}` : 'GDG Katılımcı Profili'}
            className="w-9 h-9 rounded-full bg-[#0058bd] hover:bg-[#2771df] text-white flex items-center justify-center shrink-0 shadow-sm active:scale-95 transition-all"
          >
            {participantName ? (
              <span className="text-xs font-bold font-headline uppercase">
                {participantName.slice(0, 2)}
              </span>
            ) : (
              <span className="material-symbols-outlined text-white text-[19px]">person</span>
            )}
          </button>
        </div>

        {/* 3-Step Master Navigation Bar */}
        <div className="w-full flex items-center gap-2 pt-2" role="progressbar" aria-label="Adım İlerlemesi">
          <div className="flex-1 flex flex-col gap-1">
            <div
              className={`h-1.5 w-full rounded-full transition-all duration-300 ${
                mainStep >= 1 ? 'bg-[#0058bd]' : 'bg-[#d8e3fb]'
              }`}
            />
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <div
              className={`h-1.5 w-full rounded-full transition-all duration-300 ${
                mainStep >= 2 ? 'bg-[#0058bd]' : 'bg-[#d8e3fb]'
              }`}
            />
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <div
              className={`h-1.5 w-full rounded-full transition-all duration-300 ${
                mainStep >= 3 ? 'bg-[#0058bd]' : 'bg-[#d8e3fb]'
              }`}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
