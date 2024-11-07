"use client";

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import useBasketStore from "@/store/store";
import { Handshake } from "lucide-react";

function Header() {
  const { user } = useUser();
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  const createClerkPasskey = async () => {
    try {
      const response = await user?.createPasskey();
      console.log(response);
    } catch (err) {
      console.error("Error:", JSON.stringify(err, null, 2));
    }
  };

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      {/* top row */}
      <div className="flex w-full flex-wrap justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold text-gray-800 hover:opacity-90 cursor-pointer mx-auto sm:mx-0"
        >
          <span className="font-extrabold font-sans tracking-tight text-gray-800">
            MIDWEST
          </span>
          <span className="italic font-serif font-medium tracking-widest text-gray-800">
            Vault
            <Handshake className="inline-block ml-1 mb-1 w-8 h-8 text-gray-800" />
          </span>
        </Link>

        <Form
          action="/search"
          className="w-full sm:auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Search for products"
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline focus:ring-2 focus:ring-black focus:ring-opacity-50 border w-full max-w-4xl"
          />
        </Form>

        <div className="flex items-center space-x-4 mt-3 sm:mt-0 md:mt-0 lg:mt-0 flex-1 lg:flex-none">
          <Link
            href="/basket"
            className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            <TrolleyIcon className="w-6 h-6" />
            {/* span item count once global state is implemented */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {itemCount}
            </span>
            <span>My Basket</span>
          </Link>

          {/* user area */}
          <ClerkLoaded>
            {user && (
              <Link
                href="/orders"
                className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                <PackageIcon className="w-6 h-6" />
                <span>My Orders</span>
              </Link>
            )}

            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />

                <div className="hidden: sm:block text-xs`">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold">{user.fullName}!</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}

            {user?.passkeys.length === 0 && (
              <button
                onClick={createClerkPasskey}
                className="bg-white hover:bg-gray-700 hover:text-white animate-pulse text-gray-500 font-bold py-2 px-4 rounded border-gray-300 border"
              >
                Create Passkey
              </button>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}

export default Header;
