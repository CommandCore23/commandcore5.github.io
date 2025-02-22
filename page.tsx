"use client"

import type React from "react"

import { DiscIcon as Discord, ShoppingBag, Users, Gamepad2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-24 md:py-32"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A3B] to-[#0A0A0B]" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            CommandCore
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl mb-8 text-white/90"
          >
            Roblox Studio içeriklerini al, sat ve paylaş!
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open("https://discord.gg/8pEaZcXrMD", "_blank")}
            >
              <Discord className="mr-2 h-5 w-5" />
              Discord&apos;a Katıl
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500/20 hover:bg-blue-500/10 text-white"
              onClick={() => window.open("https://www.roblox.com/tr/communities/35346663/CommandCore", "_blank")}
            >
              Roblox Grubu
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Founders Section */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1A3B]/20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={item} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Kurucular</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={item}>
              <FounderCard name="Hexeoe" role="Kurucu" description="CommandCore'un kurucularından" />
            </motion.div>
            <motion.div variants={item}>
              <FounderCard name="Tohistan" role="Kurucu" description="CommandCore'un kurucularından" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section variants={container} initial="hidden" animate="show" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={item} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Topluluk Özellikleri</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={item}>
              <FeatureCard
                icon={<ShoppingBag className="h-8 w-8 text-blue-400" />}
                title="Al & Sat"
                description="Kendi modellerini ve scriptlerini sat, başkalarından satın al"
              />
            </motion.div>
            <motion.div variants={item}>
              <FeatureCard
                icon={<Users className="h-8 w-8 text-blue-400" />}
                title="Aktif Topluluk"
                description="Diğer geliştiricilerle tanış ve deneyim paylaş"
              />
            </motion.div>
            <motion.div variants={item}>
              <FeatureCard
                icon={<Gamepad2 className="h-8 w-8 text-blue-400" />}
                title="Oyun Geliştirme"
                description="Projelerini geliştirmek için ihtiyacın olan her şey"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 to-[#0A1A3B]/50"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Hemen Başla</h2>
          <p className="text-lg mb-8 text-white/90">
            İçeriklerini satmaya başlamak veya ihtiyacın olan içerikleri bulmak için Discord sunucumuza katıl!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open("https://discord.gg/8pEaZcXrMD", "_blank")}
            >
              <Discord className="mr-2 h-5 w-5" />
              Discord&apos;a Katıl
            </Button>
            <Link href="/auth/register">
              <Button size="lg" variant="outline" className="border-blue-500/20 hover:bg-blue-500/10 text-white">
                Üye Ol
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-[#0A1A3B]/20 border-blue-500/20 hover:border-blue-500/40 transition-all hover:scale-105">
      <CardContent className="p-6">
        <div className="text-center">
          {icon}
          <h3 className="text-xl font-semibold mt-4 mb-2 text-white">{title}</h3>
          <p className="text-white/80">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function FounderCard({ name, role, description }: { name: string; role: string; description: string }) {
  return (
    <Card className="bg-[#0A1A3B]/20 border-blue-500/20 hover:border-blue-500/40 transition-all hover:scale-105">
      <CardContent className="p-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
          <Badge className="mb-4 bg-blue-500/10 text-blue-300">{role}</Badge>
          <p className="text-white/80">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

