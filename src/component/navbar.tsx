import Cookies from 'js-cookie';
import { useDarkMode } from '../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';
import { IoIosMoon, IoIosSunny } from 'react-icons/io';
import profile from '../../public/pro-person.png';

interface ValueTitle {
  currentTitle: string;
}

const Navbar: React.FC<ValueTitle> = ({ currentTitle }) => {
  const name = Cookies.get('name');
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleLogout = () => {
    Cookies.remove('name');
    Cookies.remove('role');
    navigate('/');
  };

  return (
    <div
      className={`w-full ${
        darkMode ? 'bg-[#363740] text-white' : 'bg-white text-black'
      }`}
    >
      <div className="flex mx-6 my-4 items-center justify-between ">
        <h1
          className={`text-sm font-semibold ${
            darkMode ? 'text-gray-300' : 'text-slate-600'
          } mt-3`}
        >
          {currentTitle}
        </h1>
        <div className="flex gap-5">
          <h3
            className={`text-sm font-semibold ${
              darkMode ? 'text-gray-300' : 'text-slate-600'
            } mt-3`}
          >
            {name}
          </h3>
          <img
            src={profile}
            alt="profile"
            className="w-10 h-10 rounded-full"
            onClick={handleLogout}
          />
          <button
            onClick={toggleDarkMode}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {darkMode ? (
              <IoIosSunny className="w-6 h-6 text-yellow-400" />
            ) : (
              <IoIosMoon className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
