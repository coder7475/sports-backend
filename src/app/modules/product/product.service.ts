import { IProduct, IQuery, ISort } from './product.interface';
import { Product } from './product.model';

// get all products
const getAllProducts = async (query: Partial<IQuery>, sortBy: string) => {
  const sortQuery: Partial<ISort> = {};
  if (sortBy === 'dsc') {
    sortQuery.price = -1;
  }
  if (sortBy === 'asc') {
    sortQuery.price = 1;
  }
  return await Product.find(query).sort(sortQuery).lean().exec();
};

// get one product by Id
const getProductById = async (id: string) => {
  return await Product.findById(id).lean().exec();
};

// create new product
const createNewProduct = async (product: IProduct) => {
  return await Product.create(product);
};

// update an product by id
const updateProductById = async (id: string, product: Partial<IProduct>) => {
  return await Product.findByIdAndUpdate(id, product, {
    new: true,
    runValidators: true,
  }).lean();
};

// delete an product by id
const deleteProductById = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};

export const ProductServices = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProductById,
  deleteProductById,
};
