import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl flex-2 px-10 mx-auto items-center justify-evenly"
    >
      <h3 className="absolute top-7 uppercase tracking-[20px] text-gray-500 text-2xl xs:text-base xs:top-16 md:text-2xl lg:top-5">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-40 h-40 -mb-20 flex-shrink-0 rounded-full object-cover xs:w-16 xs:h-16 xs:-mb-[55px] xs:mt-8 xm:w-36 xm:h-36 sm:w-40 sm:h-40  md:mb-0 md:rounded-full md:w-60 md:h-60 xl:w-[500px] xl:h-[500px]"
        src={urlFor(pageInfo?.profilePic).url()}
      />

      <div className="px-0 md:px-10">
        <h4 className="hidden text-2xl font-semibold md:inline-flex">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50 pr-2 pl-2">
            little
          </span>{" "}
          background
        </h4>
        <p className="sm:text-base xs:text-xs xm:text-[16px] xl:w-[34rem] xs:w-80">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
