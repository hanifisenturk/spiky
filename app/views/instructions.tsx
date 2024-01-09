import {useCallback} from 'react';
import {Button, Card} from '@/components/ui';

import {twMerge} from 'tailwind-merge';

import {motion} from 'framer-motion';

import {useQuizContext} from '@/store/quizContext';
import {useUIContext} from '@/store/uiContext';

import {TOTAL_QUESTION_COUNT} from '@/config';

// list animation variants
const container = {
  hidden: {opacity: 1, scale: 0},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {y: 20, opacity: 0},
  visible: {
    y: 0,
    opacity: 1,
  },
};

const instructionList = [
  {
    text: `Quiz has ${TOTAL_QUESTION_COUNT} questions in total.`,
  },
  {
    text: 'Once you submit an answer, no option to go back.',
  },
  {
    text: 'Each question has points, and you final score will be calculated based on them.',
  },
  {
    text: 'The quiz auto-progresses to the next question after answering.',
  },
];

const InstructionsView = () => {
  const {isLoading, isValidating, error, reFetchHandler} = useQuizContext();

  const {setView} = useUIContext();

  const quizStartHandler = useCallback(() => {
    // If the quiz is currently loading, do nothing.
    if (isLoading || isValidating) return;

    // If there is an error, trigger a re-fetch and return.
    if (error) {
      reFetchHandler();
      return;
    }

    // If neither loading, isValidating nor error conditions are met, set the view to 'quiz'.
    setView('quiz');
  }, [isLoading, isValidating, error]);

  return (
    <Card className="max-w-[47.875rem] mx-auto">
      <div className="mx-auto text-center text-black">
        <h1 className="font-bold text-3xl md:text-[2.5rem] mb-6 md:mb-14 leading-[48.41px]">
          Spiky Quiz App
        </h1>
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center gap-[1.6875rem] font-semibold text-lg md:text-2xl leading-[29.05px] text-black mb-8 md:mb-[6.5625rem]"
        >
          {instructionList.map((instruction, index) => {
            return (
              <motion.li
                key={index}
                variants={item}
                className="leading-[29.05px]"
              >
                <span className="before:w-2 before:h-2 before:my-auto before:mb-[3px] before:mr-4 before:rounded-full before:bg-black before:inline-block">
                  {instruction.text}
                </span>
              </motion.li>
            );
          })}
        </motion.ul>
        <Button
          onClick={quizStartHandler}
          colorVariant="greenish"
          className={twMerge(
            'mx-auto w-full md:min-w-[19.9375rem] md:max-w-fit',
            (isLoading || isValidating) && 'cursor-not-allowed',
          )}
        >
          {(isLoading || isValidating) && 'LOADING...'}
          {error && 'TRY AGAIN'}
          {!isLoading && !isValidating && !error && 'START QUIZ'}
        </Button>
      </div>
    </Card>
  );
};

export {InstructionsView, InstructionsView as default};
