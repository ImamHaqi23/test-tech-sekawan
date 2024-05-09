/* eslint-disable react-hooks/exhaustive-deps */
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { LoginAuth } from '../auth/yup';
import { useNavigate } from 'react-router-dom';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import Cookies from 'js-cookie';
import usersData from '../data/users.json';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginAuth,
    onSubmit: (values) => {
      const user = usersData.users.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (user) {
        Cookies.set('name', user.name);
        Cookies.set('role', user.role);
        if (user.role === 'admin') {
          navigate('/overview');
        } else {
          navigate('/ticket');
        }

        console.log('User logged in:', user);
      } else {
        console.log('Invalid email or password');
      }
    },
  });

  useEffect(() => {
    if (Cookies.get('name')) {
      navigate('/overview');
    }
  }, []);

  return (
    <div className="bg-[#363740] min-h-screen flex justify-center items-center">
      <div className="bg-white w-[400px] h-[500px] rounded-lg shadow-lg">
        <div className="flex justify-center mt-7">
          <div className="w-12 h-12 bg-[#3751FF] rounded-full flex justify-center items-center">
            {' '}
            <div className="w-5 h-5 bg-white rounded-r-full ml-1"></div>
          </div>
        </div>
        <h2 className="text-slate-400 font-semibold text-lg text-center mt-3">
          Dashboard Kit
        </h2>
        <div className="mt-3">
          <h1 className="font-bold text-xl text-center">
            Log In to Dashboard Kit
          </h1>
          <p className="text-slate-400  text-xs text-center mt-2">
            Enter your email and password below
          </p>
        </div>

        <form
          className="flex flex-col gap-5 mx-8 mt-7"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-slate-400 text-sm font-semibold"
            >
              EMAIL
            </label>
            <div>
              <input
                type="text"
                name="email"
                className="border bg-[#FCFDFE] text-sm rounded-md p-3 w-full"
                placeholder="Email address"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label
                htmlFor="password"
                className="text-slate-400 text-sm  font-semibold"
              >
                PASSWORD
              </label>
              <p className="text-xs text-slate-400 font-semibold">
                Forgot password?
              </p>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="border bg-[#FCFDFE] text-sm  rounded-md p-3 w-full"
                placeholder="Password"
              />
              <button
                type="button"
                className=" absolute right-4 top-2/4 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <LuEye /> : <LuEyeOff />}
              </button>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-800 absolute text-sm font-semibold">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
          </div>
          <div className="">
            <button className="bg-[#3751FF] py-2 rounded-md font-semibold text-white w-full">
              Login
            </button>
          </div>

          <h3 className="text-sm text-slate-400 font-semibold text-center">
            Don't have an account? <a className="text-[#3751FF]">Sign Up</a>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Login;
