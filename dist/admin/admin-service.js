"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdminService = {
    // Generally these methods will interact with a DB of some kind.
    // The implementation is basic here since we do not need a
    // persistent data layer or any sort of authentication
    // Get Admin details
    getAdminDetails: (dataSrc) => __awaiter(void 0, void 0, void 0, function* () {
        const adminDetails = {
            couponCode: dataSrc.couponCode,
            couponInterval: dataSrc.couponInterval
        };
        return adminDetails;
    }),
    // Update coupon code
    updateCouponCode: (dataSrc, couponCode) => __awaiter(void 0, void 0, void 0, function* () {
        dataSrc.couponCode = couponCode;
        const response = {
            status: 'Success',
            value: couponCode
        };
        return response;
    }),
    // Update coupon interval
    updateCouponInterval: (dataSrc, couponInterval) => __awaiter(void 0, void 0, void 0, function* () {
        dataSrc.couponInterval = couponInterval;
        console.log("Poop" + dataSrc.couponInterval);
        const response = {
            status: 'Success',
            value: couponInterval
        };
        return response;
    })
};
exports.default = AdminService;
//# sourceMappingURL=admin-service.js.map