
import React, { useState } from "react";
import { TestimonialContent } from "./TestimonialContent";
import { TestimonialAuthor } from "./TestimonialAuthor";
import { TestimonialNavigation } from "./TestimonialNavigation";

interface TestimonialData {
  id: number;
  title: string;
  quote: string;
  author: {
    name: string;
    title: string;
    image: string;
    altText: string;
  };
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    title:
      "Accelerated Lapaire's invoices and cashflow by Over 4x—Unmatched Speed & Support",
    quote:
      '"EnvoyX offers the best solution for forward thinking businesses across Africa to quickly turn their idle insurance reimbursement invoices into working capital in hours and not 45 or 60 days.',
    author: {
      name: "Jerome Lapaire",
      title: "CEO @ Lapaire Glasses",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8fbcf2b74c212c027bcacb9ccfde7251e6062aff",
      altText: "Jerome Lapaire",
    },
  },
  {
    id: 2,
    title: "Transformed our financial operations with innovative solutions",
    quote:
      '"EnvoyX provided us with the tools we needed to streamline our invoice processing and improve our cash flow management significantly.',
    author: {
      name: "Sarah Johnson",
      title: "CFO @ TechVision",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8fbcf2b74c212c027bcacb9ccfde7251e6062aff",
      altText: "Sarah Johnson",
    },
  },
  {
    id: 3,
    title: "Exceptional service that revolutionized our payment systems",
    quote:
      '"Working with EnvoyX has been a game-changer for our business. Their platform simplified our complex financial processes and accelerated our growth.',
    author: {
      name: "Michael Chen",
      title: "Founder @ Nexus Innovations",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8fbcf2b74c212c027bcacb9ccfde7251e6062aff",
      altText: "Michael Chen",
    },
  },
];

export const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonial-section py-20 font-['Bricolage_Grotesque'] bg-white">
      <div className="max-w-none flex flex-col items-center relative mx-auto px-[140px] py-[100px] max-md:max-w-[991px] max-md:px-10 max-md:py-[60px] max-sm:max-w-screen-sm max-sm:px-5 max-sm:py-10">
        <div className="flex w-[800px] flex-col items-start gap-12 max-md:w-full">
          <TestimonialContent
            title={currentTestimonial.title}
            quote={currentTestimonial.quote}
          />
          <TestimonialAuthor
            image={currentTestimonial.author.image}
            name={currentTestimonial.author.name}
            title={currentTestimonial.author.title}
            altText={currentTestimonial.author.altText}
          />
        </div>
        <TestimonialNavigation
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </section>
  );
};
