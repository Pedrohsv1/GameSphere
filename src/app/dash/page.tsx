import { AvatarFeed } from "@/components/avatarFeed";
import { Feed } from "@/components/feed";
import { Icon } from "@/components/icon";
import { LinkSideBar } from "@/components/linkSideBar";
import { ModeToggle } from "@/components/themeButton";
import { Input } from "@/components/ui/input";
import { Home, Search, Bell, User } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex max-w-screen items-center justify-center">
      <div className="grid grid-cols-7 min-w-[1020px] max-w-[1400px]">
        <div className="sticky  gap-4 top-0 box-border  h-screen p-8 col-span-2">
          <div className="flex w-full gap-4">
            <Icon href="/dash" variant="outline" />
            <ModeToggle />
          </div>
          <LinkSideBar href={"/dash"}>
            <Home size={24} />
            <p>Home</p>
          </LinkSideBar>
          <LinkSideBar href={"/dash"}>
            <Search size={24} />
            Explorar
          </LinkSideBar>
          <LinkSideBar href={"/dash"}>
            <Bell size={24} />
            Notificações
          </LinkSideBar>
          <LinkSideBar href={"/dash"}>
            <User />
            Perfil
          </LinkSideBar>
        </div>
        <Feed />
        <div className="sticky h-screen top-0 min-h-screen col-span-2">
          <div className="px-8 py-4 space-y-8 ">
            <div className="flex gap-4 items-center">
              <Search />
              <Input placeholder="search" />
            </div>
            <div className="sticky  gap-4 p-4 bg-secondary/50 rounded-md">
              <h2 className="font-bold text-xl">Quem seguir?</h2>
              <Link
                href={"/"}
                className=" px-4 py-2 flex justify-between items-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-background hover:text-accent-foreground"
              >
                <div className="flex gap-2 items-center">
                  <AvatarFeed
                    username="Caralho@123"
                    avatarUrl="rangerlol.png"
                  />
                  <div className="flex flex-col">
                    <h2 className="font-bold text-sm flex break-all">
                      Zezão123
                    </h2>
                    <h3 className=" text-sm text-primary/50">@carais</h3>
                  </div>
                </div>
              </Link>
              <Link
                href={"/"}
                className=" px-4 py-2 flex justify-between items-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-background hover:text-accent-foreground"
              >
                <div className="flex gap-2 items-center">
                  <AvatarFeed
                    username="Caralho@123"
                    avatarUrl="rangerlol.png"
                  />
                  <div>
                    <h2 className="font-bold text-sm">Caralho@123</h2>
                    <h3 className=" text-sm text-primary/50">@carais</h3>
                  </div>
                </div>
              </Link>
              <Link
                href={"/"}
                className=" px-4 py-2 flex justify-between items-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-background hover:text-accent-foreground"
              >
                <div className="flex gap-2 items-center">
                  <AvatarFeed
                    username="Caralho@123"
                    avatarUrl="rangerlol.png"
                  />
                  <div>
                    <h2 className="font-bold text-sm">Caralho@123</h2>
                    <h3 className=" text-sm text-primary/50">@carais</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
