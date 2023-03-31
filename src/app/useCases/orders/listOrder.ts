import { Request, Response } from 'express';

import { Order } from '../../models/Order';

//creating a function to list all categories
export async function listOrder(req: Request, res: Response) {
  try {
    const order = await Order.find()
      .sort({ createdAt: 1 })
      .populate('products.product');
    res.send(200).json(order);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
