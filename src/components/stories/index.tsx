import Image from "next/image";
import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const Stories = () => {
  const storiesData = [
    {
      title: "জীবনের প্রথম তাহাজ্জুদ! একটা বোনের ফিরে আসার গল্প।",
      videoUrl: "https://youtu.be/XoVmz_YjXw8",
      thumbnail: "/assets/images/stories_first_tahajjod.jpg",
    },
    {
      title: "আল্লাহর পথে ফিরে আসার গল্প- ১ | একটি আয়াত পাল্টে দিল জীবন।",
      videoUrl: "https://youtu.be/VtMELYmUPP4",
      thumbnail: "/assets/images/stories_first_a_ayat_change_life.jpg",
    },
    {
      title: "আল্লাহ পথে আসার গল্প | একটা যুবন এর ফিরে আসা।",
      videoUrl: "https://youtu.be/VtMELYmUPP4",
      thumbnail: "/assets/images/stories_first_sacrifice_boy_become_to_din.jpg",
    },
    {
      title: "আমার বিয়ের গল্প - অলৌকিক সাহায্য পাওয়ার অভিজ্ঞতা",
      videoUrl: "https://youtu.be/emHsrdy5y_A",
      thumbnail: "/assets/images/stories_first_invisible_help_from_allah.jpg",
    },
  ];

  return (
    <section>
      <div className="container">
        <h1 className="text-center mt-8 mb-2 sm:mb-4 text-base sm:text-2xl font-bold">
          ফিরে আসার গল্প
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {storiesData.map((item: any, index: number) => (
            <div
              key={index}
              className="rounded-md overflow-hidden group bg-white p-2 sm:p-3"
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
                  <AiFillPlayCircle className="text-5xl sm:text-7xl text-white" />
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
