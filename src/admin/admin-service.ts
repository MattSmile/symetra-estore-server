import { MockData, PostResponse } from '../types/types';

const AdminService = {
  // Generally these methods will interact with a DB of some kind.
  // The implementation is basic here since we do not need a
  // persistent data layer or any sort of authentication

  // Get Admin details
  getAdminDetails: async (dataSrc: MockData) => {
    const adminDetails = {
      couponCode: dataSrc.couponCode,
      couponInterval: dataSrc.couponInterval
    };
    return adminDetails;
  },

  // Update coupon code
  updateCouponCode: async (dataSrc: MockData, couponCode: string) => {
    dataSrc.couponCode = couponCode;
    const response: PostResponse = {
      status: 'Success',
      value: couponCode
    };

    return response;
  },

  // Update coupon interval
  updateCouponInterval: async (dataSrc: MockData, couponInterval: number) => {
    dataSrc.couponInterval = couponInterval;
    console.log("Poop" + dataSrc.couponInterval);
    const response: PostResponse = {
      status: 'Success',
      value: couponInterval
    };

    return response;
  }
}

export default AdminService;
