import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './page/login';
import Dashboard from './page/dashboard';
import Layout from './component/layout';
import Ticket from './page/ticket';
import axios from 'axios';

function App() {
  axios.defaults.baseURL = 'https://656d85f2bcc5618d3c23548a.mockapi.io';
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/overview" element={<Dashboard />} />
            <Route path="/ticket" element={<Ticket />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
