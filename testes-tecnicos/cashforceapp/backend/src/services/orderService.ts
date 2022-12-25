import Order from "../database/models/orders";
import Buyer from "../database/models/buyers";
import Provider from "../database/models/providers";

export default class orderService {
  getAllOrders = async () => {
    const orders = await Order.findAll({
      include: [
        {
          model: Buyer,
          as: 'sacados',
          attributes: { include: ['name'] },
        },
        {
          model: Provider,
          as: 'cedentes',
          attributes: { include: ['name'] },
        },
      ]
    });
    return { orders };
  };
}