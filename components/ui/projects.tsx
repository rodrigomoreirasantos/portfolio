import Image from "next/image";

const Projects = () => {
  return (
    <>
      <h1 className="font-bold">Project</h1>
      <div className="flex gap-4">
        <Image
          src="/profile.jpeg"
          width={0}
          height={0}
          sizes="100vw"
          className="h-40 w-40 object-contain"
          alt="Trips Project"
        />
        <div>
          <h2 className="font-bold">Trips</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae,
            expedita sapiente temporibus totam pariatur aspernatur, id sit
          </p>
          <div className="flex gap-4 py-2">
            <Image
              src="/next.svg"
              alt="Nextjs Icon"
              height={0}
              width={0}
              sizes="100vw"
              className="h-6 w-6 object-contain"
            />
            <Image
              src="/react.svg"
              alt="React Icon"
              height={0}
              width={0}
              sizes="100vw"
              className="h-6 w-6 object-contain"
            />
            <Image
              src="/tailwindcss.svg"
              alt="Tailwind Icon"
              height={0}
              width={0}
              sizes="100vw"
              className="h-6 w-6 object-contain"
            />
            <Image
              src="/postgresql.svg"
              alt="Tailwind Icon"
              height={0}
              width={0}
              sizes="100vw"
              className="h-6 w-6 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <h2 className="font-bold">Store</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae,
            expedita sapiente temporibus totam pariatur aspernatur, id sit
          </p>
        </div>

        <Image
          src="/profile.jpeg"
          width={0}
          height={0}
          sizes="100vw"
          className="h-40 w-40 object-contain flex-1"
          alt="Store Project"
        />
      </div>
    </>
  );
};

export default Projects;
