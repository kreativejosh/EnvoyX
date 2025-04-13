import React from "react";

interface FeatureHeaderProps {
  title: string;
  description: string;
}

const FeatureHeader: React.FC<FeatureHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <header className="w-full max-md:max-w-full">
      <h1 className="text-[40px] font-bold leading-[1.4] max-md:max-w-full">
        {title}
      </h1>
      <p className="text-lg font-normal leading-8 mt-5 max-md:max-w-full">
        {description}
      </p>
    </header>
  );
};

export default FeatureHeader;
