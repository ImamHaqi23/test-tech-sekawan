import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

interface Target {
  title: string;
  value: number | undefined;
}

const Card: React.FC<Target> = ({ title, value }) => {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`${
        darkMode ? 'bg-[#2B2C37]' : 'bg-white'
      } col-span-3 rounded-md h-28 border flex flex-col justify-center items-center cursor-pointer hover:border hover:border-[#495FAC] group`}
    >
      <h3
        className={`${
          darkMode ? 'text-white' : 'text-slate-400'
        } font-semibold group-hover:text-[#495FAC]`}
      >
        {title}
      </h3>
      <h1
        className={`${
          darkMode ? 'text-white' : 'text-slate-700'
        } text-3xl font-bold mt-2 group-hover:text-[#495FAC]`}
      >
        {value}
      </h1>
    </div>
  );
};

export default Card;
