import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-5">
      <div className="container w-full flex flex-row gap-4">
        <Link href="https://www.linkedin.com/in/rodrigo-moreira-santos/">
          <Linkedin />
        </Link>
        <Link href="https://github.com/rodrigomoreirasantos">
          <Github />
        </Link>
      </div>
    </header>
  );
};

export default Header;
