"use client";

import Image from "next/image";
import { MdEventSeat } from "react-icons/md";
import { useState } from "react";

export default function Page() {
  const [seats, setseats] = useState<string[]>(new Array(200).fill("avail"));
  const [seatsNo, setSeatsNo] = useState<number[]>([]);
  const [showtime, setShowTime] = useState("");
  const showtimes = ["10:00", "13:00", "16:00", "19:00"];

  return (
    <div className="flex flex-col justify-center items-center w-full pt-10 pb-10">
      <div className="flex justify-center items-center gap-20">
        <div>
          <Image
            src={
              "https://res.cloudinary.com/dxvaplm2o/image/upload/v1765891915/movies/s0maikwbsvfg5wcev4qm.jpg"
            }
            width={1000}
            height={1000}
            alt="poster"
            className="w-[200px] h-[270px]"
          ></Image>
          <div className="mt-10 w-[300px] rounded-2xl bg-white/10 p-6 text-white backdrop-blur-md shadow-lg">
            <h2 className="mb-4 text-center text-2xl font-semibold tracking-wide">
              Booking Summary
            </h2>

            <div className="space-y-3 text-base">
              <div className="flex justify-between">
                <span className="text-white/70">Movie</span>
                <span className="font-medium">{"ธี่หยด 2"}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/70">Showtime</span>
                <select
                  value={showtime}
                  onChange={(e) => setShowTime(e.target.value)}
                  className="text-right"
                >
                  <option className="text-black" hidden value={""}>
                    Select Showtime
                  </option>
                  {showtimes.map((time) => (
                    <option
                      key={time}
                      value={time}
                      className="text-black disabled:text-gray-600"
                    >
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-between">
                <span className="text-white/70">Total Seats</span>
                <span className="font-medium">1</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/70">Seats Number</span>
                <span className="font-medium w-[40%] flex justify-end">
                  {seatsNo.toString()}
                </span>
              </div>

              <div className="border-t border-white/20 pt-3 flex justify-between text-lg">
                <span className="font-semibold">Total Price</span>
                <span className="font-bold text-green-400">220</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[750px] flex flex-col gap-10">
          <div className="flex flex-col items-center">
            <svg
              className="w-[750px] h-[140px]"
              viewBox="0 0 750 140"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 30 120 Q 375 25 720 120"
                stroke="white"
                strokeWidth="7"
                fill="none"
                className="drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              />
            </svg>

            <p className="text-white tracking-[0.45em] text-sm -mt-8">SCREEN</p>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-1 mt-5 w-full ml-auto mr-auto">
            {seats.map((e, index) => {
              return (
                <div className="" key={index}>
                  <MdEventSeat
                    color={`${index < 100 ? "red" : "purple"}`}
                    className="w-6 h-6"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center gap-5 mt-10">
            <div className="flex flex-col justify-center items-center border-2 border-white p-5 rounded-2xl bg-black w-[150px]">
              <MdEventSeat color="red" className="w-8 h-8" />
              <h1 className="text-white mt-3">Standard Seat</h1>
              <h1 className="text-white"> 200 baht</h1>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-white p-5 rounded-2xl bg-black w-[150px]">
              <MdEventSeat color="purple" className="w-8 h-8" />
              <h1 className="text-white mt-3">Premium Seat</h1>
              <h1 className="text-white"> 230 baht</h1>
            </div>
            <button className="bg-yellow-600 text-black font-bold p-5 pl-10 pr-10 rounded-xl text-xl ml-20 hover:bg-yellow-400 disabled:opacity-20">
              Checkout
            </button>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 w-[400px] rounded-2xl bg-zinc-900 p-6 text-white shadow-2xl">
          <h2 className="text-xl font-bold mb-4 text-center">
            Confirm Payment
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Movie</span>
              <span>ธี่หยด 2</span>
            </div>

            <div className="flex justify-between">
              <span>Seats</span>
              <span>A5</span>
            </div>

            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-green-400 font-bold">0 บาท</span>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="flex-1 rounded-xl border border-white/30 py-2 hover:bg-white/10">
              Cancel
            </button>

            <button className="flex-1 rounded-xl bg-yellow-500 py-2 font-bold text-black hover:bg-yellow-400">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
