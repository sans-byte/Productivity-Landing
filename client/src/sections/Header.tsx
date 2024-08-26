import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Menu from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="flex justify-center items-center bg-black text-white py-3">
        <div className="inline-flex gap-1 items-center">
          <p>
            <span className="text-slate-500 hidden md:inline-flex">
              Simplify Your Workflow, Amplify Your Results
            </span>
            &nbsp; Let's get started for free
          </p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="flex justify-between items-center container py-5 ">
        <Image
          src={Logo}
          height={50}
          width={50}
          className="rounded-lg"
          alt="logo"
        />
        <Menu className="h-6 w-6 md:hidden" />
        <nav className="hidden md:flex gap-6 text-black/60 items-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customer</a>
          <a href="#">Updates</a>
          <a href="#">Help</a>
          <button className="bg-black text-white p-2 rounded-md font-medium cursor-pointer tracking-tight">
            Get for free
          </button>
        </nav>
      </div>
    </header>
  );
};
