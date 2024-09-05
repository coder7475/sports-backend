import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductServices } from './product.service';
import { IQuery } from './product.interface';

const getProducts = catchAsync(async (req, res) => {
  // build query
  const query: Partial<IQuery> = {};
  // search by name
  const name = req.query.name || '';
  if (name) {
    query.name = { $regex: name, $options: 'i' };
  }
  // filter by category
  const category = (req.query.category as string) || '';
  if (category) query.category = category;
  // filter by brand
  const brand = (req.query.brand as string) || '';
  if (brand) query.brand = { $regex: brand, $options: 'i' };
  // filter by price
  const price = (req.query.price as string) || '0-1000';
  if (price) {
    const [minPrice, maxPrice] = price.split('-').map(Number);
    query.price = { $gte: minPrice, $lte: maxPrice || Number.MAX_VALUE };
  }
  // filter by rating
  const rating = (req.query.rating as string) || 0;
  if (rating) {
    const minRating = Number(rating);
    query.rating = { $gte: minRating };
  }
  // sort by ascending and descending
  const sortBy = req.query.sort as string;

  // get all products from database
  const result = await ProductServices.getAllProducts(query, sortBy);
  // send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products retrieved successfully',
    data: result,
  });
});

const getOneProduct = catchAsync(async (req, res) => {
  const id = req.params.productId;
  const result = await ProductServices.getProductById(id);
  // send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product retrieved successfully!',
    data: result,
  });
});

// create new product
const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createNewProduct(req.body);
  // send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product created successfully!',
    data: result,
  });
});

// update a product
const updateProduct = catchAsync(async (req, res) => {
  // extract the id
  const id = req.params.productId;
  // update a product
  const result = await ProductServices.updateProductById(id);

  // send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product updated successfully!',
    data: result,
  });
});

// delete a product
const deleteProduct = catchAsync(async (req, res) => {
  // extract the id
  const id = req.params.productId;
  // delete a product
  const result = await ProductServices.deleteProductById(id);

  // send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product deleted successfully!',
    data: result,
  });
});

export const ProductController = {
  getProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
