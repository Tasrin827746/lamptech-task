'use client'

import Image from "next/image"

export default function Brands() {
  return (
    <section id="brand" className="bg-[#F3EED9] px-4 py-20 lg:py-[80px]">
  <div className="max-w-[1440px] mx-auto h-auto lg:h-[620px]">
      <div className="flex justify-between items-start mb-12">
  <div className="flex items-center gap-4">
    <img src="/brand.png" alt="Brand" />
    <h2 className="text-[46px] lg:text-4xl font-normal text-[#002233]">Our Brands</h2>
  </div>

  {/* Icon Group */}
  <div className="flex items-center">
    <Image src="/brand1.png" alt="Icon 1" width={32} height={32} />
    <Image src="/brand2.png" alt="Icon 2" width={32} height={32} />
    <Image src="/brand3.png" alt="Icon 3" width={32} height={32} />
  </div>
</div>

        <div className="relative overflow-hidden"
        style={{
            width: "1257px",
            height: "661px",
            marginLeft: "130px", 
          }}>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pr-0 lg:pr-[10px]">
          
          {/* --- Card 1 --- */}
          <div className="group bg-transparent translate-x-6 rounded-[40px] border border-gray-500 mt-10 px-8 py-10 flex flex-col justify-between transform -rotate-[-3deg] transition duration-300 hover:bg-[#FDBD10]">
            <div>
              {/* Icon */}
              <div className="bg-[#FDBD10] group-hover:bg-[#F3EED9] w-16 h-16 rounded-full flex items-center justify-center mb-6 transition duration-300">
                <Image src="/shirt.png" alt="Shirt Icon" width={30} height={30} />
              </div>

              <h3 className="text-xl font-semibold text-[#002233] mb-2">Shirts</h3>
              <p className="text-sm text-[#002233]">
                Comfort is key – and ONLY shirts deliver. Made from soft cotton, breathable viscose, and sustainable blends, they’re lightweight, gentle on the skin, and ideal for all-day wear.
              </p>
            </div>

            {/* Button */}
            <button className="mt-6 border-[1.5px] border-[#002233] text-[#002233] px-6 py-2 rounded-full w-fit transition duration-300 group-hover:bg-[#062D3E] group-hover:text-[#EBE3CC] hover:bg-[#ED5C01] hover:text-white"> Explore
             </button>
          </div>

          {/* --- Card 2 --- */}
          <div className="group bg-transparent translate-x-14 border border-gray-500 rounded-[40px] px-8 py-10 flex flex-col justify-between transform rotate-[-3deg] transition duration-300 hover:bg-[#FDBD10]">
            <div>
              <div className="bg-[#FDBD10] group-hover:bg-[#F3EED9] w-16 h-16 rounded-full flex items-center justify-center mb-6 transition duration-300">
                <Image src="/pant.png" alt="Pant Icon" width={30} height={30} />
              </div>
              <h3 className="text-xl font-semibold text-[#002233] mb-2">Pant</h3>
              <p className="text-sm text-[#002233] mt-4">
                Our pants are designed to hug in the right places and give you a silhouette that flatters.
              </p>
            </div>
            <button className="mt-6 border-[1.5px] border-[#002233] text-[#002233] px-6 py-2 rounded-full w-fit transition duration-300 group-hover:bg-[#062D3E] group-hover:text-[#EBE3CC] hover:bg-[#ED5C01] hover:text-white"> Explore
             </button>
          </div>

          {/* --- Card 3 --- */}
          <div className="group bg-transparent border border-gray-500 mt-10 rounded-[40px] px-8 py-10 flex flex-col justify-between transform -rotate-[-3deg] transition duration-300 hover:bg-[#FDBD10] lg:translate-x-24">
            <div>
              <div className="bg-[#FDBD10] group-hover:bg-[#F3EED9] w-16 h-16 rounded-full flex items-center justify-center mb-6 transition duration-300">
                <Image src="/kamiz.png" alt="Dress Icon" width={30} height={30} />
              </div>
              <h3 className="text-xl font-semibold text-[#002233] mb-2">Dress</h3>
              <p className="text-sm text-[#002233]">
                Comfort is key – and ONLY shirts deliver. Made from soft cotton, breathable viscose, and sustainable blends, they’re lightweight, gentle on the skin, and ideal for all-day wear.
              </p>
            </div>
            <button className="mt-6 border-[1.5px] border-[#002233] text-[#002233] px-6 py-2 rounded-full w-fit transition duration-300 group-hover:bg-[#062D3E] group-hover:text-[#EBE3CC] hover:bg-[#ED5C01] hover:text-white"> Explore
             </button>

          </div>

        </div>
        </div>
      </div>
    </section>
  )
}
