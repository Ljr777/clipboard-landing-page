import React from "react";
import Link from "next/link";
import Image from "next/image";
const Testimonials = () => {
  const logos = ["google", "ibm", "microsoft", "hp", "vector-graphics"];
  return (
    <div className="mt-36 flex flex-col md:flex-row items-center gap-12">
      {logos.map((logo) => {
        return (
          <Image
            src={`/static/images/logo-${logo}.png`}
            width="150"
            height="100"
          />
        );
      })}
    </div>
  );
};

export default Testimonials;
