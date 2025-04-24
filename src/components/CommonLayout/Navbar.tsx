"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Brand", href: "/#brand" },
  { label: "Products", href: "/#products" },
  { label: "Reviews", href: "/#reviews" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="absolute top-7 left-0 w-full z-50 px-4 lg:px-20">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between bg-transparent h-[62px]">
        
        {/* Logo */}
        <div className="font-semibold text-[21px] leading-[38px] tracking-[0.01em] text-[#062D3E]">
          Shop-First
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
  {navLinks.map((link) => {
    const isRealPage = !link.href.includes("#");
    const isActive = isRealPage && pathname === link.href;

    return (
      <Link
        key={link.label}
        href={link.href}
        scroll={true}
        className={clsx(
          "w-[46px] h-[38px] text-[#062D3E] text-[16px] leading-[38px] tracking-[0.01em] opacity-80 font-normal transition-colors",
          isActive ? "text-orange-600" : "hover:text-orange-600"
        )}
      >
        {link.label}
      </Link>
    );
  })}
</div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
        <Link href="/login">
  <button className="text-[18px] leading-[38px] tracking-[0.09em] text-[#ED5C01] font-normal transition hover:text-white">
    Log in
  </button>
</Link>

          <Link href="/sign-up">
  <button
    className="text-[20px] leading-[38px] tracking-[0.09em] text-[#ED5C01] font-normal px-5 py-2 border-2 border-[#ED5C01] rounded-full hover:bg-[#ED5C01] hover:text-white transition"
  >
    Sign up
  </button>
</Link>

        </div>
      </div>
    </nav>
  );
}
