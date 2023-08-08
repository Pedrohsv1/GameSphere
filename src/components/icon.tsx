import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

interface PropsIcon {
  href: string;
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

export const Icon = ({ href, variant }: PropsIcon) => {
  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: variant,
        className: "w-[44px] relative",
      })}
    >
      <Image src={"/logo.svg"} alt="logo GameSphere" fill className="p-2" />
    </Link>
  );
};
