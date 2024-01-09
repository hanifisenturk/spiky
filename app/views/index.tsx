'use client';

import {AnimatePresence, motion} from 'framer-motion';

import InstructionsView from './instructions';
import QuizView from './quiz';
import ResultView from './result';
import {useUIContext} from '@/store/uiContext';

const Views = () => {
  const {view} = useUIContext();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={view}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        className="w-full"
      >
        {view === 'instructions' && <InstructionsView />}
        {view === 'quiz' && <QuizView />}
        {view === 'result' && <ResultView />}
      </motion.div>
    </AnimatePresence>
  );
};

export {Views, Views as default};
