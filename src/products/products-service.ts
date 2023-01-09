import { MockData, Product } from '../types/types';

const ProductsService = {

  // Generally these methods will interact with a DB of some kind.
  // The implementation is basic here since we do not need a
  // persistent data layer or any sort of authentication

  // Get all products
  getProducts: async (dataSrc: MockData) => {
    return dataSrc.products as Product[];
  }
}

export default ProductsService;