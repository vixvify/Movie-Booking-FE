"use client";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col justify-around items-center w-full mt-10">
      <div className="flex justify-center items-center text-white text-5xl font-bold gap-15">
        <Link href={"/movies/showing"}>
          <h1 className="opacity-20">Now Showing</h1>
        </Link>
        <h1>Coming Soon</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap w-[80%] gap-10 mt-20">
        <div className="">
          <Image
            src={
              "https://res.cloudinary.com/dxvaplm2o/image/upload/v1765892416/movies/fzlote3efezboizkvrbh.png"
            }
            width={300}
            height={400}
            alt="poster"
            className="rounded-xl"
          ></Image>
          <h1 className="text-white mt-5 text-xl font-bold">ธี่หยด 3</h1>
          <h1 className="text-white mt-1 text-md font-bold">5/5/2026</h1>
        </div>
      </div>
    </div>
  );
}
