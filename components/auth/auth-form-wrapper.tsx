"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AuthFormWrapperProps {
  children: ReactNode
  title: string
  subtitle: string
}

export function AuthFormWrapper({ children, title, subtitle }: AuthFormWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="min-h-screen bg-[#0A0A0B] flex items-center justify-center p-4"
    >
      <div className="w-full max-w-md">
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="bg-[#0A1A3B]/20 p-8 rounded-xl border border-blue-500/20"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
            <p className="text-white/80">{subtitle}</p>
          </div>
          {children}
        </motion.div>
      </div>
    </motion.div>
  )
}

