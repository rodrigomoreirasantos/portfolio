import React from "react";
import { SocialIcon } from "react-social-icons";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex flex-items-start justify-between max-w-7xl mx-auto z-20 xl: items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="currentColor"
            bgColor="transparent"
            className="text-gray-500 hover:text-gray-300"
          />
        ))}
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center gap-1.5 text-gray-300 cursor-pointer"
        >
          <AiOutlineMail className="cursor-pointer text-gray-500 w-6 h-6 hover:text-gray-300" />

          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
