import { Request, Response } from 'express';

import { Product } from '../../models/Product';

//creating a function to list all categories
export async function listProductByCategory(req: Request, res: Response) {
  try {
    const { CategoryId } = req.params;
    const product = await Product.find().where('category').equals(CategoryId);
    res.send(200).json(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
