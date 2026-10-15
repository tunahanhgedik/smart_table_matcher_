import React, { useState } from 'react';

interface Step1WelcomeProps {
  initialName: string;
  onContinue: (name: string) => void;
}

export const Step1Welcome: React.FC<Step1WelcomeProps> = ({ initialName, onContinue }) => {
  const [fullName, setFullName] = useState(initialName);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = fullName.trim();
    if (!trimmed) {
      setHasError(true);
      return;
    }
    setHasError(false);
    onContinue(trimmed);
  };

  const handleClear = () => {
    setFullName('');
    setHasError(false);
  };

  return (
    <div className="flex flex-col w-full pb-8 space-y-5 animate-in fade-in duration-200">
      {/* Visual Header & Community Illustration Badge */}
      <div className="w-full rounded-2xl bg-white p-6 border border-[#dee8ff]/60 shadow-[0_2px_12px_rgba(17,28,45,0.04)] flex flex-col items-start text-left relative overflow-hidden">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC04]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]"></span>
          </div>
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#424753] font-body pl-1">
            Google Developer Groups
          </span>
        </div>

        <h2 className="text-[24px] font-bold text-[#111c2d] tracking-tight leading-snug font-headline mb-2">
          Giriş & Hoş Geldin
        </h2>

        <p className="text-[14px] text-[#424753] leading-relaxed font-body mb-5">
          GDG on Campus Info Session '26 başladı! İlgi alanlarına ve deneyimine göre sohbet masana eşleşmek için adını paylaş.
        </p>

        <div className="w-full flex items-center justify-between pt-3 border-t border-[#dee8ff]/60 text-[12px] text-[#424753]">
          <div className="flex items-center gap-2 font-medium">
            <span className="material-symbols-outlined text-[17px] text-[#0058bd]">groups</span>
            <span>Öğrenci & Geliştirici Ağı</span>
          </div>
          <span className="text-[11px] text-[#0058bd] font-semibold bg-[#e7eeff] px-2 py-0.5 rounded-full">
            2026 Season
          </span>
        </div>
      </div>

      {/* Focused & Ergonomic Input Container */}
      <div className="w-full bg-white rounded-2xl p-5 border border-[#dee8ff]/60 shadow-[0_2px_12px_rgba(17,28,45,0.04)] space-y-2.5">
        <div className="flex items-center justify-between">
          <label
            htmlFor="fullNameInput"
            className="text-[13px] text-[#111c2d] font-semibold tracking-wide flex items-center gap-1.5 font-headline"
          >
            <span className="material-symbols-outlined text-[#0058bd] text-[18px]">person</span>
            Ad Soyad
          </label>
          <span className="text-[11px] font-medium text-[#424753]/80">
            Yaka kartında görünür
          </span>
        </div>

        <form onSubmit={handleSubmit} className="relative w-full">
          <div className="relative w-full">
            <input
              id="fullNameInput"
              type="text"
              name="fullName"
              autoComplete="name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (hasError && e.target.value.trim()) setHasError(false);
              }}
              placeholder="Örn: Deniz Yılmaz"
              className={`w-full h-12 pl-11 pr-11 rounded-xl bg-[#f0f3ff]/70 border text-[#111c2d] text-[14px] font-body placeholder:text-[#727785] transition-all duration-150 focus:outline-none focus:bg-white ${
                hasError
                  ? 'border-[#ba1a1a] ring-2 ring-[#ba1a1a]/20'
                  : 'border-[#dee8ff] focus:border-[#0058bd] focus:ring-2 focus:ring-[#0058bd]/15'
              }`}
            />
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#424753]/70 pointer-events-none flex items-center">
              <span className="material-symbols-outlined text-[19px]">badge</span>
            </div>

            {fullName.length > 0 && (
              <button
                type="button"
                onClick={handleClear}
                aria-label="Metni temizle"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#d8e3fb] hover:bg-[#cfdaf2] text-[#424753] flex items-center justify-center transition-all active:scale-90"
              >
                <span className="material-symbols-outlined text-[15px]">close</span>
              </button>
            )}
          </div>

          {hasError && (
            <p className="text-[12px] text-[#ba1a1a] mt-1.5 flex items-center gap-1 font-medium animate-in fade-in">
              <span className="material-symbols-outlined text-[15px]">error</span>
              Lütfen devam etmek için adınızı girin.
            </p>
          )}
        </form>

        <p className="text-[12px] text-[#424753] leading-normal font-body pl-0.5">
          Masa eşleşmende arkadaşların seni bu isimle görecek.
        </p>

        {/* Quick Demo Fillers for Fast Testing */}
        <div className="pt-2 flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] text-[#727785] font-medium">Hızlı örnek:</span>
          {['Deniz Yılmaz', 'Ece Demir', 'Ali Çelik'].map((sampleName) => (
            <button
              key={sampleName}
              type="button"
              onClick={() => {
                setFullName(sampleName);
                setHasError(false);
              }}
              className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#f0f3ff] text-[#0058bd] hover:bg-[#dee8ff] active:scale-95 transition-all"
            >
              {sampleName}
            </button>
          ))}
        </div>
      </div>

      {/* Action Section */}
      <div className="w-full pt-1 flex flex-col items-center space-y-3">
        <button
          type="button"
          onClick={() => handleSubmit()}
          className="w-full h-12 px-6 rounded-xl bg-[#0058bd] hover:bg-[#2771df] text-white text-[14px] font-semibold font-headline flex items-center justify-center gap-2 active:scale-[0.99] transition-all duration-150 shadow-sm hover:shadow-md cursor-pointer"
        >
          <span>Devam Et: İlgi Alanlarını Seç</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>

        <div className="flex items-center justify-center gap-1.5 text-[#424753] text-[12px]">
          <span className="material-symbols-outlined text-[15px] text-[#0058bd]">lock</span>
          <span>Bilgileriniz sadece etkinlik içi eşleşmede kullanılır</span>
        </div>
      </div>
    </div>
  );
};
