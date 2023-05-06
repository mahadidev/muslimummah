import Image from "next/image";
import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const Stories = () => {
  const storiesData = [
    {
      title: "জীবনের প্রথম তাহাজ্জুদ! একটা বোনের ফিরে আসার গল্প ",
      videoUrl: "https://youtu.be/XoVmz_YjXw8",
      thumbnail: "/assets/images/stories_first_tahajjod.jpg",
    },
  ];

  return (
    <section>
      <div className="container">
        <h1 className="text-center mt-8 mb-2 sm:mb-4 text-base sm:text-2xl font-bold">
          ফিরে আসার গল্প
        </h1>

        <div className="grid grid-cols-4">
          {storiesData.map((item: any, index: number) => (
            <div
              key={index}
              className="rounded-md overflow-hidden group bg-white p-3"
            >
              <div className="w-full rounded-md relative overflow-hidden">
                <Image
                  className="w-full"
                  width={900}
                  height={900}
                  src={item.thumbnail}
                  alt="Stories Thumbnail"
                />
                <div className="w-full h-full absolute top-0 left-0 bg-black/20 flex justify-center items-center cursor-pointer">
                  <AiFillPlayCircle className="text-7xl text-white" />
                </div>
              </div>
              <h2 className="text-sm sm:text-xl mt-2 text-gray-800">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
