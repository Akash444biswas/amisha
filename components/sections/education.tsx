"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      icon: GraduationCap,
      degree: "Bachelor's Degree",
      institution: "University",
      year: "2024",
      grade: "CGPA: 8.50",
      description: "Completed Bachelor's degree with excellent academic performance.",
      hoverColor: "hover:border-blue-500 hover:shadow-blue-500/20 hover:bg-blue-500/10",
      iconBg: "group-hover:bg-blue-500/20",
      iconColor: "group-hover:text-blue-400"
    },
    {
      icon: Award,
      degree: "Class 12th (CBSE)",
      institution: "DAV Public School, Bilaspur",
      year: "2020",
      grade: "83.6%",
      description: "Completed higher secondary education with strong academic foundation.",
      hoverColor: "hover:border-green-500 hover:shadow-green-500/20 hover:bg-green-500/10",
      iconBg: "group-hover:bg-green-500/20",
      iconColor: "group-hover:text-green-400"
    },
    {
      icon: Award,
      degree: "Class 10th (CBSE)",
      institution: "DAV Public School, Bilaspur",
      year: "2018",
      grade: "86.8%",
      description: "Completed secondary education with excellent academic performance.",
      hoverColor: "hover:border-purple-500 hover:shadow-purple-500/20 hover:bg-purple-500/10",
      iconBg: "group-hover:bg-purple-500/20",
      iconColor: "group-hover:text-purple-400"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic journey and educational achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative bg-card border rounded-xl p-6 transition-all duration-500 ${edu.hoverColor}`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-muted transition-all duration-300 ${edu.iconBg}`}>
                  <edu.icon className={`h-6 w-6 text-muted-foreground transition-colors duration-300 ${edu.iconColor}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{edu.year}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{edu.degree}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                    {edu.grade}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
