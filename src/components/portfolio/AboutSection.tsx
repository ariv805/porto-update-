"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Heart, 
  BookOpen, 
  Target,
  Network,
  Globe,
  Shield,
  Server,
  Code,
  Lock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const interests = [
  { icon: Network, label: "Jaringan Komputer", color: "text-blue-400" },
  { icon: Code, label: "Web Development (Next.js, PHP)", color: "text-green-400" },
  { icon: Shield, label: "Cybersecurity Dasar", color: "text-purple-400" },
];

const learning = [
  { icon: Server, label: "Instalasi & Jaringan", color: "text-orange-400" },
  { icon: Globe, label: "Pembuatan Website", color: "text-cyan-400" },
  { icon: Lock, label: "Keamanan Sistem Dasar", color: "text-red-400" },
];

const goals = [
  "Menguasai konfigurasi jaringan enterprise",
  "Menjadi Full-Stack Web Developer",
  "Memahami ethical hacking & security",
  "Membangun karir di bidang IT",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 lg:px-8 relative"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Tentang Saya
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Kenali Saya Lebih Dekat
          </h2>
          <p className="text-[#9fb3c8] text-lg max-w-2xl mx-auto">
            Seorang pelajar yang passionate dalam mengeksplorasi dunia teknologi
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-[#102a43] border-[#334e68] h-full hover:border-blue-500/50 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <GraduationCap className="h-6 w-6 text-blue-400" />
                  </div>
                  Jurusan & Sekolah
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-[#0a1929] border border-[#334e68]">
                    <h3 className="text-xl font-bold text-white mb-2">
                      SMK - Teknik Komputer dan Jaringan (TKJ)
                    </h3>
                    <p className="text-[#9fb3c8]">
                      Sedang menempuh pendidikan di kelas 10, mempelajari berbagai 
                      aspek teknis komputer dan jaringan komputer.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-[#9fb3c8]">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Status: Aktif Belajar</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Interests Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-[#102a43] border-[#334e68] h-full hover:border-green-500/50 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <Heart className="h-6 w-6 text-green-400" />
                  </div>
                  Minat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {interests.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-[#0a1929] border border-[#334e68] hover:border-[#334e68]/80 transition-colors"
                      >
                        <Icon className={`h-5 w-5 ${item.color}`} />
                        <span className="text-white font-medium">{item.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Currently Learning Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-[#102a43] border-[#334e68] h-full hover:border-orange-500/50 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="p-2 rounded-lg bg-orange-500/20">
                    <BookOpen className="h-6 w-6 text-orange-400" />
                  </div>
                  Sedang Dipelajari
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {learning.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-[#0a1929] border border-[#334e68] hover:border-[#334e68]/80 transition-colors"
                      >
                        <Icon className={`h-5 w-5 ${item.color}`} />
                        <span className="text-white font-medium">{item.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Goals Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-[#102a43] border-[#334e68] h-full hover:border-purple-500/50 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <Target className="h-6 w-6 text-purple-400" />
                  </div>
                  Tujuan Belajar 2-3 Tahun
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {goals.map((goal, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-[#0a1929] border border-[#334e68]"
                    >
                      <div className="mt-1 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs text-purple-400 font-bold">{index + 1}</span>
                      </div>
                      <span className="text-white">{goal}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
