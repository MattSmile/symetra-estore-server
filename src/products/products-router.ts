import { Router } from 'express';
const productsRouter = Router();
import mockData from '../mock-data/mock-data';

// Services
import ProductsService from './products-service';

productsRouter
  // Get all products
  .route('/')
  .get((req, res, next) => {
    ProductsService.getProducts(mockData)
      .then(response => res.json(response))
      .catch(next)
  });

export default productsRouter;
