"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Users } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      icon: BookOpen,
      title: "Training in Full Stack Web Development",
      organization: "E&ICT Academy, IIT Kanpur",
      description: "Comprehensive training program in full stack web development covering modern technologies and best practices.",
      type: "Training",
      status: "Completed",
      year: "2022",
      skills: ["Full Stack Development", "Web Technologies", "Modern Frameworks"],
      hoverColor: "hover:border-blue-500 hover:shadow-blue-500/20 hover:bg-blue-500/10",
      iconBg: "group-hover:bg-blue-500/20",
      iconColor: "group-hover:text-blue-400"
    },
    {
      icon: Users,
      title: "Training in Android App Development",
      organization: "E&ICT Academy, IIT Kanpur",
      description: "Specialized training program in Android application development focusing on mobile app creation and deployment.",
      type: "Training",
      status: "Completed",
      year: "2023",
      skills: ["Android Development", "Mobile Apps", "Java/Kotlin"],
      hoverColor: "hover:border-green-500 hover:shadow-green-500/20 hover:bg-green-500/10",
      iconBg: "group-hover:bg-green-500/20",
      iconColor: "group-hover:text-green-400"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">Certifications & Training</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional development and academic achievements that enhance my technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              className="group"
            >
              <Card className={`h-full hover:shadow-2xl transition-all duration-500 border-2 bg-card/80 backdrop-blur-sm ${cert.hoverColor}`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-primary/10 transition-all duration-300 ${cert.iconBg}`}>
                      <cert.icon className={`h-6 w-6 text-primary group-hover:scale-110 transition-all duration-300 ${cert.iconColor}`} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant="outline" className="text-xs">
                        {cert.type}
                      </Badge>
                      {cert.year && (
                        <Badge variant="secondary" className="text-xs">
                          {cert.year}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-white transition-colors duration-300">{cert.title}</CardTitle>
                  <CardDescription className="text-primary font-medium group-hover:text-white/90 transition-colors duration-300">
                    {cert.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-white/80 transition-colors duration-300">
                    {cert.description}
                  </p>
                  
                  {/* Skills */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs hover:bg-white hover:text-black transition-all duration-200 group-hover:animate-pulse"
                          style={{ animationDelay: `${skillIndex * 100}ms` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Status */}
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-600">
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card rounded-lg p-8 max-w-2xl mx-auto border">
            <h4 className="text-xl font-semibold mb-4">Continuous Learning</h4>
            <p className="text-muted-foreground leading-relaxed">
              I believe in continuous professional development and staying updated with the latest 
              technologies and industry best practices. These certifications and training programs 
              have strengthened my foundation in backend development and software engineering.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
