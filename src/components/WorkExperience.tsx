import React from "react";

import { motion } from "framer-motion";
import ExperienceCards from "./ExperienceCards";
import { Experience } from "../../typings";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly items-center mx-auto"
    >
      <h3 className="absolute top-20 lg:top-20 uppercase tracking-[20px] text-gray-500 text-2xl lg:text-xl xs:text-sm">
        Experience
      </h3>
      <div
        className="w-full flex space-x-3 overflow-x-scroll p-10 snap-x 
          snap-mandatory absolute top-[90px] scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin"
      >
        {experiences.map((experience) => (
          <ExperienceCards key={experience?._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
