import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";

async function Banner() {
  const sale = await getActiveSaleByCouponCode(COUPON_CODES.BFRIDAY);

  if (!sale?.isActive) {
    return null;
  }

  return (
    <div className="bg-black border-b border-white text-xs text-white  py-2">
      <div>
        <p className="text-center font-bold">
          {sale.title} - {sale.description}
        </p>
        <p className="text-center font-bold">
          Use Code: {sale.couponCode} for {sale.discountAmount}% OFF* 🏷️
        </p>
        <p className="text-center ">
          *Exclusions Apply; One-time use for new customers only.
        </p>
      </div>
    </div>
  );
}

export default Banner;
