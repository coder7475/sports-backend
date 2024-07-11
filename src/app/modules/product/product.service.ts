import { IQuery, ISort } from './product.interface';
import { Product } from './product.model';

const getAllProducts = async (query: Partial<IQuery>, sortBy: string) => {
  const sortQuery: Partial<ISort> = {};
  if (sortBy === 'des') {
    sortQuery.price = -1;
  }
  if (sortBy === 'asc') {
    sortQuery.price = 1;
  }
  return await Product.find(query).sort(sortQuery).lean().exec();
};

const getProductById = async (id: string) => {
  return await Product.findById(id).lean().exec();
};

export const ProductServices = {
  getAllProducts,
  getProductById,
};
