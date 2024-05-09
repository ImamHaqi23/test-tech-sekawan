import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

interface ValueTitle {
  currentTitle: string;
}

const Navbar: React.FC<ValueTitle> = ({ currentTitle }) => {
  const name = Cookies.get('name');
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('name');
    Cookies.remove('role');
    navigate('/');
  };
  return (
    <div className="w-full">
      <div className="flex mx-6 my-4 items-center justify-between ">
        <h1 className="text-lg font-semibold">{currentTitle}</h1>
        <div className="flex gap-5">
          <h3 className="text-sm font-semibold text-slate-600 mt-3">{name}</h3>
          <img
            src="../../public/pro-person.png"
            alt="profile"
            className="w-10 h-10 rounded-full"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
