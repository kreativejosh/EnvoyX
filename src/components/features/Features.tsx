import React from "react";
import FeatureHeader from "./FeatureHeader";
import FeatureCard from "./FeatureCard";

const Features: React.FC = () => {
  const handleLearnMore = (featureType: string) => {
    console.log(`Learn more about ${featureType}`);
    // Implementation for learn more functionality
  };

  return (
    <section
      className="bg-white overflow-hidden text-[rgba(8,31,36,1)] px-[140px] py-[100px] max-md:px-5"
      aria-labelledby="features-heading"
    >
      <FeatureHeader
        title="Turn your invoices into a growth machine"
        description="EnvoyX isn't just a platform—it's a partnership. Deploy working capital to businesses, strengthen your financial offerings while supporting businesses in managing their cash flow through invoice financing."
      />

      <div className="w-full mt-20 max-md:max-w-full max-md:mt-10">
        <div className="flex w-full items-center gap-10 flex-wrap max-md:max-w-full">
          <FeatureCard
            title="For healthcare providers"
            description="EnvoyX isn't just a platform—it's a partnership. Deploy working capital to businesses, strengthen your financial offerings while supporting businesses in managing their cash flow through invoice financing."
            onClick={() => handleLearnMore("healthcare providers")}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/7c64f0b3bcad4e66bbee12cac6184f2d/a7f16e6d2878b2a07bcd8722236d10985150aff4?placeholderIfAbsent=true"
            alt="Healthcare providers feature illustration"
            className="aspect-[0.99] object-contain w-full self-stretch min-w-60 flex-1 shrink basis-20 my-auto rounded-[20px] max-md:max-w-full"
          />
        </div>

        <div className="flex w-full items-center gap-10 flex-wrap mt-10 max-md:max-w-full">
          <FeatureCard
            title="For banks/financial institutions"
            description="EnvoyX isn't just a platform—it's a partnership. Deploy working capital to businesses, strengthen your financial offerings while supporting businesses in managing their cash flow through invoice financing."
            paddingTop="pt-[204px]"
            onClick={() => handleLearnMore("banks/financial institutions")}
          />
          <FeatureCard
            title="For insurers"
            description="EnvoyX isn't just a platform—it's a partnership. Deploy working capital to businesses, strengthen your financial offerings while supporting businesses in managing their cash flow through invoice financing."
            onClick={() => handleLearnMore("insurers")}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
