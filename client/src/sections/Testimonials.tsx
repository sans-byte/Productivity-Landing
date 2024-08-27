import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";

interface Testimonials {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}

const testimonials: Testimonials[] = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const TestimonialsComponent = ({ column }: { column: Testimonials[] }) => {
  return (
    <div>
      {column.map((testimonial, index) => (
        <div key={index} className="py-2 md:py-2">
          <div className="rounded-2xl shadow-lg p-8 bg-white">
            <p>{testimonial.text}</p>
            <div className="py-3 flex gap-2">
              <Image
                src={testimonial.imageSrc}
                alt="avatar"
                width={50}
                height={50}
              />
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div>{testimonial.username}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Testimonials = () => {
  const firstColumn = testimonials.slice(0, 3);
  const secontColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);
  return (
    <section>
      <div>
        <div className="container pb-24">
          <div className="section-header">
            <div className="text-badge">Testimonials</div>
            <div className="section-heading">What our users say</div>
            <div>
              <p className="py-4 pb-12">
                Out product is revolutionizing the way people work, empowering
                individuals to achieve more in less time. With its intuitive
                tools and features, it's transforming productivity worldwide.
                Experience the future of work, today.
              </p>
            </div>
          </div>
          <div className="md:columns-2 lg:columns-3 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            <div>
              <TestimonialsComponent column={firstColumn} />
            </div>
            <div className="hidden md:block">
              <TestimonialsComponent column={secontColumn} />
            </div>
            <div className="hidden lg:block">
              <TestimonialsComponent column={thirdColumn} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
