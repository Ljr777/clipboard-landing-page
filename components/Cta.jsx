import React from "react";
import Link from "next/link";
const Cta = () => {
  return (
    <div className="mt-36 text-center">
      <div className="">
        <h2 className="font-bold text-3xl text-[#4c545d]">
          Clipboard for iOS and Mac OS
        </h2>
        <p className="text-[#9fabb2]">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>
      </div>
      <div className="mt-12 flex flex-col md:flex-row gap-y-4 text-white w-full">
        <Link className="bg-[#26baa4] rounded-3xl py-2" href="/">
          Download for iOS
        </Link>
        <Link className="bg-[#6173ff] rounded-3xl py-2" href="/">
          Download for Mac
        </Link>
      </div>
    </div>
  );
};

export default Cta;
