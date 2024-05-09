/* eslint-disable react-hooks/exhaustive-deps */
import { MdAddBox } from 'react-icons/md';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import TopCard from '../component/topCard';
import CenterCard from '../component/centerCard';
import UnTicket from '../component/unTicket';

interface ValueState {
  unresolved: number;
  overdue: number;
  open: number;
  onHold: number;
  resolved: number;
  received: number;
  avgFirstResp: number;
  avgResp: number;
  resolutionSLA: number;
}

const data = [
  {
    name: 'Jan',
    uv: 100,
  },
  {
    name: 'Feb',
    uv: 150,
  },
  {
    name: 'Mar',
    uv: 110,
  },
  {
    name: 'Apr',
    uv: 200,
  },
  {
    name: 'May',
    uv: 190,
  },
  {
    name: 'Jun',
    uv: 300,
  },
  {
    name: 'Jul',
    uv: 350,
  },
  {
    name: 'Aug',
    uv: 200,
  },
  {
    name: 'Sep',
    uv: 400,
  },
  {
    name: 'Oct',
    uv: 100,
  },
  {
    name: 'Nov',
    uv: 170,
  },
  {
    name: 'Dec',
    uv: 390,
  },
];

const Dashboard = () => {
  const [value, setValue] = useState<ValueState>();
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const response = await axios.get(`/overview`);
      setValue(response?.data?.[0]);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!Cookies.get('name')) {
      navigate('/');
    }
    getData();
  }, []);

  return (
    <div className="mx-6 mt-7">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
        <TopCard title="Unresolved" value={value?.unresolved} />
        <TopCard title="Overdue" value={value?.overdue} />
        <TopCard title="Open" value={value?.open} />
        <TopCard title="On hold" value={value?.onHold} />
      </div>

      <div className=" bg-white mt-7 rounded-md border">
        <div className=" grid grid-cols-1 lg:grid-cols-12">
          <div className="flex flex-col col-span-8 p-5">
            <h3 className="text-lg font-semibold">Today's trends</h3>
            <div className="flex justify-between">
              <p className="text-sm text-slate-400 ">
                as of 25 may 2019, 09:41 PM
              </p>
              <div className="flex gap-5 text-xs text-slate-400">
                <div className="flex gap-2">
                  <div className="h-0.5 w-5 bg-[#5164AF] mt-2"></div>
                  <p>Today</p>
                </div>
                <div className="flex gap-2">
                  <div className="h-0.5 w-5 bg-slate-300 mt-2"></div>
                  <p>Yesterday</p>
                </div>
              </div>
            </div>
            <div className="mt-1">
              <AreaChart
                width={730}
                height={400}
                data={data}
                margin={{ top: 10, right: 60, left: -10, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5164AF" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#5164AF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#5164AF"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </div>
          </div>
          <div className="col-span-4">
            <CenterCard title="Resolved" value={value?.resolved} />
            <CenterCard title="Received" value={value?.received} />
            <CenterCard
              title="Average first response time"
              value={value?.avgFirstResp + 'm'}
            />
            <CenterCard
              title="Average response time"
              value={value?.avgResp + 'm'}
            />
            <CenterCard
              title="Resolution within SLA"
              value={value?.resolutionSLA + '%'}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 my-7 gap-5">
        <div className="bg-white col-span-6 rounded-md border">
          <div className="flex justify-between p-5">
            <div>
              <h1 className="text-lg font-semibold">Unresolved Ticket</h1>
              <p className="text-xs text-slate-400">
                Group: <span className="text-slate-600">Support</span>{' '}
              </p>
            </div>
            <h3 className="text-blue-500 font-semibold">View details</h3>
          </div>
          <div className="">
            <ul className="">
              <UnTicket title="Waiting on Feature Request" value="4238" />
              <UnTicket title="Awaiting Cutomer Response" value="1005" />
              <UnTicket title="Awaiting Developer Fix" value="914" />
              <UnTicket title="Pending" value="281" />
            </ul>
          </div>
        </div>

        <div className="bg-white col-span-6 rounded-md border">
          <div className="flex justify-between p-5">
            <div>
              <h1 className="text-lg font-semibold">Tasks</h1>
              <p className="text-xs text-slate-400">Today</p>
            </div>
            <h3 className="text-blue-500 font-semibold">View all</h3>
          </div>
          <div className="">
            <ul className="">
              <li className="flex justify-between text-sm font-medium py-4 px-7 text-slate-300">
                Create new task
                <button className="text-lg hover:text-slate-500">
                  <MdAddBox />
                </button>
              </li>
              <div className="h-[1px] bg-slate-200"></div>
              <li className="flex justify-between text-sm font-medium py-4 px-7">
                <div className="flex gap-3">
                  <input type="radio" />
                  <label>Finish ticket update</label>
                </div>
                <div className="py-1 px-2 bg-yellow-400 text-white rounded-lg">
                  URGENT
                </div>
              </li>
              <div className="h-[1px] bg-slate-200"></div>
              <li className="flex justify-between text-sm font-medium py-4 px-7">
                <div className="flex gap-3">
                  <input type="radio" />
                  <label>Create new ticket example</label>
                </div>
                <div className="py-1 px-2 bg-teal-500 text-white rounded-lg">
                  NEW
                </div>
              </li>
              <div className="h-[1px] bg-slate-200"></div>
              <li className="flex justify-between text-sm font-medium py-4 px-7">
                <div className="flex gap-3">
                  <input type="radio" />
                  <label>Create new ticket example</label>
                </div>
                <div className="py-1 px-2 bg-slate-200 text-slate-400 rounded-lg">
                  DEFAULT
                </div>
              </li>
              <div className="h-[1px] bg-slate-200"></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
