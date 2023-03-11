import React from "react";
import Link from "next/link";
const Footer = () => {
  const list = [
    "FAQs",
    "Contact Us",
    "Privacy Policy",
    "Press Kit",
    "Install Guide",
  ];
  return (
    <div>
      <div>
        <Link href="#"></Link>
      </div>
      {list.map((list, key) => {
        return (
          <li>
            <Link href="/" />
          </li>
        );
      })}
    </div>
  );
};

export default Footer;
