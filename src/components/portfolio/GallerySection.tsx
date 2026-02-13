"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Camera, 
  Server, 
  Monitor, 
  Shield,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Lab Jaringan",
    category: "network",
    description: "Praktik di laboratorium jaringan komputer dengan konfigurasi router dan switch.",
    icon: Server,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Rakit PC",
    category: "hardware",
    description: "Proses perakitan komputer dari komponen-komponen hardware.",
    icon: Monitor,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 3,
    title: "Coding Session",
    category: "coding",
    description: "Screenshot saat mengerjakan proyek web development.",
    icon: Monitor,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 4,
    title: "Lab Keamanan",
    category: "security",
    description: "Praktik keamanan sistem dan jaringan komputer.",
    icon: Shield,
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    id: 5,
    title: "Topologi Jaringan",
    category: "network",
    description: "Simulasi topologi jaringan menggunakan Packet Tracer.",
    icon: Server,
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: 6,
    title: "Project Development",
    category: "coding",
    description: "Pengembangan aplikasi web dengan Next.js.",
    icon: Monitor,
    color: "from-cyan-500/20 to-blue-500/20",
  },
];

const categories = [
  { id: "all", label: "Semua", icon: Camera },
  { id: "network", label: "Jaringan", icon: Server },
  { id: "hardware", label: "Hardware", icon: Monitor },
  { id: "coding", label: "Coding", icon: Monitor },
  { id: "security", label: "Security", icon: Shield },
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section
      id="gallery"
      className="min-h-screen py-20 px-4 lg:px-8 relative"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            📷 Galeri
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Galeri Praktik
          </h2>
          <p className="text-[#9fb3c8] text-lg max-w-2xl mx-auto">
            Dokumentasi kegiatan praktik dan pembelajaran
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            
            return (
              <Button
                key={category.id}
                variant={isActive ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={isActive
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "border-[#334e68] text-[#9fb3c8] hover:bg-[#1e3a5f] hover:text-white"
                }
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.label}
              </Button>
            );
          })}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card 
                    className="bg-[#102a43] border-[#334e68] h-full cursor-pointer group overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                    onClick={() => setSelectedItem(item)}
                  >
                    {/* Image Placeholder */}
                    <div className={`relative h-48 bg-gradient-to-br ${item.color} overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="h-16 w-16 text-white/20 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute inset-0 bg-[#0a1929]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex items-center gap-2 text-white">
                          <ZoomIn className="h-5 w-5" />
                          <span>Lihat Detail</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </h3>
                        <Badge variant="secondary" className="bg-[#0a1929] text-[#9fb3c8] text-xs">
                          {categories.find(c => c.id === item.category)?.label}
                        </Badge>
                      </div>
                      <p className="text-sm text-[#9fb3c8] line-clamp-2">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#102a43] border border-[#334e68] rounded-xl max-w-2xl w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-[#334e68]">
                  <h3 className="text-xl font-bold text-white">{selectedItem.title}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedItem(null)}
                    className="text-[#9fb3c8] hover:text-white hover:bg-[#1e3a5f]"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                {/* Modal Content */}
                <div className={`h-64 bg-gradient-to-br ${selectedItem.color} flex items-center justify-center`}>
                  <selectedItem.icon className="h-24 w-24 text-white/20" />
                </div>
                
                <div className="p-6">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 mb-4">
                    {categories.find(c => c.id === selectedItem.category)?.label}
                  </Badge>
                  <p className="text-[#9fb3c8]">{selectedItem.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#102a43] border border-[#334e68]">
            <Camera className="h-4 w-4 text-[#9fb3c8]" />
            <span className="text-[#9fb3c8]">
              Klik gambar untuk melihat detail
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
