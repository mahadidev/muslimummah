import React from "react";

const HomePage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div>
        <h1 className="text-2xl">HomePage</h1>
        <a className="underline text-center mx-auto" href="/shop">
          Shop
        </a>
      </div>
    </div>
  );
};

export default HomePage;
