export type User = {
  id: string;
  name: string;
  hasCoupon: boolean;
  couponCode: string | null;
  purchases: Array<Purchase>
}

export type Product = {
  id: string;
  name: string;
  price: number;
  details: string;
}

export type Purchase = {
  id: string;
  productId: string;
  userId: string;
  datePurchased: Date;
  couponApplied: boolean;
  couponCode: string | null;
}

export type Coupon = {
  code: string | null;
}

export type MockData = {
  products: Product[];
  users: User[];
  purchases: Purchase[];
  couponCode: string;
  couponInterval: number;
}

export type PostResponse = {
  status: string;
  value: any;
}
