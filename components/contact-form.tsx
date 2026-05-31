"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MessageSquare, User } from "lucide-react";
import { SendEmailSubmission } from "@/lib/resend";

interface ContactFormProps {
  productName?: string;
  onSuccess?: () => void;
}

export default function ContactForm({
  productName,
  onSuccess,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: productName ? `I'm interested in: ${productName}` : "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission (in production, this would send to an API)
      const test = await SendEmailSubmission(
        formData.name,
        formData.email,
        formData.phone,
        formData.message,
      );
      if (!test) {
        throw new Error("Failed to send email");
      }

      console.log("[v0] Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: productName ? `I'm interested in: ${productName}` : "",
      });

      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 2000);
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            Thank you! We've received your inquiry. Our team will contact you
            shortly.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">
            Something went wrong. Please try again.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <User size={18} className="text-primary" />
            Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border-border bg-input text-foreground placeholder:text-muted-foreground"
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <Mail size={18} className="text-primary" />
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-border bg-input text-foreground placeholder:text-muted-foreground"
            disabled={isSubmitting}
          />
        </div>

        {/* Phone Field */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <Phone size={18} className="text-primary" />
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+62 (123) 456-7890"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border-border bg-input text-foreground placeholder:text-muted-foreground"
            disabled={isSubmitting}
          />
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <MessageSquare size={18} className="text-primary" />
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us more about your inquiry..."
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-base font-semibold"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </Button>
      </form>
    </div>
  );
}
