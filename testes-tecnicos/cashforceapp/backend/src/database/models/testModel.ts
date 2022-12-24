import Order from "./orders";

(async () => {
  const orders = await Order.findAll({});
  console.log(orders);
  process.exit(0);
})();