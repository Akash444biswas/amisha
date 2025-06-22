"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";

export default function AboutSection() {
  const skills = [
    "Java", "Spring Boot", "REST API", "Hibernate (JPA)", "PostgreSQL", "SQL",
    "HTML", "CSS", "JavaScript", "Git", "GitHub", "Eclipse", "VS Code", "Postman"
  ];

  const highlights = [
    {
      icon: Code,
      title: "Clean Architecture",
      description: "Building maintainable, scalable backend systems following SOLID principles and best practices."
    },
    {
      icon: Palette,
      title: "API Development",
      description: "Creating secure, well-documented REST APIs that power seamless frontend experiences."
    },
    {
      icon: Zap,
      title: "Database Optimization",
      description: "Designing efficient database schemas and optimizing queries for better performance."
    },
    {
      icon: Users,
      title: "Problem Solving",
      description: "Analyzing complex requirements and implementing robust solutions using Java and Spring Boot."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Backend Developer skilled in Java, Spring Boot, and PostgreSQL with a focus on clean architecture,
                secure REST APIs, and problem-solving through backend systems. Experienced in building full-stack
                features and passionate about writing maintainable code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in creating robust backend systems that power seamless user experiences.
                My expertise lies in developing scalable APIs, implementing secure authentication systems,
                and optimizing database performance to deliver reliable and efficient solutions.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Technologies I Work With</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 mr-3">
                        <highlight.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold">{highlight.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
