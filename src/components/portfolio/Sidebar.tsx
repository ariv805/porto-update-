"use client";

import { useState, useSyncExternalStore, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  User, 
  Code, 
  FolderOpen, 
  Image, 
  Menu, 
  X,
  Moon,
  Sun
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const menuItems = [
  { id: "hero", label: "Beranda", icon: Home },
  { id: "about", label: "Tentang Saya", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Proyek", icon: FolderOpen },
  { id: "gallery", label: "Galeri", icon: Image },
];

// Custom hook to check if component is hydrated using useSyncExternalStore
function useIsHydrated() {
  return useSyncExternalStore(
    useCallback((subscribe) => {
      // No subscription needed, we just want to check hydration
      return () => {};
    }, []),
    () => true, // Client-side: return true
    () => false // Server-side: return false
  );
}

// Theme Toggle Component
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed top-4 right-4 z-50 bg-[#102a43] border border-[#334e68] hover:bg-[#1e3a5f]"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isHydrated = useIsHydrated();

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-[#102a43] border border-[#334e68] hover:bg-[#1e3a5f]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Theme Toggle Button - only render after hydration */}
      {isHydrated && <ThemeToggle />}

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : 0 }}
        className={cn(
          "fixed left-0 top-0 h-full w-[280px] bg-[#0a1929] border-r border-[#334e68] z-40",
          "lg:translate-x-0 transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Brand */}
          <div className="p-6 border-b border-[#334e68]">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-xl font-bold text-white">
                Muhammad<span className="text-blue-500">.</span>Arivito
              </h1>
              <p className="text-sm text-[#9fb3c8] mt-1">SMK TKJ Student</p>
            </motion.div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => handleNavigate(item.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300",
                        "hover:bg-[#1e3a5f] group",
                        isActive 
                          ? "bg-blue-500/20 text-blue-400 border-l-4 border-blue-500" 
                          : "text-[#9fb3c8]"
                      )}
                    >
                      <Icon className={cn(
                        "h-5 w-5 transition-transform group-hover:scale-110",
                        isActive && "text-blue-400"
                      )} />
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="ml-auto w-2 h-2 rounded-full bg-blue-500"
                        />
                      )}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-[#334e68]">
            <p className="text-xs text-[#627d98] text-center">
              © 2024 Muhammad Arivito
            </p>
            <p className="text-xs text-[#627d98] text-center mt-1">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
