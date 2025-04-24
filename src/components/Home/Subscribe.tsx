'use client'

import Image from 'next/image'

export default function SubscribeSection() {
  return (
    <section className="w-full h-[320px] flex">
      {/* Left - Image and yellow background */}
      <div className="bg-[#FBBD08] w-1/2 flex items-center justify-center relative">
        <Image
          src="/subscribe.png"
          alt="Person"
          width={470}
          height={327}
          className="object-contain"
        />
      </div>

      {/* Right - Orange background */}
      <div className="bg-[#ED5C01] w-1/2 text-white px-12 py-10 flex flex-col justify-center relative">
        <h2 className="text-3xl font-semibold text-[#062D3E] leading-tight mb-6">
          Subscribe & Get Fashion <br /> Updatenews
        </h2>

        <div className="flex items-center border-b border-white max-w-md">
          <input
            type="email"
            placeholder="Mail"
            className="bg-transparent outline-none text-white placeholder-white flex-1 py-2"
          />
          <button className="text-white text-xl pl-4">→</button>
        </div>

        {/* Decorative swirl image */}
        {/* <Image
          src="/your-swirl.png"
          alt="Swirl"
          width={120}
          height={120}
          className="absolute bottom-6 right-6"
        /> */}
      </div>
    </section>
  )
}
