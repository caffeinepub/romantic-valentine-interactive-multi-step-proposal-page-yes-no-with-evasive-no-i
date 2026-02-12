import { useState } from 'react';
import { ProposalStep } from './steps/ProposalStep';
import { GoodChoiceStep } from './steps/GoodChoiceStep';
import { ShayariStep } from './steps/ShayariStep';
import { MusicStep } from './steps/MusicStep';
import { QuotesStep } from './steps/QuotesStep';
import { DateIdeasStep } from './steps/DateIdeasStep';
import { ShareSection } from './ShareSection';

type Step = 'proposal' | 'goodChoice' | 'shayari' | 'music' | 'quotes' | 'dateIdeas';

export function ValentineFlow() {
  const [currentStep, setCurrentStep] = useState<Step>('proposal');
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    setCurrentStep('goodChoice');
  };

  const handleNext = () => {
    const stepOrder: Step[] = ['proposal', 'goodChoice', 'shayari', 'music', 'quotes', 'dateIdeas'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const stepOrder: Step[] = ['proposal', 'goodChoice', 'shayari', 'music', 'quotes', 'dateIdeas'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 1) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-white dark:from-rose-950 dark:via-pink-950 dark:to-gray-900">
      <div className="fixed inset-0 opacity-5 pointer-events-none bg-hearts-pattern" />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 gap-6">
        <div className="w-full max-w-2xl">
          {currentStep === 'proposal' && <ProposalStep onAccept={handleAccept} />}
          {currentStep === 'goodChoice' && <GoodChoiceStep onNext={handleNext} />}
          {currentStep === 'shayari' && <ShayariStep onNext={handleNext} onBack={handleBack} />}
          {currentStep === 'music' && <MusicStep onNext={handleNext} onBack={handleBack} />}
          {currentStep === 'quotes' && <QuotesStep onNext={handleNext} onBack={handleBack} />}
          {currentStep === 'dateIdeas' && <DateIdeasStep onBack={handleBack} />}
        </div>
        
        {currentStep === 'proposal' && (
          <div className="w-full max-w-2xl">
            <ShareSection />
          </div>
        )}
      </div>
    </div>
  );
}
