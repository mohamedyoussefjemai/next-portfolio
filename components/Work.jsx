"use client";
import Link from "next/link";

// import swiper react component
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";

// components
import { Button } from "./ui/button";
import ProjectCard from "./ProjectCard";

// import swiper style
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// data
import projectsData, { projectPageData } from "@/shared/data/work.data";

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">{projectPageData.title}</h2>
          <p className="subtitle mb-8"> {projectPageData.description}</p>
          <Link href={projectPageData.path}>
            <Button>{projectPageData.all}</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <SwiperComponent
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the 4 first projects for the slides */}
            {projectsData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </SwiperComponent>
        </div>
      </div>
    </section>
  );
};

export default Work;
