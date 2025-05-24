interface Blog {
  title: string;
  date: string;
  slug?: string; // Optional if not included in your img
  coverImage: string;
  excerpt: string;
  link: string;
  ogImage: {
    url: string;
  };
}

export const allBlogs: Blog[] = [
  {
    title: "Revenge is Never Sweet",
    excerpt:
      "This is a novel that depicts friendship, peer pressure, religion and education. It is filled with laughter and suspense.",
    coverImage: "/images/img/micro-ai.png",
    date: "2023-10-13T00:00:00.000Z",
    link: "https://micro-ai-ten.vercel.app",
    ogImage: {
      url: "/img/project-1.png",
    },
  },
  {
    title: "Santana",
    excerpt:
      "A girl who is abducted by strange warriors on her way from school..",
    coverImage: "/images/img/nex-cent.png",
    date: "2024-05-17T00:00:00.000Z",
    link: "https://nex-cent-jade.vercel.app",
    ogImage: {
      url: "/img/project-2.png",
    },
  },
  {
    title: "The Disruptive Ride",
    excerpt:
      "This is an intriguing story about two schoolgirls, Akiki, and Apopo and two motorbike (boda boda) riders, Kush and Pato.",
    coverImage: "/images/img/school-web.png",
    date: "2024-01-03T00:00:00.000Z",
    link: "https://school-hazel-nu.vercel.app",
    ogImage: {
      url: "/img/project-2.png",
    },
  },
  {
    title: "Carpooling App",
    excerpt:
      "A ride-sharing platform designed and developed using Figma and the MERN stack with Tailwind CSS and TypeScript, offering a user-friendly interface for carpooling services.",
    coverImage: "/images/img/project-1.svg",
    date: "2021-01-15T00:00:00.000Z", // Start of 2021
    link: "https://woohoocar.vercel.app",
    ogImage: {
      url: "/images/img/project-1.svg",
    },
  },
  {
    title: "Mwongozo Wa Nguu Za Jadi",
    excerpt: "leadership, betrayal, conflict, and societal issues.",
    coverImage: "/images/img/e-commerce.jpeg",
    date: "2021-04-10T00:00:00.000Z", // Q2 of 2021
    link: "https://destructors-ec-fe.vercel.app",
    ogImage: {
      url: "/images/img/e-commerce.jpeg",
    },
  },
  {
    title: "Gracie's Dream",
    excerpt:
      "Stylos Consults is a global stakeholder relations and consultancy firm that helps organizations navigate complex issues and build sustainable relationships with their stakeholders.",
    coverImage: "/images/img/stylos.png",
    date: "2021-07-01T00:00:00.000Z", // Mid-2021
    link: "https://stylosconsult.com",
    ogImage: {
      url: "/images/img/stylos.png",
    },
  },
  {
    title: "Marejeo Yao",
    excerpt:
      "mchezo wa kuigiza ambao unamulika na kudadisi uozo katika ngazi ya kijamii, kiuchumi na kisiasa.",
    coverImage: "/images/img/boutiquepic.png",
    date: "2021-10-05T00:00:00.000Z", // Q4 of 2021
    link: "https://boutique.igitegohotel.com",
    ogImage: {
      url: "/images/img/boutiquepic.png",
    },
  },
  {
    title: "Utelezi",
    excerpt:
      "Mhandisi Maselu ni mfano bora wa mwanataaluma ambaye amefanikiwa kujinyanyua kiuchumi kwa kuegemea.",
    coverImage: "/images/img/igitegohotel.png",
    date: "2022-01-15T00:00:00.000Z", // Start of 2022
    link: "https://igitegohotel.com",
    ogImage: {
      url: "/images/img/igitegohotel.png",
    },
  },
  {
    title: "Nafsi Ya Pili",
    excerpt:
      "Safari ya kutafuta maisha kwa uchu inamwingiza Mhanga katika safari ndefu yenye pandashuka.",
    coverImage: "/images/img/igitegoapart.png",
    date: "2022-04-12T00:00:00.000Z", // Q2 of 2022
    link: "https://apart.igitegohotel.com",
    ogImage: {
      url: "/images/img/igitegoapart.png",
    },
  },
  {
    title: "Language Activity Practical Book",
    excerpt:
      "E-tuze is a web app that connects therapists with individuals facing mental health challenges such as depression, offering professional help and support.",
    coverImage: "/images/img/project7.png",
    date: "2022-07-05T00:00:00.000Z", // Mid-2022
    link: "https://e-tuze.netlify.app",
    ogImage: {
      url: "/images/img/project7.png",
    },
  },
  {
    title: "Kivuli Cha Madhila",
    excerpt:
      "Themes of shame, disgrace, and the impact of moral failings on individuals and communities.",
    coverImage: "/images/img/educationhubpng.png",
    date: "2022-10-20T00:00:00.000Z", // Q4 of 2022
    link: "https://www.educationhubafrica.com",
    ogImage: {
      url: "/images/img/educationhubpng.png",
    },
  },
  {
    title: "A Dream So Big",
    excerpt:
      "A young girl, Lisa, who dreams of becoming a dermatologist to help others with skin diseases.",
    coverImage: "/images/img/bookme.png",
    date: "2023-01-30T00:00:00.000Z", // Start of 2023
    link: "https://bookme.rw",
    ogImage: {
      url: "/images/img/bookme.png",
    },
  },
  {
    title: "Tech and the Huge Mice",
    excerpt: "De-extinction Efforts.",
    coverImage: "/images/img/godiscover.png",
    date: "2023-04-18T00:00:00.000Z", // Q2 of 2023
    link: "https://www.godiscoverafrica.rw/",
    ogImage: {
      url: "/images/img/godiscover.png",
    },
  },
  {
    title: "Car Rental",
    excerpt:
      "Car Rental is an online platform that allows clients to rent cars easily and efficiently, offering a seamless experience for vehicle rentals.",
    coverImage: "/images/img/carrental.png",
    date: "2023-07-15T00:00:00.000Z", // Mid-2023
    link: "https://www.carrental.bookme.rw/",
    ogImage: {
      url: "/images/img/carrental.png",
    },
  },
  {
    title: "Green Realtor revamped website",
    excerpt:
      "Green Realtor's revamped website helps clients know more about the services and offerings of Green Realtor. It focuses on providing a user-friendly interface and better property showcasing.",
    coverImage: "/images/img/greetor.png",
    date: "2023-10-05T00:00:00.000Z", // Q4 of 2023
    link: "https://green-realtors.strettch.com/",
    ogImage: {
      url: "/images/img/greetor.png",
    },
  },
];
