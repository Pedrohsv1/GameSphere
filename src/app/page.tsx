import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/themeButton";
import { Icon } from "@/components/icon";

export default function Home() {
  return (
    <main className="flex gap-8 h-screen w-screen flex-col items-center justify-between p-24 relative">
      <div className="w-full flex gap-2 justify-between">
        <div className="flex gap-4 justify-center items-center">
          <Icon href="/" variant="outline" />

          <Link href={"code"} className={buttonVariants({ variant: "link" })}>
            About us
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            className={buttonVariants({
              variant: "default",
            })}
            href={"/login"}
          >
            Login
          </Link>
          <Link
            className={buttonVariants({
              variant: "outline",
            })}
            href={"/signIn"}
          >
            Sign In
          </Link>
          <ModeToggle />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 h-full">
        <div className="flex gap-8 flex-col w-full justify-center">
          <h1 className="text-6xl font-bold">O melhor lugar para os gamers</h1>
          <p className="text-base leading-relaxed text-primary/80">
            A rede social permite que os gamers compartilhem seus momentos mais
            emocionantes e desafiadores enquanto jogam. É possível fazer upload
            de vídeos de jogabilidade, capturas de tela e transmitir partidas ao
            vivo para que outros usuários acompanhem em tempo real.
          </p>
          <Link
            className={buttonVariants({
              variant: "default",
              className: "w-52",
            })}
            href={"/login"}
          >
            Se tornar um geek! 🤓
          </Link>
        </div>

        <div className="w-full h-full relative bottom-0 rounded-2xl overflow-hidden">
          <Image
            src={"/gamesfooter.jpg"}
            fill
            alt="jogador de xbox"
            className="object-cover object-bottom z-0"
          />
        </div>
      </div>
    </main>
  );
}
