import React from "react";
import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="px-3 py-5 flex flex-col items-center justify-center text-center gap-y-10">
      <Image src="/static/images/logo.svg" width="100" height="100" />
      <div>
        <h1 className="font-bold text-[#4c545d] text-3xl">
          A history of everything you copy
        </h1>
        <p className="text-[#9fabb2]">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-y-4 w-full text-white">
        <Link className="bg-[#26baa4] rounded-3xl  py-2" href="/">
          Download for iOS
        </Link>
        <Link className="bg-[#6173ff] rounded-3xl py-2" href="/">
          Download for Mac
        </Link>
      </div>
    </div>
  );
};

export default Hero;
