import { Request, Response } from 'express';

import { Order } from '../../models/Order';


export async function deleteOrder(req: Request, res: Response) {
  try {


    const { orderId } = req.params;
    await Order.deleteOne().where('orderId').equals(orderId);

    const orderafterdelete = await Order.find();

    res.send(200).json(orderafterdelete);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
