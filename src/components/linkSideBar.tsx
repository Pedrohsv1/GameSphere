import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
interface PropsLink extends LinkProps {
  children: ReactNode;
}

export const LinkSideBar = ({ children, href }: PropsLink) => {
  return (
    <Link
      className="h-10 px-4 py-2 flex items-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground"
      href={href}
    >
      {children}
    </Link>
  );
};
