import ProductsView from "@/components/ProductView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { ChevronDown } from "lucide-react";

export const dynamic = "force-static";
export const revalidate = 60; // revalidate every 60 seconds

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  console.log(
    crypto.randomUUID().slice(0, 5) +
      `>>> rerendered the home page cache with ${products.length} products and ${categories.length} categories`
  );

  return (
    <div className="flex flex-col min-h-screen font-mon">
      <div className="w-full font-bold text-gray-900 text-sm p-8 md:px-64 text-center">
        <p>DISCOVER A CURATED SELECTION OF QUALITY CLOTHING AND ACCESSORIES.</p>
        <ChevronDown className="animate-bounce w-6 h-6 mx-auto mt-6 -mb-4" />
      </div>
      <div className="grow items-center justify-top p-4">
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
}
