import { ProjectCard } from "@/components/project-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define the structure of the repository data we expect from GitHub API
interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
}

// Fallback repos if GitHub API doesn't work
const fallbackProjects: GitHubRepo[] = [
  {
    id: 1,
    name: "Project 1",
    html_url: "https://github.com/WilsonRIP",
    description: "A sample project showcasing web development skills.",
    stargazers_count: 5,
    language: "TypeScript",
    updated_at: new Date().toISOString()
  },
  {
    id: 2,
    name: "Project 2",
    html_url: "https://github.com/WilsonRIP",
    description: "Backend API implementation with authentication.",
    stargazers_count: 3,
    language: "JavaScript",
    updated_at: new Date().toISOString()
  },
  {
    id: 3,
    name: "Project 3",
    html_url: "https://github.com/WilsonRIP",
    description: "Mobile-first responsive design portfolio.",
    stargazers_count: 7,
    language: "HTML/CSS",
    updated_at: new Date().toISOString()
  }
];

async function getGithubRepos(username: string): Promise<GitHubRepo[]> {
  const GITHUB_PAT = process.env.GITHUB_PAT;

  if (!GITHUB_PAT || GITHUB_PAT === 'your_github_token_here') {
    console.warn("Valid GitHub PAT not found. Using fallback projects. Set up your GITHUB_PAT in .env.local");
    return fallbackProjects;
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${GITHUB_PAT}`
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`GitHub API error: ${res.status} ${res.statusText}`);
      const errorBody = await res.text();
      console.error(`Error body: ${errorBody}`);
      return fallbackProjects;
    }

    const data: GitHubRepo[] = await res.json();
    return data.length > 0 ? data : fallbackProjects;
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return fallbackProjects;
  }
}

export async function ProjectsSection() {
  const username = "WilsonRIP";
  const githubRepos = await getGithubRepos(username);
  const featuredProjects = projectsData;

  return (
    <section id="projects" className="py-16">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <p className="text-muted-foreground">
          A selection of my development work and featured projects. Each project showcases different skills and technologies.
        </p>
      </div>
      
      <Tabs defaultValue="featured" className="w-full mb-8">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="featured">Featured Projects</TabsTrigger>
            <TabsTrigger value="github">GitHub Repositories</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="featured" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="github" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {githubRepos.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="text-center mt-12">
        <Button asChild>
          <Link href="https://github.com/WilsonRIP" target="_blank" rel="noopener noreferrer">
            View More on GitHub
          </Link>
        </Button>
      </div>
    </section>
  );
} 