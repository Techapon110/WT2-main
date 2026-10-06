import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { Link } from "react-router";

function Navbar() {
  return (
    <header className="inset-x-0 top-0 z-30 mx-auto my-5 w-full max-w-3xl border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-5xl">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link aria-current="page" className="flex items-center" to={"/"}>
              <FaApple className="text-4xl text-blue-500" />
              <p className="sr-only">CT-Shopping</p>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-2">
            <Link
              aria-current="page"
              className="inline-block rounded-lg px-3 py-2 text-sm font-medium text-blue-500 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 hover:scale-110"
              to={"/"}
            >
              หน้าหลัก
            </Link>
            <Link
              className="inline-block rounded-lg px-3 py-2 text-sm font-medium text-blue-500 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 hover:scale-110"
              to={"category"}
            >
              หมวดสินค้า
            </Link>
            <Link
              className="inline-block rounded-lg px-3 py-2 text-sm font-medium  text-blue-500 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 hover:scale-110"
              to={"product"}
            >
              สินค้า
            </Link>
            <Link
              className="inline-block rounded-lg px-3 py-2 text-sm font-medium  text-blue-500 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 hover:scale-110"
              to={"order"}
            >
              สั่งซื้อ
            </Link>
            <Link
              className="inline-block rounded-lg px-3 py-2 text-sm font-medium  text-blue-500 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 hover:scale-110"
              to={"contact"}
            >
              ติดต่อเรา
            </Link>
            <Link
              className="inline-block rounded-lg px-3 py-2 text-sm font-medium  text-blue-500 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 hover:scale-110"
              to={"about"}
            >
              เกี่ยวกับเรา
            </Link>
          </div>
          <div className="flex items-center justify-end gap-3">
            <Link to={"cart"}>
            <FaShoppingCart className="text-2xl text-blue-500" />
            </Link>
            <Link
              className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 hover:ring-blue-600 hover:ring-2 sm:inline-flex"
              to={"signup"}
            >
              สมัครสมาชิก
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              to={"signin"}
            >
              เข้าสู่ระบบ
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
