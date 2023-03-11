import React from "react";
import Link from "next/link";
const Cta = () => {
  return (
    <div>
      <div>
        <h1>Clipboard for iOS and Mac OS</h1>
        <p>
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <Link href="/">Download for iOS</Link>
        <Link href="/">Download for Mac</Link>
      </div>
    </div>
  );
};

export default Cta;
