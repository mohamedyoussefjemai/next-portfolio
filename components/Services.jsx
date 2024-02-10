import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

// data
import serviceData, { servicePageData } from "@/shared/data/service.data";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: serviceData.backend.title,
    description: serviceData.backend.description,
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: serviceData.frontend.title,
    description: serviceData.frontend.description,
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: serviceData.wordpress.title,
    description: serviceData.wordpress.description,
  },
];

const Services = () => {
  return (
    <section className="lg:mt-[40px] mt-[10px] mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-24 xl:mb-32 text-center mx-auto ">
          {servicePageData.title}
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative mb-10"
                key={index}
              >
                <CardHeader className="text-primary absolute md:-top-[60px] -top-[56px] ">
                  <div className="md:w-[140px] md:h-[80px] w-[70px] h-[40px] md:bg-white lg:bg-transparent dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mt-4 pb-2">{item.title}</CardTitle>
                  <CardDescription className="text-lg text-justify">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
