import React from "react";

interface TestimonialAuthorProps {
  image: string;
  name: string;
  title: string;
  altText: string;
}

export const TestimonialAuthor: React.FC<TestimonialAuthorProps> = ({
  image,
  name,
  title,
  altText,
}) => {
  return (
    <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-center max-sm:text-center">
      <img
        src={image}
        alt={altText}
        className="w-20 h-20 rounded-lg object-cover"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-[#081F24] text-2xl font-medium">{name}</h3>
        <p className="text-[rgba(8,31,36,0.70)] text-lg font-normal leading-7">
          {title}
        </p>
      </div>
    </div>
  );
};
