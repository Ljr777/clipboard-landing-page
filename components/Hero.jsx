import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="bg-red-500">
      <div>A history of everything you copy</div>
      <p>
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <div className="flex flex-col md:flex-row">
        <Link href="/">Download for iOS</Link>
        <Link href="/">Download for Mac</Link>
      </div>
    </div>
  );
};

export default Hero;
