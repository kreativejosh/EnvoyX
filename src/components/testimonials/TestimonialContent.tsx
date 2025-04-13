import React from "react";

interface TestimonialContentProps {
  title: string;
  quote: string;
}

export const TestimonialContent: React.FC<TestimonialContentProps> = ({
  title,
  quote,
}) => {
  return (
    <div className="flex flex-col items-start gap-5 w-full">
      <h2 className="text-[#081F24] text-[40px] font-bold leading-[56px] max-sm:text-[28px] max-sm:leading-10">
        {title}
      </h2>
      <p className="text-[#081F24] text-lg font-normal leading-8 max-sm:text-base max-sm:leading-7">
        {quote}
      </p>
    </div>
  );
};
