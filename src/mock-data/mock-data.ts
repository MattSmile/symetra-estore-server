import { generateUsers, generateProducts } from './generate-data';
import { Product, User, Purchase } from '../types/types';

let mockData = {
  products: generateProducts(10) as Product[],
  users: generateUsers(5) as User[],
  purchases: [] as Purchase[],
  couponCode: "ABC123",
  couponInterval: 3
};

export default mockData;
