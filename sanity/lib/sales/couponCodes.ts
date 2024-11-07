export const COUPON_CODES = {
  BFRIDAY: "BFRIDAY",
  NY2022: "NY2022",
  XMAS2021: "XMAS2021",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
