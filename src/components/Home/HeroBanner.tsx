'use client'

import Image from "next/image"
import Link from "next/link"

export default function HeroBanner() {
  return (
    <section className="relative bg-[#EBE3CC] overflow-hidden w-full min-h-screen lg:min-h-[805px] px-4 lg:px-0 pb-20">

      <div
        className="hidden lg:block absolute z-0"
        style={{
          width: "497px",
          height: "805px",
          left: "1043px",
          top: "0",
          backgroundColor: "#062D3E"
        }}
      />

      {/* <div className="hidden lg:block absolute z-10" style={{
          width: "397px",
          height: "805px",
          left: "850px",
          top: "0" }}>
        <Image
          src="/banner-bg.png" 
          alt="Background Behind Girl"
          width={550}
          height={600}
          className="object-contain max-w-full"
        />
      </div> */}

      {/* Orange Decoration */}
      <Image
        src="/orange.png"
        alt="Orange Dashes"
        width={148}
        height={145}
        className="hidden lg:block absolute z-20"
        style={{
          top: "255.83px",
          left: "801.05px",
          // transform: "rotate(-59.95deg)"
        }}
      />

      {/* Girl Image */}
      <div className="absolute hidden lg:block z-20" style={{ top: "120px", left: "956px" }}>
        <Image
          src="/banner-girl.png"
          alt="Shopping Girl"
          width={496}
          height={630}
          className="object-contain max-w-full"
        />
      </div>

      {/* Main Text Content */}
      <div className="relative z-10 max-w-[788px] lg:absolute" style={{ top: "173px", left: "165px" }}>
        <p className="text-xl text-[#0192ED] font-medium mb-3 flex items-center gap-2">
          <img src="/available.png" alt="" />
          <span>Available in select states</span>
        </p>

        <h1 className="font-bold text-[96px] leading-[92px] tracking-[-0.05em] uppercase text-[#0B0E13] mb-6">
          <span className="block">EVERYTHING</span>
          <span className="text-[#ED5C01]">YOU NEED,</span><span> All</span>
          <span className="block">IN ONE PLACE</span>
        </h1>

        <Link href="/products">
          <button className="w-[172px] h-[70px] px-9 py-2 rounded-full bg-[#ED5C01] text-white text-[20px] leading-[38px] tracking-[0.09em] font-medium hover:bg-[#062D3E] transition font-[Alegreya]">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  )
}
