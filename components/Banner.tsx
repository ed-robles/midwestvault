import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";

async function Banner() {
  const sale = await getActiveSaleByCouponCode(COUPON_CODES.BFRIDAY);

  if (!sale?.isActive) {
    return null;
  }

  return (
    <div className="bg-gray-100 text-xs font-bold text-black py-2 mt-2">
      <div>
        <p className="text-center">
          {sale.title} - {sale.description}
        </p>
        <p className="text-center">
          Use Code: {sale.couponCode} for {sale.discountAmount}% OFF 🏷️
        </p>
      </div>
    </div>
  );
}

export default Banner;
