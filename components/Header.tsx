"use client";

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import useBasketStore from "@/store/store";
import Image from "next/image";

function Header() {
  const { user } = useUser();
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  // const createClerkPasskey = async () => {
  //   try {
  //     const response = await user?.createPasskey();
  //     console.log(response);
  //   } catch (err) {
  //     console.error("Error:", JSON.stringify(err, null, 2));
  //   }
  // };

  return (
    <header className="flex flex-wrap justify-between items-center px-2 bg-black">
      {/* top row */}
      <div className="flex w-full flex-wrap justify-between items-center my-2">
        <Link
          href="/"
          className="text-3xl font-bold text-gray-800 hover:opacity-90 cursor-pointer mx-auto sm:mx-0"
        >
          <Image
            src="/MIDWEST-VAULT-White-New.png"
            alt="MIDWEST Vault"
            width={320}
            height={100}
            className="my-4"
          />
        </Link>

        <Form
          action="/search"
          className="w-full sm:auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Search for products"
            className="bg-white text-gray-800 px-4 py-2 focus:outline-none focus:ring-black focus:ring-opacity-50 border w-full max-w-4xl"
          />
        </Form>

        <div className="flex items-center space-x-4 mt-3 sm:mt-0 md:mt-0 lg:mt-0 flex-1 lg:flex-none">
          <Link
            href="/basket"
            className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-black border text-white font-bold py-2 px-4"
          >
            <TrolleyIcon className="w-6 h-6" />
            {/* span item count once global state is implemented */}
            <span className="absolute -top-2 -right-2 bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {itemCount}
            </span>
            <span>Cart</span>
          </Link>

          {/* user area */}
          <ClerkLoaded>
            {user && (
              <Link
                href="/orders"
                className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-black border text-white font-bold py-2 px-4"
              >
                <PackageIcon className="w-6 h-6" />
                <span>Orders</span>
              </Link>
            )}

            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton
                  appearance={{
                    elements: { userButtonAvatarBox: "w-10 h-10" },
                  }}
                />

                <div className="hidden sm:block sm:text-xl">
                  <p className="text-white">Welcome Back</p>
                  <p className="text-white font-bold">{user.fullName}!</p>
                </div>
              </div>
            ) : (
              <span className="text-white">
                <SignInButton mode="modal" />
              </span>
            )}

            {/*             {user?.passkeys.length === 0 && (
              <button
                onClick={createClerkPasskey}
                className="bg-white hover:bg-gray-700 hover:text-white animate-pulse text-gray-500 font-bold py-2 px-4 rounded border-gray-300 border"
              >
                Create Passkey
              </button>
            )} */}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}

export default Header;
