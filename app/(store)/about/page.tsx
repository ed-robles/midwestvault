import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div>
      <div className="w-full text-center">
        <p className="text-lg my-10 p-12 sm:px-36 bg-black text-white font-light">
          Welcome to{" "}
          <span className="font-semibold font-sans">MIDWEST VAULT</span>
          {", "}
          where quality meets exclusivity. Based in the heart of Wisconsin, we
          are a curated, streetwear-inspired shop bringing you a selection of
          clothing and accessories designed for those who value craftsmanship,
          style, and individuality.
        </p>
      </div>
      <div className="w-full flex grow text-center">
        <p className="text-lg my-12 p-12 sm:px-36 bg-white font-light">
          Our collections are handpicked and available in limited quantities,
          ensuring that each piece is as unique as the people who wear it.
        </p>
      </div>
      <div className="text-white text-center  bg-black w-full flex flex-col items-center justify-center">
        <p className="text-lg my-12 p-12 sm:px-36 font-light">
          We are committed to providing a shopping experience that is as
          exclusive as our products. We invite you to explore our selection and
          discover the perfect piece to add to your wardrobe.
        </p>
      </div>
      <Footer />
    </div>
  );
}
