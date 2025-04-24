import Brands from "@/components/Home/Brands";
import Explore from "@/components/Home/Explore";
import HeroBanner from "@/components/Home/HeroBanner";
import FullWidthImage from "@/components/Home/Image";
import Products from "@/components/Home/Products";
import Review from "@/components/Home/Review";
import Subscribe from "@/components/Home/Subscribe";
export default function Home() {
  return (
   <>
   <HeroBanner />
   <FullWidthImage />
   <Brands />
   <Products />
   <Explore />
   <Review />
   <Subscribe />
   </>
  );
}
