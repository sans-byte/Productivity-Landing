import Rocket from "@/assets/Rocket.png";
import Clock from "@/assets/Clock.png";
import Image from "next/image";
export default function () {
  return (
    <section className="py-24">
      <div className="container">
        <div className="section-header">
          <div className="text-badge">Everything you need</div>
          <div className="section-heading">Streamlined for easy management</div>
          <p>
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="py-12 flex flex-col md:flex-row gap-6 ">
          <div className="shadow-md rounded-lg p-12 bg-white/70">
            <div className="flex flex-col justify-center items-center">
              <Image src={Rocket} alt="rocket" />
              <h3 className="font-bold">Launchpad</h3>
              <p className="tracking-tighter leading-tight py-2">
                Launch your day with clarity and purpose, using our customizable
                launchpad to prioritize tasks and set goals.
              </p>
            </div>
          </div>
          <div className="shadow-md rounded-lg p-12 bg-white/70">
            <div className="flex flex-col justify-center items-center">
              <Image src={Clock} alt="clock" />
              <h3 className="font-bold">Task Automation</h3>
              <p className="tracking-tighter leading-tight py-2">
                Automate repetitive tasks and workflows, saving you time and
                mental energy for high-impact work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
