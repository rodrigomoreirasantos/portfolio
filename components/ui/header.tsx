import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Github, Linkedin, MenuIcon } from "lucide-react";
import Link from "next/link";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="container w-full flex flex-row justify-between items-center py-5">
      <p>RMS</p>
      <div className="flex flex-row gap-4 items-center">
        <Link href="https://www.linkedin.com/in/rodrigo-moreira-santos/">
          <Linkedin />
        </Link>
        <Link href="https://github.com/rodrigomoreirasantos">
          <Github />
        </Link>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
