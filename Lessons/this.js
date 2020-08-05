function getThis() {
  console.log(this);
}
// getThis();
// window.getThis();
// console.log(window.getThis);

const prod1 = {
  name: "intel",
  price: 100,
  getPrice: function () {
    console.log(this);
  },
};
prod1.getPrice();
