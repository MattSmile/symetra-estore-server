import { Router, json } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { Purchase } from '../types/types';
import mockData from '../mock-data/mock-data';
// Services
import PurchasesService from './purchases-service';

const jsonBodyParser = json();
const purchasesRouter = Router();

purchasesRouter
  // Get all purchases
  .route('/')
  .get((req, res, next) => {
    PurchasesService.getPurchases(mockData)
      .then(response => res.json(response))
      .catch(next)
  })
  .post(jsonBodyParser, (req, res, next) => {

    const {
      productId,
      userId,
      couponApplied,
      couponCode
    } = req.body;

    const newPurchase: Purchase = {
      id: uuidv4(),
      datePurchased: new Date(),
      productId: productId,
      userId: userId,
      couponApplied: couponApplied,
      couponCode: couponApplied
        ? couponCode
        : null
    };

    PurchasesService.makePurchase(mockData, newPurchase)
      .then(response => res.json(response))
      .catch(e => console.log(e));
  });

purchasesRouter
  // Get coupon purchases
  .route('/coupon')
  .get((req, res, next) => {
    PurchasesService.getCouponPurchases(mockData)
      .then(response => res.json(response))
      .catch(next);
  });

export default purchasesRouter;
