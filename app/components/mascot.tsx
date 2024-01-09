'use client';
import Image from 'next/image';

import {motion} from 'framer-motion';

const Mascot = () => {
  return (
    <motion.div
      className="fixed left-0 bottom-0 hidden md:block select-none"
      initial={{opacity: 0, x: -128}}
      animate={{opacity: 1, x: -64}}
      transition={{duration: 0.3, bounce: 0.5}}
      exit={{opacity: 0, x: -128}}
    >
      <Image
        priority
        src="/mascot.png"
        alt="Spiky Mascot"
        className="rotate-45 hover:scale-110 transition-transform"
        width={200}
        height={200}
      />
    </motion.div>
  );
};

export {Mascot, Mascot as default};
