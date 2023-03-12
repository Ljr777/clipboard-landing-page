import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const socials = ["facebook", "twitter", "instagram"];
  const options = [
    "FAQs",
    "Contact Us",
    "Privacy Policy",
    "Press Kit",
    "Install Guide",
  ];
  return (
    <div className="mt-36 flex flex-col md:flex-row items-center justify-center text-center gap-y-10">
      <div>
        <Image src="/static/images/logo.svg" width="50" height="50" />
      </div>
      <ul className="flex flex-col gap-y-5 font-bold text-[#9fabb2]">
        {options.map((option, i) => {
          return (
            <li>
              <Link href="/">{option}</Link>
            </li>
          );
        })}
      </ul>
      {/* socials part */}
      <div className="flex flex-row gap-x-10">
        {socials.map((social, key) => {
          return (
            <div>
              <Image
                src={`/static/images/icon-${social}.svg`}
                width="20"
                height="20"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
