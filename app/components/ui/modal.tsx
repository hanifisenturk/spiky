'use client';
import {motion} from 'framer-motion';
import {twMerge} from 'tailwind-merge';
import {useEffect} from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
  className?: string;
};

const Modal = ({children, title, onClose, className}: Props) => {
  useEffect(() => {
    window && window.document.body.classList.add('overflow-hidden');

    // Accessibility operation
    const escapeHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', escapeHandler);

    return () => {
      window.removeEventListener('keydown', escapeHandler);
      window && window.document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.3}}
        onClick={onClose}
        className="fixed top-0 left-0 
     w-screen h-screen bg-black bg-opacity-50 z-40"
      ></motion.div>
      <motion.div
        initial={{translateX: '100%'}}
        animate={{translateX: 0}}
        exit={{translateX: '100%'}}
        transition={{duration: 0.3}}
        className={twMerge(
          'fixed top-0 right-0 h-screen w-1/4 bg-white z-50 shadow-lg p-8 text-black',
          className,
        )}
      >
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold mb-4">{title}</p>
          <button onClick={onClose} className="text-2xl font-semibold mb-4">
            X
          </button>
        </div>
        {children}
      </motion.div>
    </>
  );
};

export {Modal, Modal as default};
