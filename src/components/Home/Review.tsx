'use client'

import { useState } from 'react'
import Image from 'next/image'

const reviews = [
  {
    image: '/review1.png',
    text: `I’m genuinely impressed with these pants! I ordered them kind of last minute for a work event, and honestly, I wasn’t expecting much — but they completely exceeded my expectations. The fit is perfect — the waist and hips but not too tight.`,
  },
  {
    image: '/review2.jpg',
    text: `These are my new favorite pants! So comfortable and stylish. I’ve gotten compliments every time I wear them.`,
  },
  {
    image: '/review3.webp',
    text: `Amazing quality and super fast delivery. I was worried about the size, but it fits like a glove. Definitely ordering again!`,
  },
  {
    image: '/review4.webp',
    text: `Amazing quality and super fast delivery. I was worried about the size, but it fits like a glove. Definitely ordering again!`,
  },
]

export default function Reviews() {
  const [current, setCurrent] = useState(0)

  const prevReview = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const nextReview = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id='reviews' className="relative flex flex-col gap-14 md:flex-row items-center justify-center py-12 px-6 w-[1440px] h-[661px] bg-[#EBE3CC]">
      {/* Top-Right Decorative Images */}
{/* Top Right Images */}
<div className="absolute top-6 left-0 w-full z-30">
  <div className="relative w-full">
    <Image
      src="/reviewstar.png"
      alt="Top Right 1"
      width={63}
      height={65}
      className="absolute top-[79px] left-[1046px] w-[63px] h-[65px]"
    />
    <Image
      src="/reviewline.png"
      alt="Top Right 2"
      width={330}
      height={362}
      className="absolute top-[0px] left-[1075px] w-[229px] h-[262px] transform rotate-[-42]"
    />
  </div>
</div>


      {/* Left: Image */}
      <div className="relative w-[370px] h-[420px] flex items-center justify-center border border-black rounded-xl">
      <div className="relative w-[370px] h-[420px] overflow-visible">
  {/* Main Review Image */}
  <Image
    src={reviews[current].image}
    alt="Customer"
    fill
    className="object-cover rounded-xl"
  />

  {/* Pagination*/}
  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
    {reviews.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrent(index)}
        className={`w-3 h-3 rounded-full ${
          current === index ? 'bg-[#062D3E]' : 'bg-white'
        } transition-all duration-300`}
      />
    ))}
  </div>

  {/* */}
  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
    <Image
      src="/review.png"
      alt="Above Review"
      width={244}
      height={54}
    />
  </div>
</div>


        {/* Circle + Quote */}
        <div className="absolute -top-10 -right-16 w-[130px] h-[130px]">
          <Image
            src="/circle.png"
            alt="Quote background"
            width={130}
            height={130}
            className="absolute top-0 left-0"
          />
          <Image
            src="/quote.png"
            alt="Quote icon"
            width={80}
            height={53}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      {/* Right: Review Text + Arrows */}
      <div className="mt-12 md:mt-0 md:ml-12 flex flex-col items-start">
        <h1 className="w-[413px] h-[60px] font-semibold text-3xl text-[#062D3E] mb-4">
          Customer Reviews
        </h1>

        <div className="bg-[url('/reviewbg.png')] p-6 w-[413px] h-[238px] rounded-3xl shadow-lg">
          <p className="text-base text-[#062D3E]">{reviews[current].text}</p>
        </div>

        <div className="flex justify-start gap-2 mt-6 w-[215px] h-[46px]">
          <button
            onClick={prevReview}
            className="w-10 h-10 bg-[#062D3E] text-white rounded-full flex items-center justify-center"
          >
            &larr;
          </button>
          <button
            onClick={nextReview}
            className="w-10 h-10 bg-[#062D3E] text-white rounded-full flex items-center justify-center"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  )
}
