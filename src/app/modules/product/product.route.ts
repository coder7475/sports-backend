import { Router } from 'express';
import { ProductController } from './product.controller';
// create product router
const router = Router();
// get all products
router.get('/', ProductController.getProducts);
// get one product
router.get('/:productId', ProductController.getOneProduct);
// create
router.post('/', ProductController.createProduct);
// update
router.patch('/:productId', ProductController.updateProduct);
// delete
router.delete('/:productId', ProductController.deleteProduct);

export const ProductRoute = router;
