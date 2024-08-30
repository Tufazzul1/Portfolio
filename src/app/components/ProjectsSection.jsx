"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import ProjectCard2 from "./ProjectCard2";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "A RealState Website",
    description: "This real estate project offers quick property searches with advanced filters and secure social login. Users can save favorites and access expert guides for informed decisions.  ",
    image: "/images/projects/Urban.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tufazzul1/Urban-Edge",
    previewUrl: "https://urban-edge-tufazzul1.netlify.app",
  },
  {
    id: 2,
    title: "Book Review website",
    description: "Book review is a web application designed to enhance the experience of finding and exploring books.",
    image: "/images/projects/Book-Review.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tufazzul1/Assignment8-Book-review-",
    previewUrl: "https://assignment8-book-review.netlify.app",
  },
  {
    id: 3,
    title: "A Restaurant Website",
    description: "This is a restaurant website where users can place orders, track the status of their orders, and also update the cooking status.",
    image: "/images/projects/Chef-table.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tufazzul1/Assignment7-Chef-table-",
    previewUrl: "https://assignment7-tufazzul.netlify.app",
  },
  {
    id: 3,
    title: "A Forum Website",
    description: "This is a static retro forum website where users can browse and read various forums. Additionally, users have the option to mark forums as read to keep track of their progress.",
    image: "/images/projects/Retro.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tufazzul1/Assignmet6-Retro",
    previewUrl: "https://assignment-6-tufazzul.netlify.app",
  }
];



export default function ProjectsSection() {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-16 mb-8 md:mb-12">
        Projects
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination , Autoplay, Navigation]}
        className="mySwiper"
      >
        {filteredProjects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <motion.div
              ref={ref}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard2
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl || "#"}
                previewUrl={project.previewUrl || "#  "}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
