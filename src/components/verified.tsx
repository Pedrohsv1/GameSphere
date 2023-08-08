import React from "react";
import Image from "next/image";

export const Verified = () => {
  return (
    <div className="border p-2 rounded-full w-8 h-8 flex items-center justify-center">
      <Image src={"/logo.svg"} alt="logo GameSphere" width={12} height={24} />
    </div>
  );
};
