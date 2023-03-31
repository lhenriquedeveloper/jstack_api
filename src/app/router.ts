import multer from 'multer';
import { Router } from 'express';
import { listCategories } from './useCases/categories/listCategory';
import { listProducts } from './useCases/products/listProducts';
import { listProductByCategory } from './useCases/categories/listProductByCategory';
import { createCategory } from './useCases/categories/createCategory';
import { createProduct } from './useCases/products/createProducts';


export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now}-${file.originalname}`);
    }
  })
});

//List Categories
router.get('/categories', listCategories);
//Create Categories
router.post('/categories', createCategory);
//List Products
router.get('/products', listProducts);
//Create Products
router.post('/products', upload.single('image'), createProduct);
//Get Product by Categories
router.get('/categories/:categoryId/products', listProductByCategory);
//List Orders
router.get('/orders', (req, res) => {
  res.send('OK');
});
//Create Orders
router.post('/orders', (req, res) => {
  res.send('OK');
});
//Change Order Status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});
//Delete Order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});
