import { AnimatedSection } from "@/components/ui/animated-section";
import { FloatingShape } from "@/components/ui/parallax-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | WilsonIIRIP",
  description: "Detailed information about my development projects and work.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      {/* Background decoration */}
      <FloatingShape x="5%" y="20%" size="250px" color="rgba(var(--primary) / 0.03)" delay={0.5} duration={30} />
      <FloatingShape x="95%" y="50%" size="180px" color="rgba(var(--primary) / 0.04)" delay={1.5} duration={25} />
      <FloatingShape x="50%" y="90%" size="200px" color="rgba(var(--primary) / 0.02)" delay={1} duration={28} />
      
      <AnimatedSection>
        {children}
      </AnimatedSection>
    </div>
  );
} 