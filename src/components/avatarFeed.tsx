import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import React from "react";

interface PropsAvatarFeed {
  avatarUrl: string;
  username: string;
}

export const AvatarFeed = ({ avatarUrl, username }: PropsAvatarFeed) => {
  return (
    <Avatar>
      <AvatarImage
        src={avatarUrl}
        alt={`imagem de perfil de ${username}`}
        className="w-12 h-12 rounded-full object-cover"
      />
      <AvatarFallback>{username[0]}</AvatarFallback>
    </Avatar>
  );
};
