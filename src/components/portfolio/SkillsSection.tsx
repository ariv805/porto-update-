"use client";

import { motion } from "framer-motion";
import { 
  Network, 
  Code, 
  Cable, 
  Settings, 
  GitBranch, 
  Database,
  Globe,
  FileCode,
  Server
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  icon: React.ElementType;
  level: number;
  color: string;
}

const networkSkills: Skill[] = [
  { name: "Crimping Kabel", icon: Cable, level: 80, color: "bg-blue-500" },
  { name: "Setting IP", icon: Settings, level: 75, color: "bg-green-500" },
  { name: "Topologi LAN", icon: Network, level: 70, color: "bg-purple-500" },
  { name: "Packet Tracer", icon: Server, level: 65, color: "bg-orange-500" },
];

const webSkills: Skill[] = [
  { name: "HTML & CSS", icon: Globe, level: 85, color: "bg-cyan-500" },
  { name: "JavaScript Dasar", icon: FileCode, level: 60, color: "bg-yellow-500" },
  { name: "Next.js Dasar", icon: Code, level: 55, color: "bg-blue-500" },
  { name: "PHP Dasar", icon: FileCode, level: 50, color: "bg-purple-500" },
  { name: "MySQL Dasar", icon: Database, level: 45, color: "bg-orange-500" },
  { name: "Git & GitHub", icon: GitBranch, level: 60, color: "bg-red-500" },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const Icon = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="p-4 rounded-lg bg-[#0a1929] border border-[#334e68] hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg ${skill.color}/20`}>
            <Icon className={`h-5 w-5 ${skill.color.replace('bg-', 'text-')}`} />
          </div>
          <span className="text-white font-medium flex-1">{skill.name}</span>
          <span className="text-[#9fb3c8] text-sm">{skill.level}%</span>
        </div>
        <div className="relative h-2 rounded-full bg-[#102a43] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className={`absolute h-full rounded-full ${skill.color}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 lg:px-8 relative"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-4">
            🛠 Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Kemampuan Teknis
          </h2>
          <p className="text-[#9fb3c8] text-lg max-w-2xl mx-auto">
            Berbagai keterampilan yang telah dan sedang saya pelajari
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Network Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-[#102a43] border-[#334e68] h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Network className="h-6 w-6 text-blue-400" />
                  </div>
                  🔌 Jaringan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {networkSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Web Development Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-[#102a43] border-[#334e68] h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <Code className="h-6 w-6 text-green-400" />
                  </div>
                  💻 Web Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {webSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#102a43] border border-[#334e68]">
            <span className="text-[#9fb3c8]">
              📈 Terus belajar dan mengembangkan kemampuan
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
