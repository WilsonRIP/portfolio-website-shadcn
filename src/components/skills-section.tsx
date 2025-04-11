"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "design" | "other";
}

const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Next.js", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express", level: 70, category: "backend" },
  { name: "MongoDB", level: 65, category: "backend" },
  { name: "API Design", level: 80, category: "backend" },
  
  // Design
  { name: "UI/UX Design", level: 70, category: "design" },
  { name: "Photography", level: 90, category: "design" },
  { name: "Video Editing", level: 85, category: "design" },
  { name: "Photo Editing", level: 85, category: "design" },
  
  // Other
  { name: "Git/GitHub", level: 80, category: "other" },
  { name: "Streaming", level: 85, category: "other" },
  { name: "YouTube Content", level: 80, category: "other" },
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [animatedSkills, setAnimatedSkills] = useState<Skill[]>([]);
  
  // Animation effect for skills progress
  useEffect(() => {
    // Start with empty progress values
    setAnimatedSkills(skills.map(skill => ({...skill, level: 0})));
    
    // Animate progress to actual values after component mounts
    const timer = setTimeout(() => {
      setAnimatedSkills(skills);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "design", name: "Design" },
    { id: "other", name: "Other" }
  ];
  
  const filteredSkills = activeCategory === "all" 
    ? animatedSkills 
    : animatedSkills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-4">Skills & Expertise</h2>
        <p className="text-muted-foreground text-center mb-12">
          A comprehensive overview of my technical abilities and creative talents.
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(category => (
            <Badge 
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Badge>
          ))}
        </div>
        
        {/* Skills with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {filteredSkills.map(skill => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2 transition-all duration-1000 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 