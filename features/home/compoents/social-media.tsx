// @ts-ignore
import {
  IconBrandBilibili,
  IconBrandGithub,
  IconLogoJuejin,
} from "@/components/icons";

import { BILIBILI_PAGE, EMAIL, GITHUB_PAGE, JUEJIN_PAGE } from "@/constants";
import {
  IconLineMdEmailDark,
  IconLineMdEmailLight
} from "@/components/icons/line-md/icon-line-md-email";

export const socialMediaList: Array<{
  icon: React.ReactNode;
  label: string;
  link: string;
}> = [
  {
    icon: <IconBrandGithub className="text-2xl" />,
    label: "Github",
    link: GITHUB_PAGE,
  },
  {
    icon: (
      <>
        <IconLineMdEmailDark className="text-2xl dark:hidden text-black" />
        <IconLineMdEmailLight className="text-2xl hidden text-white dark:inline-block" />
      </>
    ),
    label: "Email",
    link: `mailto:${EMAIL}`,
  },
  {
    icon: <IconBrandBilibili className={`text-2xl text-[#00AEEC]`} />,
    label: "Bilibili",
    link: BILIBILI_PAGE,
  },
  {
    icon: <IconLogoJuejin className={`text-2xl text-[#2985fc]`} />,
    label: "掘金",
    link: JUEJIN_PAGE,
  },
];
