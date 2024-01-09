'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import useSWR from 'swr';

import {Question, QuestionStatuses, Quiz, QuizContext} from '@/types';

import {
  QUESTION_API_ENDPOINT,
  QUESTION_POINT,
  TOTAL_QUESTION_COUNT,
} from '@/config';

import {useUIContext} from './uiContext';

import {useAudioContext} from './audioContext';

const QuizContext = createContext<QuizContext>({} as QuizContext);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const QuizProvider = ({children}: {children: React.ReactNode}) => {
  const [scoreData, setScoreData] = useState({
    point: 0,
    question: 0,
  });

  const {playEffectHandler} = useAudioContext();

  const {setView} = useUIContext();

  const [activeQuestion, setActiveQuestion] = useState(0);

  const {
    data: quizData,
    error,
    isLoading,
    isValidating,
    mutate,
  } = useSWR<Quiz>(QUESTION_API_ENDPOINT, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: true,
  });

  const [activeQuestionData, setActiveQuestionData] = useState<Question | null>(
    quizData ? quizData.questions[activeQuestion] : null,
  );

  const [answerStatuses, setAnswerStatuses] = useState<QuestionStatuses>({
    0: 'unanswered',
    1: 'unanswered',
    2: 'unanswered',
    3: 'unanswered',
    4: 'unanswered',
  });

  useEffect(() => {
    // Check if quizData is available before updating the active question data.
    if (!quizData) return;

    // Set the active question data based on the current active question index.
    setActiveQuestionData(quizData.questions[activeQuestion]);
  }, [quizData, activeQuestion]);

  const nextQuestionHandler = (isOptionTrue: boolean) => {
    // Increment the active question index.
    let activeQuestionIndex = activeQuestion;
    activeQuestionIndex++;

    // Play the sound effect based on the correctness of the option.
    playEffectHandler(isOptionTrue);

    // Update score data if the selected option is true.
    if (isOptionTrue) {
      setScoreData((prev) => {
        return {
          question: prev.question + 1,
          point: prev.point + QUESTION_POINT,
        };
      });
    }

    // Update answer statuses with the correctness of the selected option for the current question.
    setAnswerStatuses((prev) => {
      return {
        ...prev,
        [activeQuestion]: isOptionTrue,
      };
    });

    // Check if all questions have been answered, and if so, switch to the 'result' view.
    if (activeQuestionIndex === TOTAL_QUESTION_COUNT) {
      setView('result');
      return;
    }

    // Update the active question index to move to the next question.
    const nextQuestionIndex = activeQuestion + 1;
    setActiveQuestion(nextQuestionIndex);
  };

  const reFetchHandler = useCallback(() => {
    mutate();
  }, []);

  const resetQuizDataHandler = useCallback(() => {
    // Reset the quiz-related state variables.
    setScoreData({
      point: 0,
      question: 0,
    });
    setActiveQuestion(0);
    setAnswerStatuses({
      0: 'unanswered',
      1: 'unanswered',
      2: 'unanswered',
      3: 'unanswered',
      4: 'unanswered',
    });
  }, []);

  const value = useMemo(() => {
    return {
      error,
      isLoading,
      nextQuestionHandler,
      activeQuestionData,
      activeQuestionIndex: activeQuestion,
      scoreData,
      setScoreData,
      reFetchHandler,
      answerStatuses,
      resetQuizDataHandler,
      isValidating,
    };
  }, [
    error,
    isLoading,
    nextQuestionHandler,
    activeQuestionData,
    activeQuestion,
    scoreData,
    reFetchHandler,
    answerStatuses,
    resetQuizDataHandler,
    isValidating,
  ]);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

const useQuizContext = () => useContext(QuizContext);

export {QuizProvider, useQuizContext};
