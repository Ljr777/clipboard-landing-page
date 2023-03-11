import React from "react";
import Link from "next/link";
import Image from "next/image";
const Testimonials = () => {
  const logos = ["google", "ibm", "microsoft", "hp", "vector-graphics"];
  return (
    <div className="flex flex-col md:flex-row">
      {logos.map((logo) => {
        return (
          <Image
            src={`/static/images/logo-${logo}.png`}
            width="100"
            height="50"
          />
        );
      })}
    </div>
  );
};

export default Testimonials;
