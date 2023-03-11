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
    <div>
      <div>
        <Image src="/static/images/logo.svg" width="20" height="20" />
      </div>
      <ul>
        {options.map((option, key) => {
          return (
            <li>
              <Link href="/">{option}</Link>
            </li>
          );
        })}
      </ul>
      {/* socials part */}
      <div className="">
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
