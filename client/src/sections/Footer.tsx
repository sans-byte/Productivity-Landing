import Logo from "@/assets/logo.png";
import Image from "next/image";
import Insta from "@/assets/social-insta.svg";
import X from "@/assets/social-x.svg";
import Pinterest from "@/assets/social-pin.svg";
import Linkedin from "@/assets/social-linkedin.svg";
import Youtube from "@/assets/social-youtube.svg";
import Heart from "@/assets/heart.svg";
export const Footer = () => {
  return (
    <footer className="bg-black py-8 px-4 text-white/60">
      <div>
        <div className="md:columns-2">
          <div className="pb-12 md:flex flex-col justify-between gap-12">
            <div>
              <Image src={Logo} alt="logo" width={50} height={50} />
              <p className="py-6">
                Revolutionizing productivity worldwide,A game-changer for modern
                work, loved by thousands globally,Transforming the way people
                work, one task at a time
              </p>
            </div>
            <div className="flex gap-6 justify-start items-center">
              <Insta />
              <Linkedin />
              <Youtube />
              <X />
              <Pinterest />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h5 className="text-white font-bold">Product</h5>
              <ul className="py-4">
                <li className="py-2">Feature</li>
                <li className="py-2">Integration</li>
                <li className="py-2">FAQ</li>
                <li className="py-2">Updates</li>
                <li className="py-2">Pricing</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold">Company</h5>
              <ul className="py-4">
                <li className="py-2">About</li>
                <li className="py-2">Career</li>
                <li className="py-2">Blog</li>
                <li className="py-2">Manifesto</li>
                <li className="py-2">Press</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold">Resource</h5>
              <ul className="py-4">
                <li className="py-2">Example</li>
                <li className="py-2">Comunity</li>
                <li className="py-2">Guide</li>
                <li className="py-2">Docs</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold">Legal</h5>
              <ul className="py-4">
                <li className="py-2">Privacy</li>
                <li className="py-2">Terms</li>
                <li className="py-2">Security</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="self-center w-full flex justify-center items-center">
        © 2024 My Company, Inc. All right reserved
      </p>
      <p className="self-center w-full flex justify-center items-center">
        Made with <Heart className="h-4 w-4 mx-2" /> by sanskarj15@gmail.com
      </p>
    </footer>
  );
};
