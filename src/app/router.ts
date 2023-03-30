import { Router } from 'express';

export const router = Router();

//List Categories
router.get('/categories', (req, res) => {
  res.send('OK');
});
//Create Categories
router.post('/categories', (req, res) => {
  res.send('OK');
});
//List Products
router.get('/products', (req, res) => {
  res.send('OK');
});
//Create Products
router.post('/products', (req, res) => {
  res.send('OK');
});
//Get Product by Categories
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});
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
