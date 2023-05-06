import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaHands, FaMosque } from "react-icons/fa";
import { BsBookFill } from "react-icons/bs";

const Navigation = () => {
  const menus = [
    {
      icon: <AiFillHome />,
      label: "হোম",
    },
    {
      icon: <FaHands />,
      label: "দোয়া",
    },
    {
      icon: <FaMosque />,
      label: "জিকির",
    },
    {
      icon: <BsBookFill />,
      label: "কুরআন",
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full h-max bg-white">
      <div className="">
        <div className="flex justify-between items-center">
          {menus.map(
            (
              item: {
                icon: any;
                label: string;
              },
              index
            ) => (
              <Link
                className="w-full flex flex-col items-center gap-1 bg-white hover:bg-gray-200 text-gray-500 py-2 px-3 transition-all text-xs rounded-md"
                href="/"
                key={index}
              >
                <p className="text-2xl">{item.icon}</p>
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
