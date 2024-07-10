import { IQuery } from './product.interface'
import { Product } from './product.model'

const getAllProducts = async (query: Partial<IQuery>) => {
  return await Product.find(query).lean().exec()
}

export const ProductServices = {
  getAllProducts,
}
