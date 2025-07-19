import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ThumbsUp, MessageCircle, Camera } from "lucide-react"

export default function HomePage() {
  const featuredBooks = [
    {
      id: 1,
      title: "Mastering Landscape Photography",
      description: "Learn to capture stunning landscapes with expert techniques.",
      image: "/placeholder.svg?height=400&width=300",
      price: "$29.99",
    },
    {
      id: 2,
      title: "The Art of Portrait Photography",
      description: "Discover the secrets to creating captivating portraits.",
      image: "/placeholder.svg?height=400&width=300",
      price: "$34.99",
    },
    {
      id: 3,
      title: "Urban Street Photography",
      description: "Explore the dynamic world of street photography.",
      image: "/placeholder.svg?height=400&width=300",
      price: "$24.99",
    },
  ]

  const testimonials = [
    {
      name: "Ethan Carter",
      date: "2023-08-15",
      rating: 5,
      comment:
        "This e-book transformed my landscape photography. The techniques are practical and the results are amazing!",
      likes: 12,
      replies: 1,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Sophia Bennett",
      date: "2023-09-22",
      rating: 4,
      comment:
        "A great resource for improving portrait skills. The tips on lighting and composition were particularly helpful.",
      likes: 8,
      replies: 2,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Liam Harper",
      date: "2023-10-10",
      rating: 5,
      comment:
        "I've always been fascinated by street photography, and this e-book provided the perfect guidance to get started.",
      likes: 15,
      replies: 3,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-slate-800/50 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <Camera className="h-8 w-8 text-emerald-400" />
          <span className="text-xl font-bold">PhotoMastery</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/courses" className="hover:text-emerald-400 transition-colors">
            Courses
          </Link>
          <Link href="/ebooks" className="hover:text-emerald-400 transition-colors">
            E-books
          </Link>
          <Link href="/community" className="hover:text-emerald-400 transition-colors">
            Community
          </Link>
          <Link href="/resources" className="hover:text-emerald-400 transition-colors">
            Resources
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="bg-emerald-500 text-white border-emerald-500 hover:bg-emerald-600">
            Get started
          </Button>
          <Link href="/login">
            <Button variant="ghost" className="text-white hover:text-emerald-400">
              Sign in
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/80"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Unlock Your Photographic Potential</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Master the art of photography with our comprehensive e-books. Learn from industry experts and elevate your
            skills to capture breathtaking images.
          </p>
          <Link href="/ebooks">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3">
              Explore E-books
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured E-books */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured E-books</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
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
                    <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="px-6 py-16 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Customer Testimonials</h2>
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <span className="text-slate-400 text-sm">{testimonial.date}</span>
                      </div>
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating ? "fill-emerald-400 text-emerald-400" : "text-slate-600"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-slate-300 mb-4">{testimonial.comment}</p>
                      <div className="flex items-center space-x-4 text-slate-400">
                        <button className="flex items-center space-x-1 hover:text-emerald-400 transition-colors">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{testimonial.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-emerald-400 transition-colors">
                          <MessageCircle className="h-4 w-4" />
                          <span>{testimonial.replies}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <p className="text-slate-400">
                Learn photography from industry experts with our comprehensive e-book collection.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-slate-400">support@photomastery.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Privacy Policy</h3>
              <Link href="/privacy" className="text-slate-400 hover:text-emerald-400">
                View Policy
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Terms of Service</h3>
              <Link href="/terms" className="text-slate-400 hover:text-emerald-400">
                View Terms
              </Link>
            </div>
          </div>
          <div className="text-center text-slate-400 pt-8 border-t border-slate-800">
            <p>&copy;2024 PhotoMastery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
