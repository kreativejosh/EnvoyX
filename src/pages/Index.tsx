
import React from "react";
import { Testimonial } from "@/components/testimonials/Testimonial";
import Features from "@/components/features/Features";
import ContactForm from "@/components/ui/contact-form";
import NewsletterSignup from "@/components/ui/newsletter-signup";
import { Button } from "@/components/ui/button";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform Your Financial Operations
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              Streamline your invoicing process and unlock growth opportunities
              with our innovative platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-primary-foreground hover:text-primary"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Font import for the testimonial component */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Features Section */}
      <Features />

      {/* Contact and Newsletter Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactForm />
            <div className="flex flex-col gap-8">
              <NewsletterSignup />

              <div className="bg-[rgba(248,246,242,1)] p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Our Office</h3>
                <address className="not-italic">
                  <p className="mb-2">123 Business Avenue</p>
                  <p className="mb-2">Tech District, CA 94103</p>
                  <p className="mb-4">United States</p>
                  <p className="mb-2">
                    <strong>Email:</strong> info@envoyxfinance.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">EnvoyX</h3>
              <p className="text-sm text-muted-foreground">
                Transforming financial operations for businesses worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:underline">
                    For Healthcare
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    For Banks
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    For Insurers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} EnvoyX. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
