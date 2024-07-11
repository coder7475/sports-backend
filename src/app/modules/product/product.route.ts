import { Router } from 'express';
import { ProductController } from './product.controller';

const router = Router();

router.get('/', ProductController.getProducts);

router.get('/:id');

export const ProductRoute = router;
