'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'

const products = [
  {
    id: 1,
    title: 'Short Sleeve Shirt',
    price: 275,
    oldPrice: 475,
    image: '/t shirt.png',
  },
  {
    id: 2,
    title: 'T900 Smart Watch',
    price: 980,
    oldPrice: 1080,
    image: '/watch.png',
  },
  {
    id: 3,
    title: 'Plaid Patchwork Dress',
    price: 275,
    oldPrice: 475,
    image: '/dress.png',
  },
  {
    id: 4,
    title: 'Short Sleeve Shirt',
    price: 275,
    oldPrice: 475,
    image: '/t shirt.png',
  },
  {
    id: 5,
    title: 'T900 Smart Watch',
    price: 980,
    oldPrice: 1080,
    image: '/watch.png',
  },
  {
    id: 6,
    title: 'Plaid Patchwork Dress',
    price: 275,
    oldPrice: 475,
    image: '/dress.png',
  },
]

export default function BestProducts() {
  return (
    <section
      id='products'
      className="bg-[#FFF8F6] pt-16 pb-24 px-4 lg:px-0"
      style={{ width: '1440px', height: '1220px' }}
    >
      <div className="max-w-[1108px] ml-4 lg:ml-20 mr-[60px]">
        <h2 className="text-3xl font-semibold text-center text-[#1C1C1C] mb-12">Our Best Products</h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-10 mx-auto"
          style={{ width: '1108px', height: '946px' }}
        >

{products.map(product => (
  <Link href={`/products/${product.id}`} key={product.id} className="cursor-pointer">
    <div
      className="bg-white rounded-[10px] p-4 shadow-md relative flex flex-col justify-between"
      style={{ width: '350px', height: '422px' }}
    >
      <button className="absolute top-6 right-6 text-pink-400 hover:text-red-500 text-sm">
        <FaHeart />
      </button>

      <div className="flex justify-center mb-4">
        <Image
          className='bg-[#FAE4CA99] w-[318px] h-[185px] rounded-lg p-[10px] gap-[10px]'
          src={product.image}
          alt={product.title}
          width={120}
          height={120}
        />
      </div>

      <div className='w-[318px] h-[131px] gap-2'>
        <h3 className="text-[28px] font-medium text-[#1C1C1C] h-[42px] font-dm-sans">{product.title}</h3>

        <div className="flex items-center text-sm mt-1 text-yellow-500 h-[32px] gap-[5px]">
          {Array(5).fill(0).map((_, i) => <FaStar key={i} />)}
          <span className="text-gray-500">(2k Reviews)</span>
        </div>

        <div className="mt-2 h-[45px] gap-[10px]">
          <span className="text-[#1C1C1C] font-bold text-lg">৳ {product.price}</span>
          <span className="text-gray-400 line-through ml-2 text-sm">৳ {product.oldPrice}</span>
        </div>
      </div>

      <button className="mt-4 w-[318px] h-[50px] p-[10px] text-lg font-medium gap-[10px] border border-[#1C1C1C] text-[#1C1C1C] py-2 rounded-lg hover:bg-[#ED5C01] hover:text-white transition duration-300">
        Add To Cart
      </button>
    </div>
  </Link>
))}

        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-[#003344] text-white w-[248px] h-[58px] px-6 py-3 rounded-lg p-[10px] gap-[10px] hover:bg-[#002233] transition font-medium text-2xl">
            Load More
          </button>
        </div>
      </div>
    </section>
  )
}
