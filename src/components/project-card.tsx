import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, GitBranch, Link as LinkIcon, Github } from "lucide-react";
import { ProjectData } from "@/data/projects";

// GitHub repo type from API
interface GitHubRepo {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    stargazers_count: number;
    language: string | null;
    updated_at: string;
}

// Props can now accept either GitHub repo or local project data
interface ProjectCardProps {
    repo?: GitHubRepo;
    project?: ProjectData;
}

export function ProjectCard({ repo, project }: ProjectCardProps) {
    // Determine if this is a GitHub repo or a local project
    const isGitHubRepo = !!repo;
    
    // Simple function to format date (optional)
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric'
        });
    };

    if (!repo && !project) {
        return null; // Return null if neither prop is provided
    }

    // If this is a GitHub repo, use that data structure
    if (isGitHubRepo && repo) {
        return (
            <Card className="flex flex-col h-full transition-all hover:shadow-md">
                <CardHeader>
                    <CardTitle className="text-lg">
                        <Link href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {repo.name}
                        </Link>
                    </CardTitle>
                    <CardDescription className="text-sm h-10 overflow-hidden">
                        {repo.description || "No description available."}
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            <span>{repo.stargazers_count}</span>
                        </div>
                        {repo.language && (
                            <div className="flex items-center gap-1">
                                <span>{repo.language}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-1">
                            <GitBranch className="w-3 h-3" />
                            <span>Updated {formatDate(repo.updated_at)}</span>
                        </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                        <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            View on GitHub
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        );
    }

    // Otherwise, use local project data
    if (project) {
        return (
            <Card className="flex flex-col h-full transition-all hover:shadow-md">
                <CardHeader>
                    <CardTitle className="text-lg">
                        <Link href={`/projects/${project.slug}`} className="hover:underline">
                            {project.title}
                        </Link>
                    </CardTitle>
                    <CardDescription className="text-sm h-10 overflow-hidden">
                        {project.description}
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                    <div className="flex flex-wrap gap-1 mb-4 text-xs">
                        {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 3 && (
                            <span className="text-muted-foreground">+{project.technologies.length - 3} more</span>
                        )}
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild className="flex-1">
                            <Link href={`/projects/${project.slug}`}>
                                View Details
                            </Link>
                        </Button>
                        <Button variant="secondary" size="sm" asChild className="w-10 px-0">
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return null;
} 