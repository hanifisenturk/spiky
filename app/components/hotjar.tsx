'use client';
import {useEffect} from 'react';

import {hotjar} from 'react-hotjar';

const Hotjar = () => {
  useEffect(() => {
    hotjar.initialize(3816539, 6);
  }, []);

  return null;
};

export default Hotjar;
