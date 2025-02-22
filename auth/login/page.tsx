"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { AuthFormWrapper } from "@/components/auth/auth-form-wrapper"
import type { LoginFormData, FormErrors } from "@/types/auth"

export default function LoginPage() {
  // Hooks
  const router = useRouter()
  const { toast } = useToast()

  // State
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})

  // Form validation
  const validateForm = () => {
    const newErrors: FormErrors = {}

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email gerekli"
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Şifre gerekli"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Event handlers
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      toast({
        title: "Giriş Başarılı!",
        description: "Hoş geldiniz.",
      })
      router.push("/")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  return (
    <AuthFormWrapper title="Giriş Yap" subtitle="CommandCore'a hoş geldin!">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#0A1A3B]/40 border-blue-500/20 text-white placeholder:text-white/50"
            placeholder="Email adresiniz"
          />
          {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
        </div>

        {/* Password field */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-white">
            Şifre
          </Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              className="bg-[#0A1A3B]/40 border-blue-500/20 text-white placeholder:text-white/50"
              placeholder="Şifreniz"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && <p className="text-red-400 text-sm">{errors.password}</p>}
        </div>

        {/* Submit button */}
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Giriş Yap</Button>
      </form>

      {/* Register link */}
      <div className="mt-6 text-center text-white/80">
        Hesabın yok mu?{" "}
        <Link href="/auth/register" className="text-blue-400 hover:underline">
          Kayıt Ol
        </Link>
      </div>
    </AuthFormWrapper>
  )
}

