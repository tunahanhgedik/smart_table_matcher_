import React, { useState, useEffect } from 'react';
import { Step, UserSelections } from './types.ts';
import { calculateMatchingTable, TABLES } from './data/matchingData.ts';
import { Header } from './components/Header.tsx';
import { Step1Welcome } from './components/Step1Welcome.tsx';
import { Step2Domains } from './components/Step2Domains.tsx';
import { Step2SocialStyle } from './components/Step2SocialStyle.tsx';
import { Step2Hobbies } from './components/Step2Hobbies.tsx';
import { Step2Expectations } from './components/Step2Expectations.tsx';
import { Step2Atmosphere } from './components/Step2Atmosphere.tsx';
import { Step3TableReady } from './components/Step3TableReady.tsx';
import { ParticipantProfileModal } from './components/ParticipantProfileModal.tsx';

const STORAGE_KEY = 'gdg_campus_match_state';

export default function App() {
  const [currentStep, setCurrentStep] = useState<Step>('welcome');
  const [isPhoneFrame, setIsPhoneFrame] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selections, setSelections] = useState<UserSelections>(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {}
    return {
      fullName: '',
      selectedDomains: ['web-cloud'],
      socialStyle: 'opt-c',
      hobby: 'opt-a',
      expectation: 'networking',
      atmosphere: 'dynamic',
      isCheckedIn: false,
    };
  });

  // Sync state to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(selections));
    } catch {}
  }, [selections]);

  const stepOrder: Step[] = [
    'welcome',
    'domains',
    'social_style',
    'hobbies',
    'expectations',
    'atmosphere',
    'table_ready',
  ];

  const handleNext = () => {
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleDomain = (domainId: string) => {
    setSelections((prev) => {
      const exists = prev.selectedDomains.includes(domainId);
      const updated = exists
        ? prev.selectedDomains.filter((id) => id !== domainId)
        : [...prev.selectedDomains, domainId];
      return { ...prev, selectedDomains: updated };
    });
  };

  const handleFinishStep2 = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      const matched = calculateMatchingTable(selections);
      setSelections((prev) => ({
        ...prev,
        assignedTable: matched,
      }));
      setIsSubmitting(false);
      setCurrentStep('table_ready');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 450);
  };

  const handleRestart = () => {
    setSelections({
      fullName: '',
      selectedDomains: ['web-cloud'],
      socialStyle: 'opt-c',
      hobby: 'opt-a',
      expectation: 'networking',
      atmosphere: 'dynamic',
      isCheckedIn: false,
    });
    setCurrentStep('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f9f9ff] text-[#111c2d] flex flex-col items-center">
      {/* Top Utility Bar for Presentation/Testing on Desktop viewports */}
      <div className="w-full bg-white border-b border-[#dee8ff] py-1.5 px-4 hidden sm:flex items-center justify-between text-xs text-[#424753] shadow-xs">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1" aria-hidden="true">
            <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
            <span className="w-2 h-2 rounded-full bg-[#EA4335]"></span>
            <span className="w-2 h-2 rounded-full bg-[#FBBC04]"></span>
            <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
          </div>
          <span className="font-semibold text-[#111c2d]">GDG on Campus</span>
          <span>·</span>
          <span>Info Session '26 Masa Eşleşmesi</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Quick Step Nav for Testing */}
          <div className="flex items-center gap-1 bg-[#f0f3ff] p-0.5 rounded-lg">
            <button
              type="button"
              onClick={() => setCurrentStep('welcome')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                currentStep === 'welcome' ? 'bg-white text-[#0058bd] shadow-xs' : 'hover:text-[#111c2d]'
              }`}
            >
              1. Giriş
            </button>
            <button
              type="button"
              onClick={() => setCurrentStep('domains')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                currentStep === 'domains' ? 'bg-white text-[#0058bd] shadow-xs' : 'hover:text-[#111c2d]'
              }`}
            >
              2.1 Alanlar
            </button>
            <button
              type="button"
              onClick={() => setCurrentStep('hobbies')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                currentStep === 'hobbies' ? 'bg-white text-[#0058bd] shadow-xs' : 'hover:text-[#111c2d]'
              }`}
            >
              2.3 Hobiler
            </button>
            <button
              type="button"
              onClick={() => {
                const matched = calculateMatchingTable(selections);
                setSelections((prev) => ({ ...prev, assignedTable: matched }));
                setCurrentStep('table_ready');
              }}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                currentStep === 'table_ready' ? 'bg-white text-[#0058bd] shadow-xs' : 'hover:text-[#111c2d]'
              }`}
            >
              3. Masa
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsPhoneFrame(!isPhoneFrame)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#e7eeff] text-[#0058bd] hover:bg-[#dee8ff] font-medium cursor-pointer"
          >
            <span className="material-symbols-outlined text-[15px]">
              {isPhoneFrame ? 'fullscreen' : 'smartphone'}
            </span>
            <span>{isPhoneFrame ? 'Geniş Görünüm' : 'Mobil Çerçeve'}</span>
          </button>
        </div>
      </div>

      {/* Main Container - Responsive or Mobile Device Frame */}
      <div
        className={`w-full flex-1 flex flex-col transition-all duration-200 ${
          isPhoneFrame
            ? 'max-w-[420px] my-4 rounded-[40px] shadow-2xl border-[8px] border-[#263143] overflow-hidden bg-[#f9f9ff] min-h-[840px]'
            : 'max-w-lg min-h-screen'
        }`}
      >
        {/* Device Frame Notch simulation in phone frame mode */}
        {isPhoneFrame && (
          <div className="w-full bg-[#263143] pt-2 pb-1 flex justify-center items-center">
            <div className="w-20 h-4 bg-black rounded-full" />
          </div>
        )}

        {/* Global Header */}
        <Header
          currentStep={currentStep}
          onBack={handlePrev}
          canGoBack={currentStep !== 'welcome'}
          participantName={selections.fullName}
          onOpenProfile={() => setIsProfileOpen(true)}
        />

        {/* Screen Contents */}
        <main className="flex-1 w-full px-4 pt-4 flex flex-col">
          {currentStep === 'welcome' && (
            <Step1Welcome
              initialName={selections.fullName}
              onContinue={(name) => {
                setSelections((prev) => ({ ...prev, fullName: name }));
                handleNext();
              }}
            />
          )}

          {currentStep === 'domains' && (
            <Step2Domains
              selectedDomains={selections.selectedDomains}
              onToggleDomain={handleToggleDomain}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          )}

          {currentStep === 'social_style' && (
            <Step2SocialStyle
              selectedOption={selections.socialStyle}
              onSelectOption={(val) => setSelections((prev) => ({ ...prev, socialStyle: val }))}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          )}

          {currentStep === 'hobbies' && (
            <Step2Hobbies
              selectedHobby={selections.hobby}
              onSelectHobby={(val) => setSelections((prev) => ({ ...prev, hobby: val }))}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          )}

          {currentStep === 'expectations' && (
            <Step2Expectations
              selectedExpectation={selections.expectation}
              onSelectExpectation={(val) =>
                setSelections((prev) => ({ ...prev, expectation: val }))
              }
              onNext={handleNext}
              onPrev={handlePrev}
            />
          )}

          {currentStep === 'atmosphere' && (
            <Step2Atmosphere
              selectedAtmosphere={selections.atmosphere}
              onSelectAtmosphere={(val) =>
                setSelections((prev) => ({ ...prev, atmosphere: val }))
              }
              onSubmit={handleFinishStep2}
              onPrev={handlePrev}
              isSubmitting={isSubmitting}
            />
          )}

          {currentStep === 'table_ready' && (
            <Step3TableReady
              selections={selections}
              table={selections.assignedTable || TABLES[0]}
              onRestart={handleRestart}
            />
          )}
        </main>
      </div>

      {/* Participant Profile / Badges Modal */}
      <ParticipantProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        selections={selections}
        onReset={handleRestart}
      />
    </div>
  );
}
