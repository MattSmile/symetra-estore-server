import { MockData, Purchase, PostResponse } from '../types/types';

const PurchasesService = {

  // Generally these methods will interact with a DB of some kind.
  // The implementation is basic here since we do not need a
  // persistent data layer or any sort of authentication

  // Get all purchases
  getPurchases: async (dataSrc: MockData) => {
    return dataSrc.purchases as Purchase[];
  },

  // Get purchases made with a coupon
  getCouponPurchases: async (dataSrc: MockData) => {
    return dataSrc.purchases.filter(purchase => purchase.couponApplied === true) as Purchase[];
  },

  // Make a purchase
  makePurchase: async (dataSrc: MockData, purchase: Purchase) => {
    // Check if user applied a coupon or not
    let newPurchase = purchase;
    let user = dataSrc.users.find(user => user.id === purchase.userId);
    if (newPurchase.couponApplied) {
      const validCoupon = PurchasesService.validateCoupon(dataSrc, purchase.couponCode)
      if (!validCoupon) {
        newPurchase.couponApplied = false;
        newPurchase.couponCode = null;
      }
      user.hasCoupon = false;
      user.couponCode = null;
    }
    // This would be more robust. We're just pushing it to an array for demo purposes
    dataSrc.purchases.push(newPurchase);

    // Check if user should be granted a coupon
    const grantCoupon = PurchasesService.checkGrantCoupon(dataSrc);
    if (grantCoupon === true) {
      // Apply coupon to user
      user.hasCoupon = true;
      user.couponCode = dataSrc.couponCode;
    }

    const response: PostResponse = {
      status: 'Success',
      value: {
        purchase: newPurchase,
        coupon: grantCoupon
      }
    };
    return response;
  },

  // Check if coupon should be granted
  /* It is unclear if we want the counter to restart to 0
  when the interval is changed, or maintain the comparison
  to total orders */
  checkGrantCoupon: (dataSrc: MockData) => {
    const purchaseCount = dataSrc.purchases.length;
    const interval = dataSrc.couponInterval;
    return (purchaseCount % interval === 0 && purchaseCount >= interval);
  },

  // This would be more robust, but we'll do a simple equality check for demo purposes
  validateCoupon: (dataSrc: MockData, coupon: string | null) => {
    return (coupon === dataSrc.couponCode);
  }
};

export default PurchasesService;
