"use client";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center px-4 mt-50">
      <div className="w-full max-w-md rounded-2xl p-8 bg-white/5 backdrop-blur border border-white/20 shadow-xl">
        <h1 className="text-white text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <form className="flex flex-col gap-4">
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

          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-500 transition text-black font-semibold py-3 rounded-md mt-2"
          >
            Login
          </button>
        </form>

        <div className="flex justify-center gap-2 mt-6 text-sm">
          <p className="text-white/70">Don't have an account?</p>
          <Link href="/auth/signup" className="text-sky-400 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
