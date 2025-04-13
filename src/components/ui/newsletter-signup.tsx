import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { toast } from "./use-toast";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[rgba(248,246,242,1)] p-8 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
      <p className="text-sm mb-6">
        Subscribe to our newsletter to receive the latest updates and insights.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white"
          aria-label="Email for newsletter"
        />

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>

      <p className="text-xs mt-4 text-gray-500">
        By subscribing, you agree to our Privacy Policy and Terms of Service.
      </p>
    </div>
  );
};

export default NewsletterSignup;
