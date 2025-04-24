'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function SignIn() {
  const router = useRouter()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('https://frontend-test.lamptechs.com/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.message || 'Login failed')

      // Save token to localStorage
      localStorage.setItem('token', data.token)

      alert('Login successful!')
      router.push('/add-products') 
    } catch (err) {
      const error = err as Error
      alert('Login failed: ' + error.message)
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen bg-[#EBE3CC] flex items-center justify-center px-4">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-10">
        {/* Form Section */}
        <div className="w-[635px] h-[708px] top-[167px] left-[165px] max-w-md mx-auto">
          <h1 className="text-3xl font-semibold text-[#2B2B2B] text-center mb-8">Log In</h1>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[#2B2B2B] mb-1 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Ex: Johndoe@gmail.com"
                required
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#2B2B2B] mb-1 font-medium">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="************"
                required
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#ED5C01] text-[#EAF1F6] text-xl py-3 rounded-lg font-semibold transition-all ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#e2581d]'
              }`}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </form>

          <p className="text-center mt-4 text-sm text-gray-500">
            Don&apos;t have any account?{' '}
            <a href="/sign-up" className="text-[#ED5C01] font-medium">
              Sign Up
            </a>
          </p>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <Image
            src="/banner-girl.png"
            alt="Signup Illustration"
            width={496}
            height={856}
            className="object-contain w-[496px] h-[856px] top-[167px] left-[896px]"
          />
        </div>
      </div>
    </section>
  )
}
