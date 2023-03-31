import { Request, Response } from 'express';

import { Category } from '../../models/Category';

//creating a function to list all categories
export async function listCategories(req: Request, res: Response) {
  const categories = await Category.find();
  res.json(categories);
}
