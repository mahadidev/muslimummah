import { AfterSalah, Hero, Stories } from "@/components";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AfterSalah />
      <Stories />
    </>
  );
};

export default HomePage;
