"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Verified } from "@/components/verified";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Heart, MessageCircle, BarChart2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Textarea } from "./ui/textarea";
import { AvatarFeed } from "./avatarFeed";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import axios from "axios";
import { useQuery } from "react-query";

const formSchema = z.object({
  text: z.string().min(2).max(999),
});

export const Feed = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const { data } = useQuery("posts", () =>
    axios.get("https://dummyjson.com/posts").then((res) => res.data.posts)
  );

  const posts = [
    {
      id: 1,
      username: "RodriGois",
      hastag: "rodrigogois",
      avatarUrl: "/rodrigo.png",
      verified: true,
      text: "Vc usa o suco? I DON KNOW! YOU TELL ME! 🙀",
      likes: 2093,
      views: 31032,
      datapost: new Date(),
      comments: [
        {
          id: 1,
          username: "Dan",
          hastag: "danzinhogameplay",
          avatarUrl: "/dan.png",
          verified: true,
          text: "Jesus christ!",
          likes: 102,
          datapost: new Date(),
        },
      ],
    },
    {
      id: 2,
      username: "Pedrin",
      hastag: "pedrogereba",
      avatarUrl: "https://github.com/pedrohsv1.png",
      verified: false,
      text: "Ai ai ai essa tal de Fernanda é uma gatinha vic",
      likes: 999,
      views: 31032,
      datapost: new Date(),
      comments: [],
    },
  ];

  return (
    <div className="col-start-3 col-span-3 border-x min-h-screen">
      <Tabs defaultValue="HomePage" className="w-full">
        <TabsList className="grid w-full grid-cols-2 border-b px-8 rounded-none bg-transparent h-max py-4 gap-4">
          <TabsTrigger
            value="HomePage"
            className={buttonVariants({
              variant: "outline",
              className: "data-[state=active]:bg-secondary",
            })}
          >
            Homepage
          </TabsTrigger>
          <TabsTrigger
            value="Friends"
            className={buttonVariants({
              variant: "outline",
              className: "data-[state=active]:bg-secondary",
            })}
          >
            Friends
          </TabsTrigger>
        </TabsList>
        <TabsContent value="HomePage">
          <div className="flex flex-col p-8 border-b gap-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="O que você está jogando hoje?"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>This post is public.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Post</Button>
              </form>
            </Form>
          </div>
          {posts &&
            posts.map((post: any) => (
              <div
                key={post.id}
                className="w-full p-8 border-b text-left hover:bg-secondary/20 transition-all"
              >
                <div className="flex flex-col justify-start gap-4 ">
                  <div className="flex gap-4 items-center">
                    <AvatarFeed
                      username={post.username}
                      avatarUrl={post.avatarUrl}
                    />
                    {post.verified && <Verified />}
                    <h2 className="font-bold text-xl">{post.username}</h2>
                    <h3 className=" text-sm text-primary/50">@{post.hastag}</h3>
                    <div className="w-2 h-2 border rounded-full"></div>
                    <p className="text-sm text-primary/70">{`${post.datapost.getDate()}/${
                      post.datapost.getMonth() + 1
                    }/${post.datapost.getUTCFullYear()}`}</p>
                  </div>
                  <div>
                    <p className="text-sm text-primary/90">
                      {post.text} Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Aliquid, cum. Quia ex deserunt quis
                      consectetur illum consequatur officiis iste necessitatibus
                      eligendi, amet ut. Vel quia iusto architecto ea dolorum
                      omnis?{" "}
                    </p>
                  </div>
                  <div className="flex items-center gap-8">
                    <button className=" group flex items-center gap-2">
                      <div className="group-hover:bg-red-500/10 p-2 rounded-full flex items-center justify-center transition-all">
                        <Heart />
                      </div>
                      <p className="text-sm">{post.likes}</p>
                    </button>
                    <Link
                      href={`/dash/${post.id}`}
                      className="group flex items-center gap-2"
                    >
                      <div className="group-hover:bg-blue-500/10 p-2 rounded-full flex items-center justify-center transition-all">
                        <MessageCircle size={24} />
                      </div>

                      <p className="text-sm">{post.comments.length}</p>
                    </Link>
                    <div className="group flex items-center gap-2">
                      <div className="group-hover:bg-green-500/10 p-2 rounded-full flex items-center justify-center transition-all">
                        <BarChart2 />
                      </div>
                      <p className="text-sm">{post.views}</p>
                    </div>
                  </div>
                  <div>
                    {post.comments.map((com: any) => (
                      <div
                        className="flex flex-col border-l px-8 py-2 gap-4"
                        key={com.id}
                      >
                        <div className="flex flex-col justify-start gap-4 ">
                          <div className="flex gap-4 items-center">
                            <Avatar>
                              <AvatarImage
                                src={com.avatarUrl}
                                alt={`imagem de perfil de ${com.username}`}
                              />
                              <AvatarFallback>{com.username[0]}</AvatarFallback>
                            </Avatar>
                            {com.verified && <Verified />}
                            <h2 className="font-bold text-lg">
                              {com.username}
                            </h2>
                            <h3 className=" text-sm text-primary/50">
                              @{com.hastag}
                            </h3>
                            <div className="w-2 h-2 border rounded-full"></div>
                            <p className="text-sm text-primary/50">{`${com.datapost.getDate()}/${
                              com.datapost.getMonth() + 1
                            }/${com.datapost.getUTCFullYear()}`}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-primary/90">{com.text}</p>
                        </div>
                        <div className="flex items-center gap-8">
                          <button className=" group flex items-center gap-2">
                            <div className="group-hover:bg-red-500/10 p-2 rounded-full flex items-center justify-center transition-all">
                              <Heart />
                            </div>
                            <p className="text-sm">{com.likes}</p>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </TabsContent>
        <TabsContent value="Friends">
          <div className="flex flex-col p-8 border-b gap-4 w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="O que você está jogando hoje?"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>This post is public.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Post</Button>
              </form>
            </Form>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
