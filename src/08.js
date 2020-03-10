class Cart {
	constructor() {
		this.array = [];
		this.discount = 0;
	}

	addItem({ item_id, price, quantity = 1 }) {
		this.array.push({ item_id, price, quantity });
		return this;
	}

	removeItem({ item_id }) {
		this.array = this.array.filter(function(e) {
			return e.item_id != item_id;
		});
		return this;
	}

	addDiscount({ discount }) {
		this.discount = parseFloat(discount) / 100.0;
		return this;
	}

	totalItem() {
		return console.log(this.array.length);
	}

	totalQuantity() {
		let a = 0;
		this.array.forEach((e) => {
			a += e.quantity;
		});
		return console.log(a);
	}

	totalPrice() {
		let b = 0;
		this.array.forEach((e) => {
			b += parseFloat(e.price * e.quantity);
		});
		return console.log(b);
	}

	showAll() {
		for (let i = 0; i < this.array.length; i++) {
			return console.log(this.array);
		}
	}
}

const cart = new Cart();
cart
	.addItem({ item_id: 1, price: 30000, quantity: 3 })
	.addItem({ item_id: 2, price: 10000 }) // By default quantity is 1
	.addItem({ item_id: 3, price: 5000, quantity: 2 })
	.removeItem({ item_id: 1 })
	.addDiscount('50%');
cart.showAll();
cart.totalPrice();
