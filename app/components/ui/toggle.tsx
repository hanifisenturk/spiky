'use client';

import {motion} from 'framer-motion';

import {useState} from 'react';

import {twMerge} from 'tailwind-merge';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

type Props = {
  onChange: () => void;
  defaultChecked: boolean;
};

const Toggle = ({onChange, defaultChecked}: Props) => {
  const [isOn, setIsOn] = useState(defaultChecked);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onChange();
  };

  return (
    <div
      className={twMerge(
        'w-12 h-7 bg-black bg-opacity-40 flex items-center rounded-[3.125rem] p-1 cursor-pointer transition-colors',
        isOn && 'justify-end bg-blue-500 bg-opacity-100',
      )}
      onClick={toggleSwitch}
    >
      <motion.div
        className="w-5 h-5 bg-white rounded-[2.5rem]"
        layout
        transition={spring}
      />
    </div>
  );
};

export {Toggle, Toggle as default};
