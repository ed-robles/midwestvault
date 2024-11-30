import Image from "next/image";
export default function Footer() {
  return (
    <div className="bg-black w-full text-white">
      <div className="mx-auto p-3 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center m-2 text-md font-medium sm:mb-0">
            <li>
              <a href="/about" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white p-2 text-xs text-black text-center">
        <span className="text-[#4FBBFF] font-bold text-center">
          <Image
            src="/RCC_Circle_Blue.png"
            className="ml-1 inline"
            width={50}
            height={50}
            alt="logo"
          />
        </span>
      </div>
    </div>
  );
}
