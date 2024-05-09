import { SlOptionsVertical } from 'react-icons/sl';
import { FaSortAmountUp, FaFilter } from 'react-icons/fa';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { useDarkMode } from '../context/DarkModeContext';

const data = [
  {
    id: 1,
    img: '../../public/pro-person.png',
    problem: 'Contact Email not Linked',
    update: 'Update 1 day ago',
    name: 'Tom Cruise',
    dateUser: 'on 24.05.2019',
    date: 'May 26, 2019',
    time: '6.30 PM',
    priority: 'HIGH',
  },
  {
    id: 2,
    img: '../../public/pro-person.png',
    problem: 'Adding Images to Featured Posts',
    update: 'Update 1 day ago',
    name: 'Mat Damon',
    dateUser: 'on 24.05.2019',
    date: 'May 26, 2019',
    time: '6.30 PM',
    priority: 'HIGH',
  },
  {
    id: 3,
    img: '../../public/pro-person.png',
    problem: 'When will I be charged this month?',
    update: 'Update 1 day ago',
    name: 'Robert Dawney',
    dateUser: 'on 24.05.2019',
    date: 'May 26, 2019',
    time: '6.30 PM',
    priority: 'LOW',
  },
  {
    id: 4,
    img: '../../public/pro-person.png',
    problem: 'Payment not going through',
    update: 'Update 2 day ago',
    name: 'Christian Bale',
    dateUser: 'on 24.05.2019',
    date: 'May 25, 2019',
    time: '6.30 PM',
    priority: 'NORMAL',
  },
];

const Ticket = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className="mx-6 mt-7">
      <div
        className={`${darkMode ? 'bg-[#363740]' : 'bg-white'} border rounded`}
      >
        <div className="flex justify-between p-5">
          <h1 className={`text-lg font-semibold ${darkMode && 'text-white'}`}>
            All tickets
          </h1>
          <div className="flex gap-5">
            <div className="flex gap-2 justify-center items-center text-slate-400 text-sm">
              <span>
                <FaSortAmountUp />
              </span>
              Sort
            </div>
            <div className="flex gap-2 justify-center items-center text-slate-400 text-sm">
              <span>
                <FaFilter />
              </span>
              Filter
            </div>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b-2 text-sm text-slate-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Ticket details
                </th>
                <th scope="col" className="px-6 py-3">
                  Costumer name
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Priority
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className={`${darkMode && 'text-white'} border-b-2`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex gap-5">
                        <img
                          src={item.img}
                          alt="profile"
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex flex-col gap-1">
                          <h3 className="text-sm font-semibold">
                            {item.problem}
                          </h3>
                          <p className="text-xs font-medium text-slate-400">
                            {item.update}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-sm font-semibold">{item.name}</h3>
                        <p className="text-xs font-medium text-slate-400">
                          {item.dateUser}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-sm font-semibold">{item.date}</h3>
                        <p className="text-xs font-medium text-slate-400">
                          {item.time}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 ">
                      <div className="flex justify-between">
                        <span
                          className={`py-1 px-4 rounded-full text-sm font-semibold text-white ${
                            item.priority === 'HIGH'
                              ? 'bg-red-600'
                              : item.priority === 'LOW'
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                          }`}
                        >
                          {item.priority}
                        </span>
                        <button className="text-slate-400">
                          <SlOptionsVertical />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end gap-14 text-sm text-slate-400 mx-6 my-5">
          <div className="flex">
            <h3>Row per page:</h3>
            <select className="font-bold">
              <option>8</option>
              <option>10</option>
              <option>15</option>
            </select>
          </div>
          <div className="flex gap-3">
            <span>1 - 8 of 1240</span>
            <div className="flex gap-2">
              <button>
                <MdArrowBackIos />
              </button>
              <button>
                <MdArrowForwardIos />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
