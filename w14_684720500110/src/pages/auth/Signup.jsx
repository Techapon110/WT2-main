import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa6";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";

function Signup() {
  const [user_name, setUser_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPassword_confirm] = useState("");

  const { userSignup } = useAuth()
  const navigate = useNavigate()

  async function handleSignup(e) {
    e.preventDefault()

      if (password.length < 6 || password !== password_confirm ) {
        alert('password mismatch!!!!!')
        return
      }

      const { success, error } = await userSignup(email, password)
      if (!success) {
        alert('Signup Failed!!!')
        console.log(error)
        return
      }
      alert('Signup successful!!!')
      navigate("/")
  }

  return (
    <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white shadow-md rounded-md p-6">
          <FaUserPlus className="text-blue-500 text-8xl justify-self-center" />
          <form className="space-y-6" onSubmit={handleSignup} >
            <div>
              <label
                htmlFor="user_name"
                className="block text-sm font-medium text-blue-500"
              >
                ชื่อผู้ใช้
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setUser_name(e.target.value)}
                  id="user_name"
                  name="user_name"
                  type="text"
                  required=""
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-500"
              >
                อีเมล
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  required=""
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password_confirm"
                className="block text-sm font-medium text-blue-500"
              >
                ยืนยันรหัสผ่าน
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setPassword_confirm(e.target.value)}
                  id="password_confirm"
                  name="password_confirm"
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
                สมัครสมาชิก
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
