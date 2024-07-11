import { Router } from 'express';
import { ProductController } from './product.controller';

const router = Router();

router.get('/', ProductController.getProducts);

router.get('/:productId', ProductController.getOneProduct);

export const ProductRoute = router;
