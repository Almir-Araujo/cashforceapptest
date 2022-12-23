import { Request, Response } from 'express';
import orderService from '../services/orderService';

export default class orderController {
  orderService: orderService;

  constructor() {
    this.orderService = new orderService();
  }

  getAllOrders = async (_req: Request, res: Response) => {
    const response = await this.orderService.getAllOrders();
    return res.status(200).json(response);
  };
}