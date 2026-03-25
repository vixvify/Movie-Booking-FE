"use client";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-160px)] gap-15">
      <h1 className="text-white text-5xl">Sign up | สมัครบัญชี</h1>
      <div className="border-2 border-white w-full max-w-md rounded-xl py-8 flex flex-col items-center">
        <form className="w-[85%] flex flex-col items-start gap-3">
          <p className="text-white">Name</p>
          <input
            className="border-2 border-white w-full h-10 p-3 text-white rounded-md"
            type="text"
            placeholder="กรอกชื่อ"
          />
          <p className="text-white">Email</p>
          <input
            className="border-2 border-white w-full h-10 p-3 text-white rounded-md"
            type="email"
            placeholder="กรอกอีเมล"
          />
          <p className="text-white">Password</p>
          <input
            className="border-2 border-white w-full h-10 p-3 text-white rounded-md"
            type="password"
            placeholder="กรอกรหัสผ่าน"
          />
          <p className="text-white">Confirm Password</p>
          <input
            className="border-2 border-white w-full h-10 p-3 text-white rounded-md"
            type="password"
            placeholder="ยืนยันรหัสผ่าน"
          />
          <button className="bg-yellow-600 text-black font-bold py-3 rounded-md text-lg w-full mt-4 disabled:opacity-20">
            Sign up
          </button>
        </form>
        <div className="flex gap-2 mt-6">
          <p className="text-white">Have any account?</p>
          <Link href="/pages/login" className="text-sky-300">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
