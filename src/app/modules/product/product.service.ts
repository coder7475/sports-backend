import { Product } from './product.model'

const getAllProducts = async () => {
  return await Product.find().lean().exec()
}

export const ProductServices = {
  getAllProducts,
}
