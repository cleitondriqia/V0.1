"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Camera, ChevronLeft, ChevronRight } from "lucide-react"

export default function EbooksPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")

  const ebooks = [
    {
      id: 1,
      title: "Mastering Landscape Photography",
      description: "Learn to capture stunning landscapes with expert tips.",
      image: "/placeholder.svg?height=400&width=300",
      price: "$29.99",
      category: "Landscape",
    },
    {
      id: 2,
      title: "Portrait Photography Essentials",
      description: "A comprehensive guide to portrait photography.",
      image: "/placeholder.svg?height=400&width=300",
      price: "$34.99",
      category: "Portrait",
    },
    {
      id: 3,
      title: "Advanced Editing Techniques",
      description: "Enhance your photos with advanced editing skills.",
      image: "/placeholder.svg?height=400&width=300",
      price: "$39.99",
      category: "Editing",
    },
    {
      id: 4,
      title: "Wildlife Photography Guide",
      description: "Explore the world of wildlife photography.",
      image: "/placeholder.svg?height=400&width=300",
      price: "$32.99",
      category: "Wildlife",
    },
    {
      id: 5,
      title: "Urban Photography Secrets",
      description: "Discover the art of urban photography.",
      image: "/placeholder.svg?height=400&width=300",
      price: "$27.99",
      category: "Urban",
    },
    {
      id: 6,
      title: "Night Photography Mastery",
      description: "Master the techniques of night photography.",
      image: "/placeholder.svg?height=400&width=300",
      price: "$31.99",
      category: "Night",
    },
  ]

  const totalPages = 4

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-slate-800/50 backdrop-blur-sm">
        <Link href="/" className="flex items-center space-x-2">
          <Camera className="h-8 w-8 text-emerald-400" />
          <span className="text-xl font-bold">PhotoVerse</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/courses" className="hover:text-emerald-400 transition-colors">
            Courses
          </Link>
          <Link href="/workshops" className="hover:text-emerald-400 transition-colors">
            Workshops
          </Link>
          <Link href="/resources" className="hover:text-emerald-400 transition-colors">
            Resources
          </Link>
          <Link href="/community" className="hover:text-emerald-400 transition-colors">
            Community
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="bg-emerald-500 text-white border-emerald-500 hover:bg-emerald-600">
            Get started
          </Button>
          <Link href="/login">
            <Button variant="ghost" className="text-white hover:text-emerald-400">
              Log in
            </Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Explore Our E-Book Collection</h1>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input
              placeholder="Search for e-books"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <Select>
              <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600">
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="landscape">Landscape</SelectItem>
                <SelectItem value="portrait">Portrait</SelectItem>
                <SelectItem value="wildlife">Wildlife</SelectItem>
                <SelectItem value="urban">Urban</SelectItem>
                <SelectItem value="night">Night</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-24 bg-slate-800/50 border-slate-600 text-white">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600">
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under $30</SelectItem>
                <SelectItem value="mid">$30 - $40</SelectItem>
                <SelectItem value="high">Over $40</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-32 bg-slate-800/50 border-slate-600 text-white">
                <SelectValue placeholder="Popularity" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600">
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* E-books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {ebooks.map((book) => (
            <Card
              key={book.id}
              className="bg-slate-800 border-slate-700 overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-[3/4] relative">
                <Image src={book.image || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{book.title}</h3>
                <p className="text-slate-400 mb-4">{book.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-emerald-400">{book.price}</span>
                  <Link href={`/ebooks/${book.id}`}>
                    <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                      Buy Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {[1, 2, 3, 4].map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(page)}
              className={
                currentPage === page
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
              }
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
