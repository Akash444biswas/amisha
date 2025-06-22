"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "REST API", level: 90 },
        { name: "Hibernate (JPA)", level: 80 }
      ]
    },
    {
      title: "Database & SQL",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "SQL", level: 90 },
        { name: "Database Design", level: 80 },
        { name: "Query Optimization", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Eclipse", level: 85 },
        { name: "VS Code", level: 85 },
        { name: "Postman", level: 90 }
      ]
    }
  ];

  const technologies = [
    "Java", "Spring Boot", "REST API", "Hibernate (JPA)", "SQL", "PostgreSQL",
    "HTML", "CSS", "JavaScript", "Git", "GitHub", "Eclipse", "VS Code", "Postman",
    "Spring Security", "JWT", "Database Design", "Clean Architecture"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.1 
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 
                        }}
                        viewport={{ once: true }}
                      >
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technology Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="cursor-default"
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card rounded-lg p-8 max-w-2xl mx-auto border">
            <h4 className="text-xl font-semibold mb-4">Always Learning</h4>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m constantly exploring new technologies and improving my skills.
              Currently diving deeper into microservices architecture, cloud technologies,
              and advanced Spring Boot patterns to stay at the forefront of backend development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
