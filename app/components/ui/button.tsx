'use client';

import {twMerge} from 'tailwind-merge';

// Typing button with native button props
type Props = {
  className?: string;
  children: React.ReactNode;
  colorVariant: 'pinkish' | 'greenish' | 'yellowish' | 'blueish';
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const colorVariants = {
  pinkish: 'bg-pinkishBackground border-pinkishOutline shadow-pinkishButton',
  greenish:
    'bg-greenishBackground border-greenishOutline shadow-greenishButton',
  yellowish:
    'bg-yellowishBackground border-yellowishOutline shadow-yellowishButton',
  blueish: 'bg-blueishBackground border-blueishOutline shadow-blueishButton',
};

const Button = (props: Props) => {
  const {className, children, colorVariant = 'blueish', ...rest} = props;
  return (
    <button
      {...rest}
      className={twMerge(
        'text-center py-[1.125rem] px-2 flex items-center justify-center font-bold text-xl leading-[24.2px] bg-transparent border-4 rounded-[0.25rem] active:shadow-none select-none  transition-all',
        colorVariants[colorVariant],
        className,
      )}
    >
      {children}
    </button>
  );
};

export {Button, Button as default};
