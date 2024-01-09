'use client';
import {useEffect, useState} from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window ? window.innerWidth : undefined,
    height: window ? window.innerHeight : undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export {useWindowSize};
