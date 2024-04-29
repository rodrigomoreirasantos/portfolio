import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Menu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader className="text-left pb-5">Menu</SheetHeader>
        <div className="flex flex-col gap-4">
          <Link href="#About">
            <SheetClose asChild>
              <Button className="w-full">About</Button>
            </SheetClose>
          </Link>

          <Link href="#Projects">
            <SheetClose asChild>
              <Button className="w-full">Projects</Button>
            </SheetClose>
          </Link>

          {/* <Button className="w-full">Experience</Button> */}
          {/* <Button className="w-full">Contact</Button> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
