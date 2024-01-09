'use client';

import {memo} from 'react';
import {useQuizContext} from '../store/quizContext';

import {twMerge} from 'tailwind-merge';

type Props = {
  className?: string;
};

const CorrectStatus = ({className}: Props) => {
  const {answerStatuses} = useQuizContext();
  return (
    <div className="flex items-center justify-center gap-4">
      {Object.values(answerStatuses).map((status, index) => {
        return (
          <div
            key={index}
            className={twMerge(
              'w-6 h-6 rounded-full transition-transform',
              status === 'unanswered' && 'bg-gray-300',
              status === true && 'bg-green-500',
              status === false && 'bg-red-500',
              className,
            )}
          ></div>
        );
      })}
    </div>
  );
};

export default memo(CorrectStatus);
