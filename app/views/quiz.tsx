'use client';

import {useEffect} from 'react';
import CorrectStatus from '@/components/correctStatus';
import {Button} from '@/components/ui';

import {useQuizContext} from '@/store/quizContext';

import {motion} from 'framer-motion';

const buttonVariantGenerator = (index: number) => {
  switch (index) {
    case 0:
      return 'pinkish';
    case 1:
      return 'greenish';
    case 2:
      return 'yellowish';
    case 3:
      return 'blueish';
    default:
      return 'blueish';
  }
};

const QuizView = () => {
  const {
    activeQuestionData,
    activeQuestionIndex,
    nextQuestionHandler,
    scoreData,
    resetQuizDataHandler,
  } = useQuizContext();

  useEffect(() => {
    // reset the quiz data on mount
    resetQuizDataHandler();
  }, []);

  return (
    <motion.div
      layout
      className="w-full md:max-w-[63.5625rem] mx-auto text-black"
    >
      <div className="mb-[0.78125rem] w-full flex items-center justify-between font-bold leading-[19.36px]">
        <p>{(activeQuestionIndex + 1).toString().padStart(2, '0')}/05</p>
        <p>{scoreData.point} points</p>
      </div>

      <div className="w-full h-[0.25rem] bg-gray-300 mb-6 md:mb-12 relative">
        <motion.div
          initial={{width: 0}}
          animate={{width: `${((activeQuestionIndex + 1) / 5) * 100}%`}}
          transition={{duration: 0.5}}
          className="w-full h-full bg-black absolute top-0 left-0"
        ></motion.div>
      </div>

      <p className="font-bold text-3xl md:text-5xl md:leading-[58.09px] text-[#151515] mb-8 md:mb-16">
        {activeQuestionData?.question}
      </p>

      <div className="flex gap-6 max-w-[50.625rem] mx-auto justify-between flex-wrap">
        {activeQuestionData?.options.map((option, index) => {
          return (
            <Button
              key={index}
              onClick={() => nextQuestionHandler(option.is_correct)}
              colorVariant={buttonVariantGenerator(index)}
              className="mr-0 md:mr-4 w-full md:w-[19.9375rem]"
            >
              {index === 0 && 'A)'}
              {index === 1 && 'B)'}
              {index === 2 && 'C)'}
              {index === 3 && 'D)'} {option.option}
            </Button>
          );
        })}
      </div>
      <CorrectStatus className="mt-8 md:mt-12" />
    </motion.div>
  );
};

export {QuizView, QuizView as default};
