import Image from "next/image";

const Skills = () => {
  return (
    <>
      <Image
        src="/next.svg"
        alt="Nextjs Icon"
        height={0}
        width={0}
        sizes="100vw"
        className="h-10 w-10 object-contain"
      />
      <Image
        src="/react.svg"
        alt="React Icon"
        height={0}
        width={0}
        sizes="100vw"
        className="h-10 w-10 object-contain"
      />
      <Image
        src="/tailwindcss.svg"
        alt="Tailwind Icon"
        height={0}
        width={0}
        sizes="100vw"
        className="h-10 w-10 object-contain"
      />
      <Image
        src="/postgresql.svg"
        alt="Tailwind Icon"
        height={0}
        width={0}
        sizes="100vw"
        className="h-10 w-10 object-contain"
      />
    </>
  );
};

export default Skills;
