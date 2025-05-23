// FAQSection.jsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  // FAQ data
  const faqs = [
    {
      question: "What creative tools do you specialize in?",
      answer:
        "I specialize in Adobe Photoshop, Illustrator, InDesign, Canva, and Figma for design; Microsoft Word and Google Docs for editing and formatting; and platforms like Printful and Amazon KDP for publishing and merchandise production.",
    },
    {
      question: "How do you approach new creative projects?",
      answer:
        "I begin by understanding the client’s vision, brand identity, and goals. From there, I create mood boards, sketches, or mockups, then refine the work through feedback loops to ensure a polished final product that communicates effectively.",
    },
    {
      question: "Can you work with existing designs or content?",
      answer:
        "Absolutely. I regularly work with existing materials—whether it's rebranding, editing manuscripts, or updating design assets. I'm comfortable enhancing or adapting creative work while preserving the original voice or visual identity.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative w-full max-w-3xl mx-auto p-8 bg-white text-black"
    >
      <div className="text-center mb-8 bg-white">
        <button
          type="button"
          className="bg-black text-bodyText px-5 py-3 text-bodySmall rounded-full transition-all duration-300"
        >
          FAQs
        </button>
        <h2 className="mb-4 leading-[40px] text-3xl md:text-5xl text-center font-semibold">
          <span className="text-black">Common</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
            Questions
          </span>
          <br />
          <span className="text-black">Answered</span>
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            value={`item-${index}`}
            className="border bg-blue-500/15 border-blue-500/15 rounded-md overflow-hidden px-4"
          >
            <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-black pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="absolute -z-10 inset-0 bg-gradient-to-b from-white/50 via-white/80 to-white" />
    </section>
  );
};

export default FAQSection;
