// ServicesSection.jsx
import {
  PenTool,
  Image,
  Layers,
  Package,
  BookOpenText,
  Brush,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="border bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-500 rounded-md overflow-hidden group relative">
    <div className="z-10 flex flex-col gap-4 p-4 w-full min-w-[280px] xl:min-w-full min-h-[200px] h-full">
      <div className="w-[40px] h-[40px] flex items-center mb-4 p-2.5 bg-blue-800/30 rounded-[6px]">
        <Icon className="w-[30px] h-[30px] text-white" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-100 text-sm w-full">{description}</p>
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-[#1d1c1c40] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

const ServicesSection = () => {
  const skillsList = [
    {
      icon: BookOpenText,
      title: "Book Editing",
      description:
        "Polishing manuscripts for clarity, grammar, structure, and layout—ready for print or digital publishing.",
    },
    {
      icon: PenTool,
      title: "Graphic Design",
      description:
        "Creating logos, flyers, posters, and social media content that visually communicate your brand’s message.",
    },
    {
      icon: Layers,
      title: "Brand Identity",
      description:
        "Designing consistent branding elements including color schemes, typography, and brand guides.",
    },
    {
      icon: Package,
      title: "Merchandise Branding",
      description:
        "Custom shirt designs and branded products for events, businesses, and personal collections.",
    },
    {
      icon: Image,
      title: "Visual Content Creation",
      description:
        "Crafting engaging digital assets and layouts using tools like Photoshop, Illustrator, and Canva.",
    },
    {
      icon: Brush,
      title: "Custom Journal & Book Design",
      description:
        "Designing and formatting personalized notebooks and journals with a strong aesthetic focus.",
    },
  ];

  return (
    <section id="services" className="relative py-16 h-full bg-backgroundColor">
      <div className="container mx-auto px-4 z-30">
        <div className="text-center mb-12 space-y-3">
          <button
            type="button"
            className="bg-black text-bodyText px-5 py-3 text-bodySmall rounded-full transition-all duration-300"
          >
            Creative Expertise
          </button>
          <h2 className="text-black text-3xl md:text-5xl text-center font-semibold">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              Services
            </span>
          </h2>
        </div>

        <div className="grid w-full items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6 px-5 lg:px-[50px] xl:px-[100px]">
          {skillsList.map((skill) => (
            <FeatureCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
      <div className="absolute -z-10 inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black" />
    </section>
  );
};

export default ServicesSection;
