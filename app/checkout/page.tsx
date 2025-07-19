"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Lock, ShoppingCart } from "lucide-react"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")

  const cartItems = [
    {
      id: 1,
      title: "Mastering Landscape Photography",
      price: 29.99,
      image: "/placeholder.svg?height=100&width=80",
    },
    {
      id: 2,
      title: "Portrait Photography Essentials",
      price: 34.99,
      image: "/placeholder.svg?height=100&width=80",
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <ShoppingCart className="h-8 w-8 mr-3 text-emerald-400" />
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Payment Form */}
          <div className="space-y-8">
            {/* Billing Information */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Billing Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" className="bg-slate-700 border-slate-600 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" className="bg-slate-700 border-slate-600 text-white" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" className="bg-slate-700 border-slate-600 text-white" />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" className="bg-slate-700 border-slate-600 text-white" />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" className="bg-slate-700 border-slate-600 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        <SelectItem value="ca">California</SelectItem>
                        <SelectItem value="ny">New York</SelectItem>
                        <SelectItem value="tx">Texas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" className="bg-slate-700 border-slate-600 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" className="bg-slate-700 border-slate-600 text-white" />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" className="bg-slate-700 border-slate-600 text-white" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" className="bg-slate-700 border-slate-600 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={60}
                      height={80}
                      className="rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-white">{item.title}</h4>
                      <p className="text-slate-400">Digital Download</p>
                    </div>
                    <span className="font-semibold text-emerald-400">${item.price.toFixed(2)}</span>
                  </div>
                ))}

                <Separator className="bg-slate-700" />

                <div className="space-y-2">
                  <div className="flex justify-between text-slate-300">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator className="bg-slate-700" />
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span className="text-emerald-400">${total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 text-lg">
              <Lock className="h-5 w-5 mr-2" />
              Complete Purchase
            </Button>

            <div className="text-center text-slate-400 text-sm">
              <p className="flex items-center justify-center">
                <Lock className="h-4 w-4 mr-1" />
                Your payment information is secure and encrypted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
