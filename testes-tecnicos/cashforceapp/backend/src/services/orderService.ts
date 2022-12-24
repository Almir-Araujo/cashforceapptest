import Order from "../database/models/orders";

export default class orderService {
  getAllOrders = async () => {
    const orders = await Order.findAll({});
    return orders;
  };
}