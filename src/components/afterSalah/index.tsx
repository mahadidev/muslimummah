import React from "react";

const AfterSalah = () => {
  const problemSolutions = [
    {
      title: "মনকে দুশ্চিন্তা মুক্ত রাখার দোয়া.",
      arabic:
        "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَ أَعُوذُ بِكَ مِنَ الْبُخْلِ وَالْجُبْنِ، وَ أَعُوذُ بِكَ مِنَ ضَلَعِ الدَّيْنِ، وَغَلَبَةِ الرِّجَالِ",

      bangla:
        "আল্লাহুম্মা ইন্নি আউযু বিকা মিনাল হাম্মি ওয়াল হাযানি, ওয়া আউযু বিকা মিনাল বুখলি ওয়াল জুবনি, ওয়া আউযু বিকা মিন দ্বালা’য়িদ্দাইনি ওয়া গালাবাতির রিজাল।",
      meaning:
        "হে আল্লাহ! নিশ্চয়ই আমি দুশ্চিন্তা ও দুঃখ থেকে আপনার আশ্রয় চাই, অপারগতা ও অলসতা থেকে আপনার আশ্রয় চাই, কৃপণতা ও ভীরুতা থেকে আপনার আশ্রয় চাই আর ঋণের ভার ও মানুষদের দমন-পীড়ন থেকেও আপনার আশ্রয় চাই।",
      ref: "বুখারি, মুসলিম, মিশকাত",
    },
  ];
  return (
    <section>
      <div className="container">
        <h1 className="mt-8 mb-4 text-base sm:text-2xl font-bold">
          বিভিন্ন সমস্যার সমাধান
        </h1>

        <div className="flex flex-col gap-4">
          <div id="accordion-open" data-accordion="open">
            {problemSolutions.map((item: any, index: number) => (
              <>
                <h2 id={`accordion-open-heading-${index}`}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl bg-gray-50"
                    data-accordion-target={`#accordion-open-body-${index}`}
                    aria-expanded="false"
                    aria-controls={`accordion-open-body-${index}`}
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {item.title}
                    </span>
                    <svg
                      data-accordion-icon
                      className="w-6 h-6 rotate-180 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id={`accordion-open-body-${index}`}
                  className="hidden"
                  aria-labelledby={`accordion-open-heading-${index}`}
                >
                  <div className="p-5 bg-gray-50 border border-b-0 border-gray-200 ">
                    <p className="text-base mb-3 text-gray-800 font-semibold">
                      {item.arabic}
                    </p>
                    <p className="text-base mb-3 text-gray-800 font-semibold">
                      উচ্চারণ : {item.bangla}
                    </p>
                    <p className="text-base text-gray-500 ">
                      অর্থ : {item.meaning}
                    </p>
                  </div>
                </div>
                <div className="h-2"></div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterSalah;
