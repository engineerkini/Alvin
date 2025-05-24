import React from "react";
import {
  FaBook,
  FaPenNib,
  FaPalette,
  FaChalkboardTeacher,
  FaUsers,
  FaGlobe,
  FaHandshake,
  FaStar,
  FaFolderOpen,
} from "react-icons/fa";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features = () => {
  const features: Feature[] = [
    {
      icon: FaBook,
      title: "Publishing & Editing",
      description:
        "Professional editing, proofreading, and publishing services for educational and creative content.",
    },
    {
      icon: FaPenNib,
      title: "Manuscript Development",
      description:
        "Support for authors from concept to print—structuring, refining, and polishing their works.",
    },
    {
      icon: FaPalette,
      title: "Design & Layout",
      description:
        "Creative book layout and visual design tailored for print and digital publishing.",
    },
    {
      icon: FaChalkboardTeacher,
      title: "Training & Workshops",
      description:
        "Sessions on writing, editing, branding, and content strategy for individuals and institutions.",
    },
    {
      icon: FaUsers,
      title: "Community Collaboration",
      description:
        "Working with publishers, educators, and creatives to build meaningful content and ideas.",
    },
    {
      icon: FaGlobe,
      title: "Translation & Localization",
      description:
        "Expert translation services, especially in Kiswahili, for diverse cultural and academic contexts.",
    },
    {
      icon: FaHandshake,
      title: "Strategic Partnerships",
      description:
        "Collaborations with publishers, NGOs, and educational institutions for impactful projects.",
    },
    {
      icon: FaStar,
      title: "Client Success Stories",
      description:
        "Showcasing testimonials and featured work with leading publishers and authors.",
    },
    {
      icon: FaFolderOpen,
      title: "Content Library",
      description:
        "A curated collection of published works, templates, and editorial resources.",
    },
  ];

  return { features };
};

export default features;
