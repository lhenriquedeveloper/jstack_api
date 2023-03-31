import { Request, Response } from 'express';

import { Order } from '../../models/Order';


export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    if (!['PENDING', 'IN_PROGRESS', 'DONE'].includes(status)) {
      return res.sendStatus(400).json({
        error: 'Invalid status. Try PENDING, IN_PROGRESS or DONE'
      });
    }

    await Order.findByIdAndUpdate(orderId, { status });
    const orderafterupdate = await Order.find().where('orderId').equals(orderId);
    res.send(200).json(orderafterupdate);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
