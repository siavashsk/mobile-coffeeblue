import React, { useState } from "react";
import axios from "axios";
import Spinner from "./Components/Spinner";

const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const user = { email: email, password: password };
      const { data } = await axios.post("url", JSON.stringify(user));
      console.log(data);

    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-[#0D4D66]">
      <div className="hidden sm:flex">
        <img
          className="w-full h-[100vh] object-cover"
          src="/images/login.jpg"
          alt="logo"
        />
      </div>
      <div className="flex flex-col justify-center">
        <form
          className="max-w-[500px] w-full mx-auto p-4 px-4 rounded-lg"
          onSubmit={submitHandler}
        >
          <h2 className="text-3xl dark:text-white font-bold text-right mb-6 font-sans">
            ورود به سیستم مدیریت منو کافه
          </h2>
          <div className="text-right flex flex-col text-white py-2">
            <label className="text-2xl font-sans">:نام کاربری</label>
            <input
              className="rounded-lg text-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none text-right "
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {error && (
            <p className="pl-1 text-right text-red-500 text-sm font-sans ">
              ایمیل یا پسورد نادرست است
            </p>
          )}
          <div className="text-right flex flex-col text-white py-2">
            <label className="text-2xl font-sans">:کلمه عبور</label>
            <input
              className="rounded-lg text-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none text-right "
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full font-sans my-5 py-2 text-2xl bg-teal-500 shadow-lg shadow-teal-500/50 text-slate-200 rounded-lg">
            {loading ? <Spinner /> : "ورود به سیستم"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginBox;
