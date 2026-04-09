"use client";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex flex-col justify-center items-center mt-40 px-4">
      <div className="w-full max-w-md rounded-2xl p-8 bg-white/5 backdrop-blur border border-white/20 shadow-xl">
        <h1 className="text-white text-3xl font-bold text-center mb-6">
          Sign up
        </h1>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-white text-sm">Name</label>
            <input
              type="text"
              placeholder="กรอกชื่อ"
              className="w-full h-10 px-3 text-white bg-transparent border border-white/30 rounded-md
              focus:outline-none focus:border-yellow-400 transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-white text-sm">Email</label>
            <input
              type="email"
              placeholder="กรอกอีเมล"
              className="w-full h-10 px-3 text-white bg-transparent border border-white/30 rounded-md
              focus:outline-none focus:border-yellow-400 transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-white text-sm">Password</label>
            <input
              type="password"
              placeholder="กรอกรหัสผ่าน"
              className="w-full h-10 px-3 text-white bg-transparent border border-white/30 rounded-md
              focus:outline-none focus:border-yellow-400 transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-white text-sm">Confirm Password</label>
            <input
              type="password"
              placeholder="ยืนยันรหัสผ่าน"
              className="w-full h-10 px-3 text-white bg-transparent border border-white/30 rounded-md
              focus:outline-none focus:border-yellow-400 transition"
            />
          </div>

          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-500 transition text-black font-semibold py-3 rounded-md mt-2"
          >
            Sign up
          </button>
        </form>

        <div className="flex justify-center gap-2 mt-6 text-sm">
          <p className="text-white/70">Already have an account?</p>
          <Link href="/auth/login" className="text-sky-400 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
