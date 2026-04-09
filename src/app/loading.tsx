"use client";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-md rounded-2xl p-8 bg-white/5 backdrop-blur border border-white/20 shadow-xl flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>

        <p className="text-white/80 text-sm">Loading, please wait...</p>
      </div>
    </div>
  );
}
