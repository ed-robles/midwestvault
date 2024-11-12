import { Product } from "@/sanity.types";
import { imageUrl } from "@/lib/imageUrl";
import Image from "next/image";
import Link from "next/link";

function ProductThum({ product }: { product: Product }) {
  const isOutofStock = product.stock != null && product.stock <= 0;

  return (
    <Link
      href={`/product/${product.slug?.current}`}
      className={`group flex flex-col bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-200 overflow-hidden ${isOutofStock ? "opacity-50" : ""}`}
    >
      <div className="relative aspect-square w-full h-full overflow-hidden">
        {product.gallery && product.gallery.length > 0 && (
          <Image
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            src={imageUrl(product.gallery[0]).url()} // Assuming you want to display the first image
            alt={product.name || "Product Image"}
            fill
            sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {isOutofStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <span className="text-white">Out of Stock</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h2>

        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {product.description
            ?.map((block) =>
              block._type === "block"
                ? block.children?.map((child) => child.text).join("")
                : ""
            )
            .join("") || "No description available"}
        </p>
        <p className="mt-2 text-lg font-bold text-gray-900">
          ${product.price?.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}

export default ProductThum;
