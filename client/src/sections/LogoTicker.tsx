import Adobe from "@/assets/Company=Adobe.png";
import Atlassian from "@/assets/Company=Atlassian.png";
import Evernote from "@/assets/Company=Evernote.png";
import GitHub from "@/assets/Company=GitHub.png";
import Freshworks from "@/assets/Company=Freshworks.png";
import Pipedrive from "@/assets/Company=Pipedrive.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="container">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <div className="flex gap-14 justify-center items-center p-8 ">
          <Image src={Adobe} width={140} alt="Adobe" className="logo-image" />
          <Image
            src={Atlassian}
            width={140}
            alt="Atlassian"
            className="logo-image"
          />
          <Image
            src={Evernote}
            width={140}
            alt="Evernote"
            className="logo-image"
          />
          <Image src={GitHub} width={140} alt="GitHub" className="logo-image" />
          <Image
            src={Freshworks}
            width={140}
            alt="Freshworks"
            className="logo-image"
          />
          <Image src={Pipedrive} width={140} alt="Pipedrive" />
        </div>
      </div>
    </div>
  );
};
