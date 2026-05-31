"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactForm from "@/components/contact-form";

interface BuyNowDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  productName: string;
}

export default function BuyNowDialog({
  isOpen,
  onOpenChange,
  productName,
}: BuyNowDialogProps) {
  const handleSuccess = () => {
    // Close dialog after successful submission
    setTimeout(() => {
      onOpenChange(false);
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Get in Touch</DialogTitle>
          <DialogDescription>
            Fill out the form below and we&apos;ll contact you about{" "}
            {productName}.
          </DialogDescription>
        </DialogHeader>
        <ContactForm productName={productName} onSuccess={handleSuccess} />
      </DialogContent>
    </Dialog>
  );
}
