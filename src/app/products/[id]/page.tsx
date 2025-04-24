'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'

interface Product {
  id: number
  title: string
  price: number
  image: string
  description: string
  sizeFit: string
  materialCare: string
}

const productList: Product[] = [
  {
    id: 1,
    title: 'Short Sleeve Shirt',
    price: 275,
    image: '/t shirt.png',
    description: 'Blue washed jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem',
    sizeFit: 'The model (height 5\'8") is wearing a size S',
    materialCare: '100% cotton Machine Wash',
  },
  {
    id: 2,
    title: 'T900 Smart Watch',
    price: 980,
    image: '/watch.png',
    description: 'Smart watch with fitness tracking and Bluetooth support',
    sizeFit: 'Adjustable strap fits most wrists',
    materialCare: 'Wipe clean with dry cloth',
  },
  {
    id: 3,
    title: 'Plaid Patchwork Dress',
    price: 275,
    image: '/dress.png',
    description: 'Blue washed jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem',
    sizeFit: 'The model (height 5\'8") is wearing a size S',
    materialCare: '100% cotton Machine Wash',
  },
  {
    id: 4,
    title: 'T900 Smart Watch',
    price: 980,
    image: '/watch.png',
    description: 'Smart watch with fitness tracking and Bluetooth support',
    sizeFit: 'Adjustable strap fits most wrists',
    materialCare: 'Wipe clean with dry cloth',
  },
  {
    id: 5,
    title: 'Short Sleeve Shirt',
    price: 275,
    image: '/t shirt.png',
    description: 'Blue washed jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem',
    sizeFit: 'The model (height 5\'8") is wearing a size S',
    materialCare: '100% cotton Machine Wash',
  },
  {
    id: 6,
    title: 'Plaid Patchwork Dress',
    price: 275,
    image: '/dress.png',
    description: 'Smart watch with fitness tracking and Bluetooth support',
    sizeFit: 'Adjustable strap fits most wrists',
    materialCare: 'Wipe clean with dry cloth',
  },
]

export default function ProductPage() {
  const params = useParams()
  const id = Number(params?.id)
  const product = productList.find(p => p.id === id)

  if (!product) return <div className="p-10 text-red-500">Product not found</div>

  return (
    <div className="bg-[#EFE3CE] pt-[120px] px-10">
      {/* Top section: image + title/price/button */}
      <div className='h-[892px] w-[1109px] top-[140px] left-[165px]'>
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Image */}
        <div className="flex-1 bg-white p-4 rounded-lg">
          <Image
            src={product.image}
            alt={product.title}
            width={630}
            height={450}
            className="w-[630px] h-450px] object-contain rounded-lg"
          />
        </div>

        {/* Title + Price + Button */}
        <div className="flex-1 flex flex-col gap-6 justify-center mt-16">
          <h1 className="text-3xl font-bold text-[#272727] top-[120x] left-[665px]">{product.title}</h1>
          <p className="text-4xl font-semibold text-[#272727]">BDT {product.price}</p>
          <button className="w-[184px] h-[70px] bg-[#ED5C01] mt-6 font-medium text-xl text-[#FCEFE2] py-2 px-6 rounded-full hover:bg-[#272727] transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Bottom details section */}
      <div className="mt-10 space-y-6 text-[#1C1C1C]">
        <h1 className='text-center text-[#002482]'>Product Details</h1>
        <div className='border border-[#002482] w-1/4 flex items-center justify-center mx-auto'></div>
        <div>
          <h2 className="font-bold text-lg mb-1">Product Details</h2>
          <p>{product.description}</p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-1">Size & Fit</h2>
          <p>{product.sizeFit}</p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-1">Material & Care</h2>
          <p>{product.materialCare}</p>
        </div>
      </div>
      </div>
    </div>
  )
}
