import Image from "next/image";
import Skills from "./skills";

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
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
