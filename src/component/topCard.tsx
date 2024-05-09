import React from 'react';

interface Target {
  title: string;
  value: number | undefined;
}

const Card: React.FC<Target> = ({ title, value }) => {
  return (
    <div className="bg-white col-span-3 rounded-md h-28 border flex flex-col justify-center items-center cursor-pointer hover:border hover:border-[#495FAC] group">
      <h3 className="text-slate-400 font-semibold group-hover:text-[#495FAC]">
        {title}
      </h3>
      <h1 className="text-3xl font-bold mt-2 text-slate-700 group-hover:text-[#495FAC]">
        {value}
      </h1>
    </div>
  );
};

export default Card;
