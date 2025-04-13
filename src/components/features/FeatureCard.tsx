import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  paddingTop?: string;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  paddingTop = "pt-[260px]",
  onClick,
}) => {
  return (
    <article
      className={`bg-[rgba(248,246,242,1)] self-stretch flex min-w-60 min-h-[600px] flex-col items-stretch flex-1 shrink basis-[0%] my-auto ${paddingTop} pb-10 px-10 rounded-[20px] max-md:max-w-full max-md:pt-[100px] max-md:px-5`}
    >
      <div className="w-full max-md:max-w-full">
        <h2 className="text-[40px] font-semibold leading-[1.4] max-md:max-w-full">
          {title}
        </h2>
        <p className="text-lg font-normal leading-8 mt-5 max-md:max-w-full">
          {description}
        </p>
      </div>
      <button
        onClick={onClick}
        className="bg-white min-h-14 gap-3 overflow-hidden text-base font-medium mt-10 px-[18px] py-[19px] rounded-[1000px] hover:bg-gray-50 transition-colors"
        aria-label={`Learn more about ${title}`}
      >
        Learn more
      </button>
    </article>
  );
};

export default FeatureCard;
