import React from 'react';

interface CenterCardProps {
  title: string;
  value: number | string | undefined;
}

const CenterCard: React.FC<CenterCardProps> = ({ title, value }) => {
  return (
    <div className="flex flex-col justify-center items-center border-b-[1px] border-l-[1px] p-5">
      <h3 className="text-slate-400 font-semibold text-sm">{title}</h3>
      <h2 className="text-xl font-bold mt-2 text-slate-700">{value}</h2>
    </div>
  );
};

export default CenterCard;
