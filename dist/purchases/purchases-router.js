"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uuid_1 = require("uuid");
const mock_data_1 = __importDefault(require("../mock-data/mock-data"));
// Services
const purchases_service_1 = __importDefault(require("./purchases-service"));
const jsonBodyParser = express_1.json();
const purchasesRouter = express_1.Router();
purchasesRouter
    // Get all purchases
    .route('/')
    .get((req, res, next) => {
    purchases_service_1.default.getPurchases(mock_data_1.default)
        .then(response => res.json(response))
        .catch(next);
})
    .post(jsonBodyParser, (req, res, next) => {
    const { productId, userId, couponApplied, couponCode } = req.body;
    const newPurchase = {
        id: uuid_1.v4(),
        datePurchased: new Date(),
        productId: productId,
        userId: userId,
        couponApplied: couponApplied,
        couponCode: couponApplied
            ? couponCode
            : null
    };
    purchases_service_1.default.makePurchase(mock_data_1.default, newPurchase)
        .then(response => res.json(response))
        .catch(e => console.log(e));
});
purchasesRouter
    // Get coupon purchases
    .route('/coupon')
    .get((req, res, next) => {
    purchases_service_1.default.getCouponPurchases(mock_data_1.default)
        .then(response => res.json(response))
        .catch(next);
});
exports.default = purchasesRouter;
//# sourceMappingURL=purchases-router.js.map