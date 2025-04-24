'use client'

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#062D3E] h-[260px] py-10 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="text-[#ED5C01] text-2xl font-semibold">
        Shop-First
      </div>

      <div className="flex flex-col items-end gap-2">
        {/* Nav Links */}
        <div className="flex gap-6 text-white text-sm">
          <a href="#">About</a>
          <a href="#">Project</a>
          <a href="#">Service</a>
          <a href="#">Client</a>
          <a href="#">Team</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-4 mt-2 self-start items-center">
          <span className="text-white text-sm">Flow</span>
          <FaFacebookF className="text-white bg-white/10 rounded-full p-1 w-7 h-7" />
          <FaInstagram className="text-white bg-white/10 rounded-full p-1 w-7 h-7" />
          <FaTwitter className="text-white bg-white/10 rounded-full p-1 w-7 h-7" />
        </div>
      </div>
    </footer>
  )
}
