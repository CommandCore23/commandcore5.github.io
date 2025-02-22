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
import type { RegisterFormData, FormErrors } from "@/types/auth"

export default function RegisterPage() {
  // Hooks
  const router = useRouter()
  const { toast } = useToast()

  // State
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})

  // Form validation
  const validateForm = () => {
    const newErrors: FormErrors = {}

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = "Kullanıcı adı gerekli"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email gerekli"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Geçerli bir email adresi girin"
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Şifre gerekli"
    } else if (formData.password.length < 6) {
      newErrors.password = "Şifre en az 6 karakter olmalı"
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Şifreler eşleşmiyor"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Event handlers
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      toast({
        title: "Kayıt Başarılı!",
        description: "Hesabınız başarıyla oluşturuldu.",
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
    <AuthFormWrapper title="Kayıt Ol" subtitle="CommandCore topluluğuna katıl!">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username field */}
        <div className="space-y-2">
          <Label htmlFor="username" className="text-white">
            Kullanıcı Adı
          </Label>
          <Input
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="bg-[#0A1A3B]/40 border-blue-500/20 text-white placeholder:text-white/50"
            placeholder="Kullanıcı adınız"
          />
          {errors.username && <p className="text-red-400 text-sm">{errors.username}</p>}
        </div>

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

        {/* Confirm Password field */}
        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-white">
            Şifre Tekrar
          </Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              className="bg-[#0A1A3B]/40 border-blue-500/20 text-white placeholder:text-white/50"
              placeholder="Şifrenizi tekrar girin"
            />
          </div>
          {errors.confirmPassword && <p className="text-red-400 text-sm">{errors.confirmPassword}</p>}
        </div>

        {/* Submit button */}
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Kayıt Ol</Button>
      </form>

      {/* Login link */}
      <div className="mt-6 text-center text-white/80">
        Zaten hesabın var mı?{" "}
        <Link href="/auth/login" className="text-blue-400 hover:underline">
          Giriş Yap
        </Link>
      </div>
    </AuthFormWrapper>
  )
}

