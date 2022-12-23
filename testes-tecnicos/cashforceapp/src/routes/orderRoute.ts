import { Router } from "express";
import orderController from '../controllers/orderController';

const route = Router();
const controller = new orderController();

route.get('/orders', controller.getAllOrders)

export default route;