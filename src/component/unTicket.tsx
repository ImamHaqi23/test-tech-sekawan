import { useDarkMode } from '../context/DarkModeContext';

interface Target {
  title: string;
  value: string;
}

const UnTicket: React.FC<Target> = ({ title, value }) => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`${darkMode ? 'bg-[#2B2C37]' : 'bg-white'}`}>
      <li className="flex justify-between text-sm font-medium py-4 px-7">
        {title}
        <span className="text-slate-400">{value}</span>
      </li>
      <div className="h-[1px] bg-slate-200"></div>
    </div>
  );
};

export default UnTicket;
