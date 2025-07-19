"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, BarChart3, BookOpen, Users, DollarSign } from "lucide-react"

export default function AdminPage() {
  const [ebooks, setEbooks] = useState([
    {
      id: 1,
      title: "Mastering Landscape Photography",
      category: "Landscape",
      price: "$29.99",
      sales: 156,
      status: "Active",
    },
    {
      id: 2,
      title: "Portrait Photography Essentials",
      category: "Portrait",
      price: "$34.99",
      sales: 203,
      status: "Active",
    },
    { id: 3, title: "Urban Photography Secrets", category: "Urban", price: "$27.99", sales: 89, status: "Active" },
  ])

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newEbook, setNewEbook] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    file: null,
  })

  const handleAddEbook = () => {
    if (newEbook.title && newEbook.price) {
      const id = Math.max(...ebooks.map((e) => e.id)) + 1
      setEbooks([
        ...ebooks,
        {
          id,
          title: newEbook.title,
          category: newEbook.category,
          price: newEbook.price,
          sales: 0,
          status: "Active",
        },
      ])
      setNewEbook({ title: "", description: "", category: "", price: "", file: null })
      setIsAddDialogOpen(false)
    }
  }

  const handleDeleteEbook = (id: number) => {
    setEbooks(ebooks.filter((e) => e.id !== id))
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-emerald-500 hover:bg-emerald-600">
                <Plus className="h-4 w-4 mr-2" />
                Add New E-book
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-800 border-slate-700 text-white">
              <DialogHeader>
                <DialogTitle>Add New E-book</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={newEbook.title}
                    onChange={(e) => setNewEbook({ ...newEbook, title: e.target.value })}
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newEbook.description}
                    onChange={(e) => setNewEbook({ ...newEbook, description: e.target.value })}
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(value) => setNewEbook({ ...newEbook, category: value })}>
                    <SelectTrigger className="bg-slate-700 border-slate-600">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      <SelectItem value="landscape">Landscape</SelectItem>
                      <SelectItem value="portrait">Portrait</SelectItem>
                      <SelectItem value="wildlife">Wildlife</SelectItem>
                      <SelectItem value="urban">Urban</SelectItem>
                      <SelectItem value="night">Night</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    value={newEbook.price}
                    onChange={(e) => setNewEbook({ ...newEbook, price: e.target.value })}
                    placeholder="$29.99"
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
                <div>
                  <Label htmlFor="file">E-book File</Label>
                  <Input id="file" type="file" accept=".pdf,.epub" className="bg-slate-700 border-slate-600" />
                </div>
                <Button onClick={handleAddEbook} className="w-full bg-emerald-500 hover:bg-emerald-600">
                  Add E-book
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Total E-books</p>
                  <p className="text-2xl font-bold text-white">24</p>
                </div>
                <BookOpen className="h-8 w-8 text-emerald-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Total Sales</p>
                  <p className="text-2xl font-bold text-white">1,248</p>
                </div>
                <BarChart3 className="h-8 w-8 text-emerald-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Revenue</p>
                  <p className="text-2xl font-bold text-white">$38,420</p>
                </div>
                <DollarSign className="h-8 w-8 text-emerald-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Active Users</p>
                  <p className="text-2xl font-bold text-white">892</p>
                </div>
                <Users className="h-8 w-8 text-emerald-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* E-books Management Table */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Manage E-books</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700">
                  <TableHead className="text-slate-300">Title</TableHead>
                  <TableHead className="text-slate-300">Category</TableHead>
                  <TableHead className="text-slate-300">Price</TableHead>
                  <TableHead className="text-slate-300">Sales</TableHead>
                  <TableHead className="text-slate-300">Status</TableHead>
                  <TableHead className="text-slate-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ebooks.map((ebook) => (
                  <TableRow key={ebook.id} className="border-slate-700">
                    <TableCell className="text-white">{ebook.title}</TableCell>
                    <TableCell className="text-slate-300">{ebook.category}</TableCell>
                    <TableCell className="text-slate-300">{ebook.price}</TableCell>
                    <TableCell className="text-slate-300">{ebook.sales}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs">
                        {ebook.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteEbook(ebook.id)}
                          className="border-red-600 text-red-400 hover:bg-red-600/20"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
