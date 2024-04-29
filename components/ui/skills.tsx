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
        alt="Nextjs Icon"
        height={0}
        width={0}
        sizes="100vw"
        className="h-10 w-10 object-contain"
      />
    </>
  );
};

export default Skills;
