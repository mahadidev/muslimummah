import Image from "next/image";
import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

import YouTube, { YouTubeProps } from "react-youtube";

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

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

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
              data-modal-target="staticModal"
              data-modal-toggle="staticModal"
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

      {/* modal */}
      <div
        id="staticModal"
        data-modal-backdrop="static"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xs sm:text-xl font-semibold text-gray-900 dark:text-white">
                জীবনের প্রথম তাহাজ্জুদ! একটা বোনের ফিরে আসার গল্প।
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="staticModal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="space-y-6">
              <YouTube
                videoId="XoVmz_YjXw8"
                opts={opts}
                onReady={onPlayerReady}
              />
            </div>
          </div>
        </div>
      </div>
      {/* modal  */}
    </section>
  );
};

export default Stories;
