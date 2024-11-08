import ProductsView from "@/components/ProductView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export const dynamic = "force-static";
export const revalidate = 60; // revalidare every 60 seconds

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  console.log(
    crypto.randomUUID().slice(0, 5) +
      `>>> rerendered the home page cache with ${products.length} products and ${categories.length} categories`
  );

  return (
    <div>
      <div className="w-full mt-2 font-bold  text-gray-900 text-sm p-8 md:px-64 text-center">
        <p>
          DISCOVER A CURATED SELECTION OF QUALITY CLOTHING AND ACCESSORIES WITH
          MIDWEST<span className="italic font-serif font-medium tracking-widest">VAULT.</span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-top min-h-screen bg-white p-4">
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
}
