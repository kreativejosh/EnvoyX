import React from "react";
import { Testimonial } from "@/components/testimonials/Testimonial";

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <header className="py-8 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">
            EnvoyX Testimonials
          </h1>
        </div>
      </header>

      {/* Font import for the testimonial component */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* Testimonial Section */}
      <Testimonial />

      <footer className="py-6 px-6 bg-gray-50 text-center text-gray-600">
        <div className="container mx-auto">
          <p>© 2023 EnvoyX. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
