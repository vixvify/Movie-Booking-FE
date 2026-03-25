"use client";

import Header from "@/components/Header";
import Movie from "@/components/Movie";
import Coming from "@/components/Comingsoon";

export default function Home() {
  return (
    <div className="pb-20">
      <Header />
      <div className="mt-10 flex flex-col justify-center items-center gap-10">
        <Movie />
        <Coming />
      </div>
    </div>
  );
}
