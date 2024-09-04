import Link from "next/link";

import { Button } from "@/components/ui/button";

import {
  IconBrandGithub,
  IconLogoBing,
  IconLogoCentOS,
  IconLogoGoogle,
  IconLogoRockyLinux,
  IconSkillCSS,
  IconSkillDebianDark,
  IconSkillDebianLight,
  IconSkillDocker,
  IconSkillFigmaDark,
  IconSkillFigmaLight,
  IconSkillGolang,
  IconSkillHTML,
  IconSkillJavaScript,
  IconSkillMysqlDark,
  IconSkillMysqlLight,
  IconSkillNextjsDark,
  IconSkillNextjsLight,
  IconSkillNginx,
  IconSkillNodejsDark,
  IconSkillNodejsLight,
  IconSkillPrisma,
  IconSkillReactDark,
  IconSkillReactLight,
  IconSkillStackoverflowDark,
  IconSkillStackoverflowLight,
  IconSkillTailwindcssDark,
  IconSkillTailwindcssLight,
  IconSkillTypeScript,
} from "@/components/icons";

import { NICKNAME } from "@/constants";
import { socialMediaList } from "@/features/home";
import {IconSkillDotnet} from "@/components/icons/skills/icon-skill-dotnet";
import {IconSkillRiderDark, IconSkillRiderLight} from "@/components/icons/skills/icon-skill-rider";
import {IconLogoDatagrip} from "@/components/icons/logos/icon-logo-datagrip";
import {IconSkillVisualStudioDark, IconSkillVisualStudioLight} from "@/components/icons/skills/icon-skill-visualstudio";
import {IconSkillPostgreSQLDark, IconSkillPostgreSQLLight} from "@/components/icons/skills/icon-skill-postgreSQL";
import {IconLogoApple} from "@/components/icons/logos/icon-logo-apple";

export const revalidate = 60;

export default function Page() {
  let delay = 0;

  // 每次调用，增加延时
  const getDelay = () => (delay += 200);

  return (
    <div className="flex w-full flex-col justify-center px-6 pb-24 pt-8">
      <section className="w-screen-wrapper prose prose-neutral mx-auto max-w-screen-wrapper dark:prose-invert">
        <h2 className="text-3xl font-bold md:text-4xl">关于</h2>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h2>我是谁</h2>
          <p>
            Hi~ 我是{NICKNAME}
            ，一名后端开发实习生，YSU21届电子商务在读，喜欢 Coding 和 CS
          </p>
        </div>

        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h2>我的技能</h2>
        </div>

        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h3>前端</h3>
          <ul>
            <li>
              <IconSkillHTML className="mx-1 translate-y-0.5"/> HTML +
              <IconSkillCSS className="mx-1 translate-y-0.5"/>
              CSS + <IconSkillJavaScript className="mx-1 translate-y-0.5"/>
              JavaScript ，just了解
              <span className="ml-1 line-through">不太熟练</span>
            </li>
          </ul>
        </div>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h3>后端</h3>
          <ul>
            <li>
              <IconSkillDotnet className="mx-1 translate-y-0.5"/>
              .NET框架（ABP架构）+
              <>
                <IconSkillPostgreSQLDark className="mx-1 translate-y-0.5 dark:hidden"/>
                <IconSkillPostgreSQLLight className="mx-1 hidden translate-y-0.5 dark:inline-block"/>
                PostgreSQL，
              </>
              正在学习
            </li>
            <li>
              PHP开发<span className="ml-1 line-through">几乎忘干净了</span>
            </li>
          </ul>
        </div>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h3>开发工具</h3>
          <ul>
            <li>
              主要使用
              <>
                <IconSkillRiderDark className="mx-1 translate-y-0.5 dark:hidden"/>
                <IconSkillRiderLight className="mx-1 hidden translate-y-0.5 dark:inline-block"/>
              </>
              Rider +
              <IconLogoDatagrip className="mx-1 translate-y-0.5"/>
              DataGrip + 
              <span className="ml-1 line-through">
                <IconSkillVisualStudioDark className="mx-1 translate-y-0.5 dark:hidden"/>
                <IconSkillVisualStudioLight className="mx-1 hidden translate-y-0.5 dark:inline-block"/>
                偶尔用一下
              </span>
            </li>
            <li>
              Git +
              Docker +
              Rides……<span className="ml-1 line-through">根本记不住</span>
            </li>
          </ul>
        </div>

        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h2>我的设备</h2>
          <ul>
            <li> <IconLogoApple className="mx-1 translate-y-0.5"/>
              iPhone 15 黑色 128G
            </li>
            <li>  <IconLogoApple className="mx-1 translate-y-0.5"/>
              MacBook Air M2 16+512
              <span className="line-through">
                想买 Vison Pro的第10086天
              </span>
              🙃
            </li>
            <li>键盘：DrunkDeer G60</li>
            <li>鼠标：罗技 G PRO X SUPERLIGHT 2</li>
          </ul>
        </div>

        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h2>联系我</h2>
          <p>你可以通过👇下面任意一种方式联系我</p>
          <ul className="!mb-0 flex !list-none items-center space-x-4 !pl-0">
            {socialMediaList.map((el) => (
              <li key={el.link}>
                <Button asChild variant="outline" size="icon">
                  <Link href={el.link} target="_blank">
                    {el.icon}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
