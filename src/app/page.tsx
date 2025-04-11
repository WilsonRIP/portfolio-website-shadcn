import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectsSection } from "@/components/projects-section";
import { HeroContactButton } from "@/components/hero-contact-button";
import { SkillsSection } from "@/components/skills-section";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ParallaxBg, FloatingShape } from "@/components/ui/parallax-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section with Parallax Background */}
        <ParallaxBg className="h-full">
          <div className="absolute inset-0">
            <FloatingShape x="10%" y="30%" size="300px" color="rgba(var(--primary) / 0.05)" duration={25} />
            <FloatingShape x="70%" y="20%" size="200px" color="rgba(var(--primary) / 0.07)" delay={1} duration={22} />
            <FloatingShape x="85%" y="60%" size="150px" color="rgba(var(--primary) / 0.05)" delay={2} duration={28} />
          </div>
        </ParallaxBg>

        <section id="hero" className="relative text-center py-20 md:py-32 overflow-hidden">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 relative z-10">WilsonIIRIP</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl mx-auto relative z-10">
              Welcome / Learning more every day
            </p>
            <HeroContactButton />
          </AnimatedSection>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative">
          <FloatingShape x="5%" y="30%" size="250px" color="rgba(var(--primary) / 0.03)" delay={0.5} duration={30} />
          <FloatingShape x="95%" y="60%" size="180px" color="rgba(var(--primary) / 0.04)" delay={1.5} duration={25} />
          
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl font-semibold text-center mb-12">About Me</h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <Card className="shadow-md">
                <CardContent className="pt-6 space-y-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-background shadow-xl flex-shrink-0">
                      {/* Add your photo here. If you don't have one, you can use a placeholder */}
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl font-bold">
                        WR
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-lg">
                        I'm an <span className="font-semibold">Intermediate Full Stack Developer</span> with a passion for creating engaging digital experiences.
                      </p>
                      <p className="text-muted-foreground">
                        My journey in development combines technical expertise with creative skills. Beyond coding, I enjoy Photography, Video Editing, Photo Editing, Streaming, and creating content on YouTube.
                      </p>
                      <p className="text-muted-foreground">
                        I believe in continuous learning and pushing boundaries to create memorable digital experiences that make a difference.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* Skills Section with Parallax */}
        <section className="relative">
          <ParallaxBg baseVelocity={-0.5} className="h-full">
            <div className="absolute inset-0">
              <FloatingShape x="80%" y="10%" size="200px" color="rgba(var(--primary) / 0.04)" delay={1} duration={20} />
              <FloatingShape x="15%" y="70%" size="250px" color="rgba(var(--primary) / 0.03)" delay={0.5} duration={27} />
            </div>
          </ParallaxBg>
          
          <AnimatedSection delay={0.1}>
            <SkillsSection />
          </AnimatedSection>
        </section>

        {/* Projects Section */}
        <section className="relative">
          <FloatingShape x="92%" y="15%" size="180px" color="rgba(var(--primary) / 0.03)" delay={1} duration={23} />
          <FloatingShape x="8%" y="80%" size="200px" color="rgba(var(--primary) / 0.04)" delay={2} duration={26} />
          
          <AnimatedSection delay={0.1}>
            <ProjectsSection />
          </AnimatedSection>
        </section>

        {/* Contact Section with reverse parallax */}
        <section id="contact" className="py-16 md:py-24 relative">
          <ParallaxBg baseVelocity={1} className="h-full">
            <div className="absolute inset-0">
              <FloatingShape x="20%" y="20%" size="200px" color="rgba(var(--primary) / 0.05)" delay={0} duration={22} />
              <FloatingShape x="85%" y="40%" size="180px" color="rgba(var(--primary) / 0.04)" delay={1.5} duration={25} />
            </div>
          </ParallaxBg>
          
          <AnimatedSection delay={0.1}>
            <div className="max-w-xl mx-auto text-center relative z-10">
              <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out for collaborations, questions, or just a friendly chat.
                I'm always open to discussing new projects and opportunities.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild size="lg">
                  {/* Replace with your actual email */}
                  <a href="mailto:contact@example.com">Email Me</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://discord.gg/wKHnwHYgzF" target="_blank" rel="noopener noreferrer">
                    Join Discord
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>

      <footer className="py-8 text-center text-muted-foreground text-sm border-t relative">
        <FloatingShape x="50%" y="50%" size="100px" color="rgba(var(--primary) / 0.02)" delay={0} duration={20} />
        <div className="container mx-auto px-4 relative z-10">
          <p>© {new Date().getFullYear()} WilsonIIRIP. All rights reserved.</p>
          <p className="mt-2">Full Stack Developer | Photographer | Video Editor | Streamer | YouTuber</p>
        </div>
      </footer>
    </div>
  );
}
