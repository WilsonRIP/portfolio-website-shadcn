"use client";

import { Button } from "@/components/ui/button";

export function HeroContactButton() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button size="lg" onClick={scrollToContact}>
      Contact Me
    </Button>
  );
} 