'use client';
import CorrectStatus from '@/components/correctStatus';
import {Button, Card} from '@/components/ui';
import {useQuizContext} from '@/store/quizContext';
import {useUIContext} from '@/store/uiContext';

import Confetti from 'react-confetti';

import {useWindowSize} from '@/utils/hooks';

import {TOTAL_QUESTION_COUNT, MIN_SUCCESS_POINT} from '@/config';

const ResultView = () => {
  const {scoreData, reFetchHandler} = useQuizContext();
  const {setView} = useUIContext();

  const {width, height} = useWindowSize();

  const resetViewHandler = (reset: boolean) => {
    setView('instructions');
    if (reset) {
      reFetchHandler();
    }
  };

  return (
    <div className="w-full">
      {scoreData.point >= MIN_SUCCESS_POINT && (
        <div className="fixed top-0 left-0  select-none">
          <Confetti width={width} height={height} />
        </div>
      )}
      <Card className="w-full md:w-[766px] max-w-[766px] h-[620px] mx-auto text-black">
        <h2 className="font-bold text-[2.5rem] mb-[6.6875rem] mx-auto w-fit leading-[48.41px]">
          Result
        </h2>

        <p className="font-semibold text-4xl leading-[43.57px] mb-6 w-fit mx-auto">
          {scoreData.question} OUT OF {TOTAL_QUESTION_COUNT}
        </p>

        <p className="font-semibold text-4xl leading-[43.57px] mb-6 w-fit mx-auto">
          {scoreData.point} POINTS
        </p>

        <div className="flex items-center gap-2 md:gap-1 md:mt-[12.25rem] flex-wrap">
          <Button
            onClick={() => resetViewHandler(false)}
            colorVariant="blueish"
            className="mx-auto w-full md:min-w-[19.9375rem] md:max-w-fit "
          >
            RESTART QUIZ
          </Button>
          <Button
            onClick={() => resetViewHandler(true)}
            colorVariant="greenish"
            className="mx-auto w-full md:min-w-[19.9375rem] md:max-w-fit"
          >
            NEW QUIZ
          </Button>
        </div>
      </Card>
      <CorrectStatus className="mt-8 md:mt-12" />
    </div>
  );
};

export {ResultView, ResultView as default};
