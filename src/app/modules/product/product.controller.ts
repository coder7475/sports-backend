import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ProductServices } from './product.service'

const getProducts = catchAsync(async (req, res) => {
  // get all products from database
  const result = await ProductServices.getAllProducts()
  // send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products retrieved successfully',
    data: result,
  })
})

export const ProductController = {
  getProducts,
}
