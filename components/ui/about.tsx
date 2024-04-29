import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="font-bold">About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          explicabo rerum ut ipsam ipsum quis aspernatur, officiis praesentium
          perspiciatis accusamus sapiente sequi. Totam laudantium non reiciendis
          eveniet dicta architecto perspiciatis.
        </p>
      </div>

      <div>
        <h3 className="font-bold">Skills</h3>
        <div className="flex flex-row gap-4">
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
        </div>
      </div>
    </div>
  );
};

export default About;
