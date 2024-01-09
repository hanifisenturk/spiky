// ********* Quiz Types START *********

export type Question = {
  question: string;
  options: [
    {
      option: string;
      is_correct: boolean;
    },
  ];
};

export type Quiz = {
  questions: Question[];
};

export type Score = {
  point: number;
  question: number;
};

export type QuestionStatuses = {
  [key: number]: boolean | 'unanswered';
};

export type QuizContext = {
  error: boolean;
  isLoading: boolean;
  nextQuestionHandler: (isOptionTrue: boolean) => void;
  activeQuestionData: Question | null;
  activeQuestionIndex: number;
  scoreData: Score;
  setScoreData: React.Dispatch<React.SetStateAction<Score>>;
  reFetchHandler: () => void;
  answerStatuses: QuestionStatuses;
  resetQuizDataHandler: () => void;
  isValidating: boolean;
};

// ********* QUIZ Types END *********

// ********* UI Types START *********

type Views = 'instructions' | 'quiz' | 'result';

export type Modal = {
  isOpen: boolean;
  component: React.ReactNode | null;
  title: string;
  className?: string;
};

export type UIContext = {
  view: Views;
  setView: React.Dispatch<React.SetStateAction<Views>>;
  setModal: React.Dispatch<React.SetStateAction<Modal>>;
};

// ********* UI Types END *********

// ********* Audio Types START *********

export type AudioContext = {
  toggleMusicHandler: () => void;
  toggleEffectHandler: () => void;
  playEffectHandler: (isCorrect: boolean) => void;
  isMusicPlaying: boolean;
  isEffectPlaying: boolean;
};

// ********* Audio Types END *********
