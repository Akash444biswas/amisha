"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import LottieAnimation from "@/components/LottieAnimation";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Slotify – Online Appointment Booking System",
      description: "Developed backend services using Java, applying Core Java and OOPs concepts to build scalable components.",
      features: [
        "Created secure and RESTful APIs using Spring Boot for slot generation, booking, and cancellation",
        "Designed and managed relational data using SQL, ensuring efficient appointment and user-role mapping",
        "Created simple UI mockups using HTML and CSS for testing and demonstration purposes",
        "Used Git for version control and GitHub for code collaboration and repository management",
        "Tested API functionality, edge cases, and role-based access using Postman"
      ],
      image: "/slotify.jpeg",
      technologies: ["Java", "Spring Boot", "SQL", "HTML", "CSS", "Git", "Postman"],
      githubUrl: "https://github.com/amisha6502",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Mini Mart",
      description: "Designed and developed Mini Mart, a responsive online grocery shopping platform using JavaScript, HTML, and CSS.",
      features: [
        "Built an intuitive UI with a modern design to enhance user experience",
        "Ensured seamless navigation with a well-structured layout and interactive elements",
        "Focused on performance optimization and responsiveness for a smooth shopping experience across devices"
      ],
      image: "/api/placeholder/600/400",
      animation: "/Animation - 1750576386234.json",
      technologies: ["JavaScript", "HTML", "CSS", "Responsive Design"],
      githubUrl: "https://github.com/amisha6502",
      liveUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              className="group"
            >
              <Card className="h-full overflow-hidden project-card border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="aspect-video relative">
                    {project.title.includes('Slotify') ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : project.title.includes('Mini Mart') ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-4">
                        <LottieAnimation
                          src={project.animation || "/Animation - 1750576386234.json"}
                          className="w-full h-full max-w-48 max-h-48 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <span className="text-6xl opacity-50 group-hover:scale-110 transition-transform duration-300">
                          🛒
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                </div>

                {/* Project Content */}
                <CardContent className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/amisha6502"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-md font-medium transition-colors"
          >
            View All Projects on GitHub
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
