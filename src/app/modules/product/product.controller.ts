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
  if (brand) query.brand = brand;
  // filter by price
  const price = (req.query.price as string) || 0;
  if (price) query.price = Number(price);
  // filter by rating
  const rating = (req.query.rating as string) || 0;
  if (rating) query.price = Number(rating);

  // get all products from database
  const result = await ProductServices.getAllProducts(query);
  // send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products retrieved successfully',
    data: result,
  });
});

export const ProductController = {
  getProducts,
};
