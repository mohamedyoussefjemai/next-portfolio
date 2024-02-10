import Link from "next/link";
import { Download, Send } from "lucide-react";

// components
import DevImg from "@/components/DevImg";
import { Button } from "@/components/ui/button";
import Socials from "./Socials";
import Badge from "./Badge";

// icons
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill } from "react-icons/ri";

// data
import { HeroData } from "@/shared/data/hero.data";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[800px] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              {HeroData.job}
            </div>
            <h1 className="h1 mb-4">{HeroData.title}</h1>
            <p className="subtitle max-w-[498px] mx-auto xl:mx-0">
              {HeroData.description}
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={`${HeroData.primaryButton.path}`}>
                <Button className="gap-x-2">
                  {HeroData.primaryButton.text} <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                {HeroData.secondaryButton.text} <Download size={18} />
              </Button>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={HeroData.badges.Briefcase.endCountNum}
              badgeText={HeroData.badges.Briefcase.badgeText}
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={HeroData.badges.Todo.endCountNum}
              endCountText={HeroData.badges.Todo.endCountText}
              badgeText={HeroData.badges.Todo.badgeText}
            />
            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-[1rem]"
              icon={<RiTeamFill />}
              endCountNum={HeroData.badges.Team.endCountNum}
              endCountText={HeroData.badges.Team.endCountText}
              badgeText={HeroData.badges.Team.badgeText}
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc={HeroData.devImgSrc}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
