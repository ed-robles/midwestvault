import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div className="w-full text-center">
        <p className="text-lg my-12 p-12 bg-black text-white font-light">
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
        <p className="text-lg my-12 p-12 text-gray-900 font-light">
          Our collections are handpicked and available in limited quantities,
          ensuring that each piece is as unique as the people who wear it.
        </p>
      </div>
      <hr />
      <div className="bg-white p-2 text-xs text-black text-center">
        <span className="text-[#4FBBFF] text-center animate-spin-slow">
          <Image
            src="/RCC_Circle_Blue.png"
            className="ml-1 inline animate-spin-slow"
            width={50}
            height={50}
            alt="logo"
          />
        </span>
      </div>
    </>
  );
}
