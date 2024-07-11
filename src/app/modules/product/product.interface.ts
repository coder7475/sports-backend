import { SortOrder } from 'mongoose';

export interface IProduct {
  name: string;
  brand: string;
  quantity: number;
  category: string;
  rating: number;
  price: number;
  image: string;
  description: string;
}

export interface IQuery {
  name: object;
  category: string;
  brand: string;
  price: number;
  rating: number;
}

export interface ISort {
  price: SortOrder;
}
