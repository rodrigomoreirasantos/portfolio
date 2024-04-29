import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        src="/profile.jpeg"
        alt="profile image"
        height={0}
        width={0}
        sizes="100vw"
        className="h-auto w-auto object-contain"
      />
      <div className="text-center">
        <p>Hi! I&apos;m Rodrigo Moreira Santos</p>
        <p>Software Developer (Breve descrição)</p>
      </div>
    </div>
  );
};

export default Hero;
