import {AudioProvider} from './audioContext';
import {QuizProvider} from './quizContext';
import {UIProvider} from './uiContext';

const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <AudioProvider>
      <UIProvider>
        <QuizProvider>{children}</QuizProvider>
      </UIProvider>
    </AudioProvider>
  );
};

export {Providers, Providers as default};
