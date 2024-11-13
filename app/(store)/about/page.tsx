export default function AboutPage() {
  return (
    <>
      <div className="w-full text-center">
        <p className="text-lg my-12 p-12 bg-gray-900 text-white font-light">
          Welcome to <span className="font-semibold font-sans">MIDWEST</span>
          <span className="italic font-serif font-medium tracking-widest">
            Vault
          </span>
          {", "}
          where quality meets exclusivity. Based in the heart of Wisconsin, we
          are a curated, streetwear-inspired shop bringing you a selection of
          clothing and accessories designed for those who value craftsmanship,
          style, and individuality.
        </p>
      </div>
      <div className="w-full text-center">
        <p className="text-lg my-12 p-12 text-gray-900 font-light">
          Our collections are handpicked and available in limited quantities,
          ensuring that each piece is as unique as the people who wear it.
        </p>
      </div>
    </>
  );
}
