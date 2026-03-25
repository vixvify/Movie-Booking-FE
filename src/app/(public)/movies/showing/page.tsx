"use client";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col justify-around items-center w-full mt-10">
      <div className="flex justify-center items-center text-white text-5xl font-bold gap-15">
        <h1>Now Showing</h1>
        <Link href={"/movies/coming"}>
          <h1 className="opacity-20">Coming Soon</h1>
        </Link>
      </div>
      <div className="flex justify-center items-center flex-wrap w-[80%] gap-10 mt-20">
        <div className="">
          <Link href={`/pages/booking/`}>
            <Image
              src={
                "https://res.cloudinary.com/dxvaplm2o/image/upload/v1765891915/movies/s0maikwbsvfg5wcev4qm.jpg"
              }
              width={300}
              height={400}
              alt="poster"
              className="rounded-xl"
            ></Image>
          </Link>
          <h1 className="text-white mt-5 text-xl font-bold">ธี่หยด 2</h1>
          <h1 className="text-white mt-1 text-md font-bold">24/3/2026</h1>
        </div>
      </div>
    </div>
  );
}
