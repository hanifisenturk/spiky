import {twMerge} from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({children, className}: Props) => {
  return (
    <div
      className={twMerge(
        'px-6 md:px-[2.625rem] py-11 bg-white  border-[6px] border-black rounded-2xl shadow-card',
        className,
      )}
    >
      {children}
    </div>
  );
};

export {Card, Card as default};
