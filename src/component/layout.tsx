import { useState } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [currentTitle, setCurrentTitle] = useState('Overview');

  const handleMenuSelect = (selectedTitle: string) => {
    setCurrentTitle(selectedTitle);
  };

  return (
    <div className="flex bg-[#F8F8FA] h-screen ">
      <div className="flex flex-col w-1/5 ">
        <Sidebar onMenuSelect={handleMenuSelect} />
      </div>
      <div className="w-full flex flex-col">
        <Navbar currentTitle={currentTitle} />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
