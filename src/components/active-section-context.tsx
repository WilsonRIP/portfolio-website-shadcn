"use client";

import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";

type SectionId = "hero" | "about" | "skills" | "projects" | "contact";

interface ActiveSectionContextType {
  activeSection: SectionId;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionId>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // To disable observer temporarily after click

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // 50% of the section must be visible
      rootMargin: "-80px 0px 0px 0px", // Adjust for header height
    };

    const sections = document.querySelectorAll("section[id]");
    const sectionIds = Array.from(sections).map(section => section.id) as SectionId[];

    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        // Don't update active section if we recently clicked a navigation link
        if (entry.isIntersecting && Date.now() - timeOfLastClick > 1000) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [timeOfLastClick]);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error("useActiveSection must be used within ActiveSectionProvider");
  }
  return context;
} 