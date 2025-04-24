'use client';

import Image from "next/image"

const Explore = () => {
  return (
    <section className="relative w-full bg-[#189CAB] px-8 py-10 flex flex-col md:flex-row items-center justify-between overflow-hidden min-h-[761px]">
      {/* Left Image */}
      <div className="flex w-full md:w-1/2 justify-center items-center relative">
  <div className="absolute left-1 top-[300px]">
    <img
      src="/exploreleft.png"
      alt="Explore Left"
      className="w-[186px] h-[57px]"
    />
  </div>

  <div className="mt-[100px] ml-[165px] z-10" style={{ width: '542px', height: '560px' }}>
    <img
      src="/explore.png"
      alt="Model in striped outfit"
      className="object-cover rounded-[80px]"
    />
  </div>
</div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 z-10">
        <h2 className="text-[#EBE3CC] text-[46px] font-semibold leading-snug mb-4 w-[543px] h-[120px] top-[111px] left-[769px]">
          Perfect Fit, Everyday Comfort, Timeless Style
        </h2>
        <p className="text-lg mb-6 text-[#EBE3CC] leading-relaxed w-[513px] h-[136px] top-[256px] left-[773px]">
          Could this be the dog with the longest tail? The Rampur Greyhound - shy, sensitive, alert, and faithful. This is a breed that has climbed its way to being top dog because of its intelligence.
        </p>
        <ul className="space-y-3 text-lg text-[#EBE3CC] w-[207px] h-[117px] top-[417px] left-[801px]">
          <li className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full border-2 border-black"></span> Premium Fabric
          </li>
          <li className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full border-2 border-black"></span> Tailored Fit
          </li>
          <li className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full border-2 border-black"></span> Ethically Made
          </li>
        </ul>
        <button className="mt-6 bg-[#062D3E] text-[#EBE3CC] px-8 py-3 rounded-full w-[143px] h-[62px] top-[572px] left-[765px] text-[20px] font-medium hover:bg-[#ED5C01] transition pt-3 pb-3 pr-8 pl-8 gap-[10px]">
          Explore
        </button>
      </div>

      {/* Right Decorative Stroke */}
      <div className="">
      <img
        src="/arrow.png"
        alt="Decorative Stroke"
        className="w-[40px] h-[40px] top-[778px] border p-1 bg-white mr-10 rounded-full gap-[10px]"
      />
      </div>

      {/* Bottom Right Icons */}
<div className="absolute bottom-4 right-4 flex">
  <Image src="/ex3.png" alt="Icon 1" width={32} height={32} />
      <Image src="/ex2.png" alt="Icon 2" width={32} height={32} />
      <Image src="/ex1.png" alt="Icon 3" width={32} height={32} />
</div>

    </section>
  );
};

export default Explore;
