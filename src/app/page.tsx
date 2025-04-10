import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="hero" className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4">WilsonIIRIP</h1>
          <p className="text-xl text-muted-foreground mb-8">Welcome / Learning more every day</p>
          <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </Button>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <h2 className="text-3xl font-semibold text-center mb-12">About Me</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground">
                Intermediate Full Stack Developer with a passion for creating engaging digital experiences.
              </p>
              <p className="text-muted-foreground">
                Beyond coding, I enjoy Photography, Video Editing, Photo Editing, Streaming, and creating content on YouTube.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Project Card - Repeat for more projects */}
            <Card>
              <CardHeader>
                <CardTitle>Project Title 1</CardTitle>
                <CardDescription>A short description of the project.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Technologies: React, Next.js, Tailwind</p>
                <Button variant="outline">View Project</Button>
              </CardContent>
            </Card>
             <Card>
              <CardHeader>
                <CardTitle>Project Title 2</CardTitle>
                <CardDescription>A short description of the project.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Technologies: Node.js, Express, MongoDB</p>
                <Button variant="outline">View Project</Button>
              </CardContent>
            </Card>
             <Card>
              <CardHeader>
                <CardTitle>Project Title 3</CardTitle>
                <CardDescription>A short description of the project.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Technologies: Python, Django, PostgreSQL</p>
                <Button variant="outline">View Project</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 text-center">
          <h2 className="text-3xl font-semibold mb-8">Get In Touch</h2>
          <p className="text-muted-foreground mb-8">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
          {/* Add a contact form or email link here */}
          <Button>Email Me</Button> { /* Replace with actual contact method */}
        </section>
      </main>

      <footer className="py-6 text-center text-muted-foreground text-sm border-t">
        © {new Date().getFullYear()} WilsonIIRIP. All rights reserved.
      </footer>
    </div>
  );
}
