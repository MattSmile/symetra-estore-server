import { Router, json } from 'express';

import mockData from '../mock-data/mock-data';
// Services
import AdminService from './admin-service';

const adminRouter = Router();
const jsonBodyParser = json();

adminRouter
  // Get admin details
  .route('/')
  .get((req, res, next) => {
    AdminService.getAdminDetails(mockData)
      .then(response => res.json(response))
      .catch(next);
  });

adminRouter
  // Set coupon code
  .route('/coupon')
  .post(jsonBodyParser, (req, res, next) => {
    const { couponCode } = req.body;

    if (!couponCode) return res.status(400).json({
      error: `Missing couponCode from body`
    });

    mockData.couponCode = couponCode;

    AdminService.updateCouponCode(mockData, couponCode)
      .then(response => res.json(response))
      .catch(next)
  });

adminRouter
  // Set coupon interval
  .route('/interval')
  .post(jsonBodyParser, (req, res, next) => {
    const { couponInterval } = req.body;

    if (!couponInterval) return res.status(400).json({
      error: `Missing couponInterval from body`
    });

    mockData.couponInterval = couponInterval;

    AdminService.updateCouponInterval(mockData, couponInterval)
      .then(response => res.json(response))
      .catch(next)
  });

export default adminRouter;
