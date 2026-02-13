"use client";

import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Globe, 
  Server, 
  Network,
  Code,
  Layers,
  CheckCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Feature {
  text: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: Feature[];
  image: string;
  github?: string;
  demo?: string;
  type: "web" | "network";
}

const webProjects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Website portfolio personal yang dibangun dengan Next.js, Tailwind CSS, dan Framer Motion untuk menampilkan profil dan proyek.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      { text: "Responsive Design" },
      { text: "Dark Mode Support" },
      { text: "Smooth Animations" },
      { text: "Modern UI/UX" },
    ],
    image: "/api/placeholder/400/250",
    github: "https://github.com/",
    demo: "#",
    type: "web",
  },
  {
    title: "Sistem Informasi Sederhana",
    description: "Aplikasi web untuk manajemen data sederhana dengan PHP dan MySQL. Dilengkapi dengan CRUD operations.",
    technologies: ["PHP", "MySQL", "Bootstrap", "HTML/CSS"],
    features: [
      { text: "CRUD Operations" },
      { text: "Database Integration" },
      { text: "User Authentication" },
    ],
    image: "/api/placeholder/400/250",
    github: "https://github.com/",
    type: "web",
  },
  {
    title: "Landing Page Project",
    description: "Halaman landing modern untuk showcase produk dengan animasi scroll dan UI yang menarik.",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    features: [
      { text: "Scroll Animations" },
      { text: "Mobile Responsive" },
      { text: "Fast Loading" },
    ],
    image: "/api/placeholder/400/250",
    github: "https://github.com/",
    type: "web",
  },
];

const networkProjects = [
  {
    title: "Simulasi Topologi Packet Tracer",
    description: "Simulasi jaringan LAN dengan konfigurasi router, switch, dan beberapa client menggunakan Cisco Packet Tracer.",
    technologies: ["Cisco Packet Tracer", "Router", "Switch", "VLAN"],
    features: [
      { text: "Konfigurasi Router & Switch" },
      { text: "VLAN Configuration" },
      { text: "DHCP Setup" },
      { text: "Network Security" },
    ],
    type: "network",
  },
  {
    title: "Instalasi OS Server",
    description: "Praktik instalasi sistem operasi server (Linux/Windows Server) dengan konfigurasi dasar.",
    technologies: ["Linux", "Windows Server", "VirtualBox"],
    features: [
      { text: "OS Installation" },
      { text: "Network Configuration" },
      { text: "User Management" },
    ],
    type: "network",
  },
  {
    title: "Konfigurasi LAN Kecil",
    description: "Setup jaringan LAN lokal dengan crimping kabel, konfigurasi IP, dan testing koneksi.",
    technologies: ["Crimping Tool", "UTP Cable", "Switch", "RJ45"],
    features: [
      { text: "Cable Crimping" },
      { text: "IP Addressing" },
      { text: "Network Testing" },
      { text: "Documentation" },
    ],
    type: "network",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    <Card className="bg-[#102a43] border-[#334e68] h-full hover:border-blue-500/50 transition-all duration-300 group overflow-hidden">
      {/* Project Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-[#0a1929] to-[#102a43] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Code className="h-12 w-12 text-blue-500/30 mx-auto mb-2" />
            <span className="text-[#334e68] text-sm">Project Screenshot</span>
          </div>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-[#0a1929]/80 border border-[#334e68]">
            {project.type === "web" ? (
              <><Globe className="h-3 w-3 mr-1" /> Web</>
            ) : (
              <><Network className="h-3 w-3 mr-1" /> Network</>
            )}
          </Badge>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="text-[#9fb3c8]">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className="border-[#334e68] text-[#9fb3c8] hover:bg-[#1e3a5f]"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-white">Fitur:</h4>
          <ul className="grid grid-cols-2 gap-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[#9fb3c8]">
                <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                {feature.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        {project.type === "web" && (
          <div className="flex gap-3 pt-2">
            {project.github && (
              <Button 
                variant="outline" 
                size="sm"
                className="border-[#334e68] text-[#9fb3c8] hover:bg-[#1e3a5f] hover:text-white"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            )}
            {project.demo && (
              <Button 
                size="sm"
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  </motion.div>
);

const NetworkProjectCard = ({ project, index }: { project: typeof networkProjects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    <Card className="bg-[#102a43] border-[#334e68] h-full hover:border-green-500/50 transition-all duration-300 group">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-green-500/20">
            <Server className="h-5 w-5 text-green-400" />
          </div>
          <CardTitle className="text-white group-hover:text-green-400 transition-colors">
            {project.title}
          </CardTitle>
        </div>
        <CardDescription className="text-[#9fb3c8]">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className="border-green-500/30 text-green-400 hover:bg-green-500/10"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-white">Cakupan Praktik:</h4>
          <ul className="grid grid-cols-2 gap-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[#9fb3c8]">
                <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                {feature.text}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 lg:px-8 relative"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            🚀 Proyek
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Proyek Saya
          </h2>
          <p className="text-[#9fb3c8] text-lg max-w-2xl mx-auto">
            Berbagai proyek yang telah dan sedang saya kerjakan
          </p>
        </motion.div>

        {/* Web Development Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <Globe className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Proyek Web Development</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {webProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Network Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-green-500/20">
              <Network className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Proyek Jaringan & TPI</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {networkProjects.map((project, index) => (
              <NetworkProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
