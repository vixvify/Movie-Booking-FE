"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Coming() {
  return (
    <div className="flex justify-center items-center ml-auto mr-auto">
      <div className="flex flex-col justify-center items-start w-[80%]">
        <h1 className="font-bold text-white text-5xl">Coming Soon</h1>
        <div className="gap-10 mt-10">
          <Carousel>
            <CarouselContent className="flex items-center">
              <CarouselItem className="basis-1/5">
                <Image
                  src={
                    "https://res.cloudinary.com/dxvaplm2o/image/upload/v1765891915/movies/s0maikwbsvfg5wcev4qm.jpg"
                  }
                  width={300}
                  height={450}
                  alt="poster"
                  className="rounded-md"
                ></Image>
                <h1 className="text-white mt-5 text-xl font-bold">ธี่หยด 2</h1>
                <h1 className="text-white mt-1 text-md font-bold">24/3/2026</h1>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
