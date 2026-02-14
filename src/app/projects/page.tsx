"use client";

import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Globe, 
  Server, 
  Network,
  Code,
  CheckCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PortfolioLayout from "@/components/portfolio/PortfolioLayout";
import Footer from "@/components/portfolio/Footer";

interface Feature {
  text: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: Feature[];
  // Tambahkan path gambar di sini, contoh: "/images/projects/portfolio-website.jpg"
  image?: string;
  github?: string;
  demo?: string;
  type: "web" | "network";
}

const webProjects: Project[] = [
  {
    title: "Marketplace Website",
    description: "Website marketplace untuk tugas menjual produk digital dan komponen komputer",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      { text: "Responsive Design" },
      { text: "Dark Mode Support" },
      { text: "Smooth Animations" },
      { text: "Modern UI/UX" },
    ],
    // Ganti dengan URL gambar Anda, contoh:
    // image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    image: "https://image2url.com/r2/default/images/1771052298302-65063b0e-15b1-404a-9ae1-9570ae8c9043.jpg",
    github: "https://github.com/",
    demo: "https://www.astacloud1.my.id",
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
    // image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    image: "",
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
    // image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    image: "",
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
    // image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800",
    image: "",
    type: "network",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <Card className="bg-[#102a43] border-[#334e68] h-full hover:border-blue-500/50 transition-all duration-300 group overflow-hidden">
      {/* Project Image */}
      <div className={`relative h-48 ${project.image && project.image.length > 0 ? '' : 'bg-gradient-to-br from-[#0a1929] to-[#102a43]'} overflow-hidden`}>
        {project.image && project.image.length > 0 ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Code className="h-12 w-12 text-blue-500/30 mx-auto mb-2" />
              <span className="text-[#334e68] text-sm">Project Screenshot</span>
            </div>
          </div>
        )}
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
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 px-4 rounded-md border border-[#334e68] text-[#9fb3c8] hover:bg-[#1e3a5f] hover:text-white text-sm font-medium transition-colors"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
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
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <Card className="bg-[#102a43] border-[#334e68] h-full hover:border-green-500/50 transition-all duration-300 group overflow-hidden">
      {/* Project Image */}
      {"image" in project && project.image && project.image.length > 0 && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
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

export default function ProjectsPage() {
  return (
    <PortfolioLayout>
      <section className="min-h-screen py-20 px-4 lg:px-8 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
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
            animate={{ opacity: 1, y: 0 }}
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
            animate={{ opacity: 1, y: 0 }}
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

      {/* Footer */}
      <Footer />
    </PortfolioLayout>
  );
}
