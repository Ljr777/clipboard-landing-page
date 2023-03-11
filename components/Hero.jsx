import React from "react";
import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="bg-red-500">
      <Image src="/static/images/logo.svg" width="50" height="50" />

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
