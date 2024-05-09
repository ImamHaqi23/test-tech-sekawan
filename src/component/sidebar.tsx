import { Link, useLocation } from 'react-router-dom';
import {
  FaChartPie,
  FaTicketAlt,
  FaLightbulb,
  FaUsers,
  FaUserTie,
  FaBook,
  FaCog,
  FaAward,
} from 'react-icons/fa';
import Cookies from 'js-cookie';

interface SidebarProps {
  onMenuSelect: (name: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onMenuSelect }) => {
  const location = useLocation();
  const role = Cookies.get('role');
  const isAdmin = role === 'admin';

  const adminSideLink = [
    {
      id: 1,
      to: '/overview',
      url: <FaChartPie />,
      name: 'Overview',
    },
    {
      id: 2,
      to: '/ticket',
      url: <FaTicketAlt />,
      name: 'Ticket',
    },
    {
      id: 3,
      to: '/',
      url: <FaLightbulb />,
      name: 'Ideas',
    },
    {
      id: 4,
      to: '/',
      url: <FaUsers />,
      name: 'Contact',
    },
    {
      id: 5,
      to: '',
      url: <FaUserTie />,
      name: 'Agents',
    },
    {
      id: 6,
      to: '',
      url: <FaBook />,
      name: 'Articles',
    },
  ];

  const guestSideLink = [
    {
      id: 1,
      to: '/ticket',
      url: <FaTicketAlt />,
      name: 'Ticket',
    },
  ];

  const otherLink = [
    {
      id: 1,
      to: '',
      url: <FaCog />,
      name: 'Setting',
    },
    {
      id: 2,
      to: '',
      url: <FaAward />,
      name: 'Subscription',
    },
  ];

  const sideLink = isAdmin ? adminSideLink : guestSideLink;
  return (
    <div>
      <div className="space-y-4 min-h-screen pt-7 bg-[#363740]">
        <div className="flex justify-center gap-3 pb-4 flex-col lg:flex-row ">
          <div className="flex justify-center">
            <div className="w-9 h-9 bg-[#3751FF] rounded-full flex justify-center items-center">
              {' '}
              <div className="w-3 h-3 bg-white rounded-r-full ml-1"></div>
            </div>
          </div>
          <h2 className="text-slate-400 mt-1 text-sm text-center font-semibold lg:text-lg">
            Dashboard Kit
          </h2>
        </div>
        {sideLink.map((element, index) => {
          return (
            <div key={index}>
              <div className="font-medium ">
                <Link to={element.to}>
                  <div
                    className={`cursor-pointer flex items-center py-2 px-6 text-slate-400 hover:bg-[#3E4049] hover:text-white ${
                      location.pathname === element.to
                        ? 'bg-[#3E4049] text-white border-l-4 border-[#9B9FB3]'
                        : ''
                    }`}
                    onClick={() => onMenuSelect(element.name)}
                  >
                    <span>{element.url}</span>
                    <h1 className="px-4 hidden md:block lg:block font-semibold text-sm">
                      {element.name}
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
        <div className="h-[1px] bg-slate-500 "></div>
        {otherLink.map((element, index) => {
          return (
            <div key={index}>
              <div className="space-y-2 font-medium ">
                <Link to={element.to}>
                  <div
                    className={`cursor-pointer flex items-center py-2 px-6 text-slate-400 hover:bg-[#3E4049] hover:text-white ${
                      location.pathname === element.to
                        ? 'bg-[#3E4049] text-white border-l-4 border-[#9B9FB3]'
                        : ''
                    }`}
                  >
                    <span>{element.url}</span>
                    <h1 className="px-4 hidden md:block lg:block font-semibold text-sm">
                      {element.name}
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
