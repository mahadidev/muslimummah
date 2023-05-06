import React from "react";

const Hero = () => {
  const boxes = [
    {
      label: "নামাজ ও আমল",
    },
    {
      label: "সকাল ও সন্ধ্যা",
    },
    {
      label: "বাংলা কুরআন",
    },
    {
      label: "বাংলা হাদিস",
    },
  ];

  return (
    <>
      <section className="bg-primary-50">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full  hover:bg-gray-200 "
            role="alert"
          >
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>
            <span className="text-sm font-medium">
              আপনি ও এখন পোস্ট করতে পারবেন
            </span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <h1 className="mb-4 text-base sm:text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
            আপনার দিন শুরু হোক সুন্নাহ অনুযায়ী
          </h1>
          <p className="mb-8 text-sm sm:text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
            এই এপ এ বিভিন্ন হাসিস, আমল ও ইসলামিক ভিডিও পাবেন কোনো বিজ্ঞাপন
            ছাড়াই। আপনি ও হাদিস এড করে আমাদের দাওয়াতি কাজে সহযোগিয়া করতে পারেন।
          </p>
          <div className="flex flex-col mb-4 sm:mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center items-center py-2 sm:py-3 px-2 sm:px-5 text-sm sm:text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
            >
              শুরু করুন
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center py-2 sm:py-3 px-2 sm:px-5 text-sm sm:text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              ভিডিও দেখুন
            </a>
          </div>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {boxes.map(
                (
                  item: {
                    label: string;
                  },
                  index: number
                ) => (
                  <div
                    className="w-full bg-primary-100 px-4 py-3 rounded-md"
                    key={index}
                  >
                    <h1 className="text-sm sm:text-lg">{item.label}</h1>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
