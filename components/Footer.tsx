import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-black w-full text-white ">
      <div className="mx-auto p-1">
        <div className="sm:flex sm:items-center sm:justify-between border-t">
          <ul className="flex flex-wrap items-center m-2 text-sm">
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
              <a
                href="mailto:support@midwestvault.com"
                className="hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white p-2 text-xs text-black text-center">
        <span className="text-[#4FBBFF] text-center animate-spin-slow">
          <Link href="https://roblescreativeco.com">
            {" "}
            <Image
              src="/RCC_Circle_Blue.png"
              className="ml-1 inline animate-spin-slow"
              width={50}
              height={50}
              alt="logo"
            />
          </Link>
        </span>
      </div>
    </div>
  );
}
