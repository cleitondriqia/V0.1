"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera } from "lucide-react"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-slate-800/50 backdrop-blur-sm">
        <Link href="/" className="flex items-center space-x-2">
          <Camera className="h-8 w-8 text-emerald-400" />
          <span className="text-xl font-bold">PhotoVerse</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/explore" className="hover:text-emerald-400 transition-colors">
            Explore
          </Link>
          <Link href="/learn" className="hover:text-emerald-400 transition-colors">
            Learn
          </Link>
          <Link href="/sell" className="hover:text-emerald-400 transition-colors">
            Sell
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="bg-emerald-500 text-white border-emerald-500 hover:bg-emerald-600">
            Get started
          </Button>
          <Button variant="ghost" className="text-white hover:text-emerald-400">
            Log in
          </Button>
        </div>
      </nav>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{isLogin ? "Welcome back" : "Join our community"}</h1>
          <p className="text-slate-400">{isLogin ? "Sign in to your account" : "Create your account to get started"}</p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center text-white">{isLogin ? "Sign In" : "Register"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-300">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-300">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
              />
            </div>

            <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
              {isLogin ? "Sign In" : "Register"}
            </Button>

            <div className="text-center text-slate-400">
              {isLogin ? (
                <>
                  {"Don't have an account? "}
                  <button onClick={() => setIsLogin(false)} className="text-emerald-400 hover:underline">
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  {"Already have an account? "}
                  <button onClick={() => setIsLogin(true)} className="text-emerald-400 hover:underline">
                    Log in
                  </button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
