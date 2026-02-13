"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Github, 
  Instagram, 
  Mail, 
  Heart,
  ArrowUp
} from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a1929] border-t border-[#334e68] py-12">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="grid gap-8 md:grid-cols-3 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <Link href="/">
              <h3 className="text-xl font-bold text-white mb-2 hover:text-blue-400 transition-colors cursor-pointer">
                Muhammad<span className="text-blue-500">.</span>Arivito
              </h3>
            </Link>
            <p className="text-[#9fb3c8] text-sm">
              SMK TKJ Student & Tech Enthusiast
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-[#102a43] border border-[#334e68] text-[#9fb3c8] hover:text-white hover:bg-[#1e3a5f] hover:border-blue-500/50 transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              );
            })}
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <Button
              variant="outline"
              onClick={scrollToTop}
              className="border-[#334e68] text-[#9fb3c8] hover:bg-[#1e3a5f] hover:text-white"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Kembali ke Atas
            </Button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#334e68] my-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-[#627d98] text-sm flex items-center justify-center gap-1">
            © 2024 Muhammad Arivito. Made with{" "}
            <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using Next.js
          </p>
          <p className="text-[#627d98] text-xs mt-2">
            Built with Next.js, Tailwind CSS, shadcn/ui & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
