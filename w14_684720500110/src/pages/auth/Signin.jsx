import React, { useState } from "react";
import { FaUserLock } from "react-icons/fa6";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { userSignin } = useAuth()
    const navigate = useNavigate()

  async function handleSignin(e) {
    e.preventDefault()
    const { success, error } = await userSignin(email, password)
    if (!success) {
      toast.error('เข้าระบบไม่สำเร็จ')
      console.log(error)
      return
    }
    toast.success('เข้าระบบสำเร็จ')
    setTimeout(() => {
      navigate("/")
    }, 2000);
  }

  return (
    <div className="bg-gray-100 flex h-screen items-center justify-center p-4">
      
      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-md p-8">
          <FaUserLock className="text-blue-500 text-8xl justify-self-center" />
          <form className="space-y-6 mt-4" onSubmit={handleSignin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-500"
              >
                อีเมล
              </label>
              <div className="mt-1">
                <input
                onChange={e => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  required=""
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-blue-500"
              >
                รหัสผ่าน
              </label>
              <div className="mt-1">
                <input
                onChange={e => setPassword(e.target.value)}
                id="password"
                  name="password"
                  type="password"
                  required=""
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-blue-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
