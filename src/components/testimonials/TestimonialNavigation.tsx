import React from "react";

interface TestimonialNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const TestimonialNavigation: React.FC<TestimonialNavigationProps> = ({
  onPrevious,
  onNext,
}) => {
  return (
    <div className="flex justify-between w-full absolute -translate-y-2/4 left-0 top-2/4 max-md:relative max-md:mt-[30px] max-sm:flex-row max-sm:justify-center max-sm:gap-5">
      <button
        onClick={onPrevious}
        aria-label="Previous testimonial"
        className="flex w-12 h-12 justify-center items-center border cursor-pointer bg-[#081F24] ml-[140px] p-2.5 rounded-[40px] border-solid border-[rgba(8,31,36,0.10)] max-md:ml-0"
      >
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="I97:448;9:3448" layer-name="arrow-left-line" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon" style="width: 20px; height: 20px"> <path d="M6.52333 9.55214H16.6667V11.2188H6.52333L10.9933 15.6888L9.81499 16.8671L3.33333 10.3855L9.81499 3.90381L10.9933 5.08214L6.52333 9.55214Z" fill="#C8F169"></path> </svg>',
            }}
          />
        </div>
      </button>
      <button
        onClick={onNext}
        aria-label="Next testimonial"
        className="flex w-12 h-12 justify-center items-center border cursor-pointer bg-[#081F24] mr-[140px] p-2.5 rounded-[40px] border-solid border-[rgba(8,31,36,0.10)] max-md:mr-0"
      >
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="I97:444;9:3472" layer-name="arrow-right-line" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon" style="width: 20px; height: 20px"> <path d="M13.4767 9.55214L9.00671 5.08214L10.185 3.90381L16.6667 10.3855L10.185 16.8671L9.00671 15.6888L13.4767 11.2188H3.33337V9.55214H13.4767Z" fill="#C8F169"></path> </svg>',
            }}
          />
        </div>
      </button>
    </div>
  );
};
