import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

interface CenterCardProps {
  title: string;
  value: number | string | undefined;
}

const CenterCard: React.FC<CenterCardProps> = ({ title, value }) => {
  const { darkMode } = useDarkMode();
  return (
    <div className="flex flex-col justify-center items-center border-b-[1px] border-l-[1px] p-5">
      <h3
        className={`${
          darkMode ? 'text-white' : 'text-slate-400'
        } font-semibold text-sm`}
      >
        {title}
      </h3>
      <h2
        className={`${
          darkMode ? 'text-white' : 'text-slate-700'
        }text-xl font-bold mt-2 `}
      >
        {value}
      </h2>
    </div>
  );
};

export default CenterCard;
