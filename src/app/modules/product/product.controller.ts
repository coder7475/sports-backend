import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ProductServices } from './product.service'
import { IQuery } from './product.interface'

const getProducts = catchAsync(async (req, res) => {
  // search by name
  const name = req.query.name || ''
  // build query if name exists
  const query: Partial<IQuery> = {}
  if (name) {
    query.name = { $regex: name, $options: 'i' }
  }
  // get all products from database
  const result = await ProductServices.getAllProducts(query)
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
