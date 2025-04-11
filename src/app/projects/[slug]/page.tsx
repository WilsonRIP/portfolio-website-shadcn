import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Github, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";

// Define the interface for project data
interface ProjectData {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl?: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  features?: string[];
  date: string;
}

// This function generates the static paths for all projects
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Find the project data based on the slug
  const project = projectsData.find(p => p.slug === slug);
  
  // If project not found, show 404
  if (!project) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {project.imageUrl && (
        <div className="rounded-lg overflow-hidden bg-secondary/20 border mb-8 aspect-video flex items-center justify-center">
          {/* You can replace this with actual project screenshots */}
          <div className="relative w-full h-full">
            <Image
              src={project.imageUrl || "/project-placeholder.jpg"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="pt-6 prose dark:prose-invert max-w-none">
              <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
              <p>{project.longDescription || project.description}</p>
              
              {project.features && project.features.length > 0 && (
                <>
                  <h2 className="text-xl font-semibold mt-6 mb-4">Key Features</h2>
                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Project Details</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Completed</p>
                  <p>{project.date}</p>
                </div>
                
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium text-muted-foreground mb-3">Links</p>
                  <div className="space-y-2">
                    <Button asChild variant="outline" className="w-full" size="sm">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Source Code
                      </Link>
                    </Button>
                    
                    {project.liveUrl && (
                      <Button asChild variant="default" className="w-full" size="sm">
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <LinkIcon className="mr-2 h-4 w-4" />
                          View Live Project
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 