import { model, Schema } from 'mongoose';

export const Order = model('Order', new Schema({
  table: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['PENDING', 'IN_PROGRESS', 'DONE'],
    default: 'PENDING',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  products: {
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        default: 1,
      }
    }],
    required: true,
  }
}));
