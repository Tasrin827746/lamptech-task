'use client'

export default function FullWidthImage() {
  return (
    <section className="bg-[#ED5C01] py-10 px-4 lg:px-20 overflow-hidden">
    <div className="max-w-[1440px] h-[206px] mx-auto flex items-center gap-6 flex-wrap lg:flex-nowrap">
      
      {/* 1. Top Left Icon */}
      <div className="relative w-[144px] h-[144px] flex-shrink-0 -mt-32 -ml-20">
        <img src="/img1.png" alt="Icon" className="object-contain" />
      </div>
  
      <div className="relative w-[231px] h-[200px] flex-shrink-0">
        <img src="/45.png" alt="Icon" className="w-full h-full object-contain" />
      </div>
  
  <div className="flex ml-24">
      {/* Two Images with Opacity */}
  <div className="grid grid-cols-1 gap-4">
  {["jacket.jpg", "sweater.jpg"].map((img, i) => (
    <div
      key={i}
      className="relative w-[90px] h-[90px] rounded-full overflow-hidden"
    >
      <img
        src={`/${img}`}
        alt={`Clothing ${i + 1}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full"></div>
    </div>
  ))}
</div>

 {/* Big Circular Image */}
 <div className="w-[175px] h-[175px] rounded-full overflow-hidden border-[6px] border-white flex-shrink-0">
        <img src="/big.png" alt="Main clothing" className="w-full h-full object-cover" />
      </div>
       {/* Circular Thumbnails */}
       <div className="grid grid-cols-4 gap-4">
  {[
    "t shirt.avif", "t shirt.webp", "jacket.jpg", "sweater.jpg",
    "t shirt.avif", "t shirt.webp", "jacket.jpg", "sweater.jpg",
  ].map((img, i) => (
    <div key={i} className="relative w-[90px] h-[90px] rounded-full overflow-hidden">
      <img src={`/${img}`} alt={`Clothing ${i + 3}`} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full"></div>
    </div>
  ))}
</div>

  </div>
    </div>
  </section>
  
  )
}
