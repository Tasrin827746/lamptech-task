'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react'

export default function AddProducts() {

  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
  })

  const [showModal, setShowModal] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    try {
      const res = await fetch('https://frontend-test.lamptechs.com/api/v1/user/product/store', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
  
      const data = await res.json()
  
      if (!res.ok) {
        console.error('API Error Response:', data)
        throw new Error(data.message || 'Failed to add product')
      }
  
      setForm({ title: '', price: '', description: '' })
      setShowModal(true)
    } catch (err) {
      const error = err as Error;
      console.error(error);
      alert('Something went wrong: ' + error.message);
    }    
  }
  

  return (
    <div className="flex bg-[#fefaf7] min-h-screen relative">
      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <button  onClick={() => router.push('/product-list')} className="text-orange-600 text-xl cursor-pointer">←</button> Products
        </h1>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-lg font-medium bg-[#062D3E] text-white px-4 py-2 rounded-t-xl mb-4">Add Products</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Products Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Ex: Camera"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Price<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="25,000"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Detail<span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Enter product details here..."
                required
                rows={5}
                className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400 bg-[#edf4fa]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#e55400] text-white px-6 py-2 rounded hover:bg-[#c74900] transition"
            >
              Add
            </button>
          </form>
        </div>
      </main>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg w-80 text-center">
            <div className="bg-[#032D3C] text-white py-4 text-lg font-semibold">Add Employee</div>
            <div className="p-6">
              <p className="text-gray-700">
                Products have been added{' '}
                <span className="text-green-600 font-semibold">Successfully!</span>
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#e55400] text-white mt-6 px-6 py-2 rounded hover:bg-[#c74900] transition"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
