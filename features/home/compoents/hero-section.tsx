import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { NICKNAME, PATHS } from "@/constants";
import { TypeIntro } from "@/features/home";
import { cn } from "@/lib/utils";

import { socialMediaList } from "./social-media";

export const HeroSection = () => {
  let delay = 0;

  // 每次调用，增加延时
  const getDelay = () => (delay += 200);

  return (
    <div className="flex min-h-full  max-w-screen-md flex-col justify-center gap-5 px-6 md:px-10 2xl:max-w-7xl">
      <p
        className="animate-fade-up text-2xl tracking-widest animate-ease-in-out md:text-5xl"
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        👋 你好，我是
      </p>
      <strong
        className={cn(
          `text-5xl md:text-8xl tracking-widest font-black  bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500`,
          "animate-fade-up animate-ease-in-out",
        )}
        style={{
          WebkitTextFillColor: "transparent",
          animationDelay: `${getDelay()}ms`,
        }}
      >
        {NICKNAME}
      </strong>
      <div
        className={cn("animate-fade-up animate-ease-in-out")}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        <TypeIntro />
      </div>
      <p
        className={cn(
          "text-2xl md:text-5xl tracking-widest",
          "animate-fade-up animate-ease-in-out",
        )}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        正在学
        <span className={`font-semibold text-[#00d8ff]`}>Java</span>、
        <span className={`font-semibold text-[#007acc]`}>C#</span>和
        <span className={`font-semibold text-[#00b4e0]`}>.NET!</span>
        <span className="ml-4">JetBrains忠实用户</span>
      </p>
      <p
        className={cn(
          "text-base md:text-2xl text-muted-foreground tracking-widest",
          "animate-fade-up animate-ease-in-out",
        )}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        欢迎来到我的个人网站
      </p>
      <div
        className={cn("flex space-x-4", "animate-fade-up animate-ease-in-out")}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        <Link
          href={PATHS.SITE_BLOG}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          我的博客
        </Link>
        <Link
          href={PATHS.SITE_SNIPPET}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          我的代码
        </Link>
        <Link
          href={PATHS.SITE_ABOUT}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          关于我
        </Link>
      </div>

      <ul
        className={cn("flex space-x-4", "animate-fade-up animate-ease-in-out")}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        {socialMediaList.map((el) => (
          <li key={el.link}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="outline" size="icon">
                  <Link href={el.link} target="_blank">
                    {el.icon}
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{el.label}</TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );
};
