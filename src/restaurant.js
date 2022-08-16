const comsumption = [];

const orderReturn = (food) => comsumption.push(food);

const payCalc = () => {
  const menu = { food: { coxinha: 2.00, sashimi: 4.00, sopa: 2.50 },
    drink: { agua: 1.50 } };
  const orderValues = [];
  comsumption.forEach((order) => orderValues
    .push(menu.food[order] || menu.drink[order]));
  if (orderValues.length !== 0) {
    const total = orderValues.reduce((acc, curr) => acc + curr) * 1.1;
    return `R$ ${total.toFixed(2)}`;
  }
};

const createMenu = (menuObject) => ({
  fetchMenu: () => menuObject,
  comsumption,
  order: (foodString) => orderReturn(foodString),
  pay: () => payCalc(),
});

module.exports = createMenu;
