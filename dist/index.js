"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Product {
    constructor(name, price, description) {
        this._id = (0, uuid_1.v4)();
        this._name = name;
        this._price = price;
        this._description = description;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get price() {
        return this._price;
    }
    set price(price) {
        this._price = price;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
}
class User {
    constructor(name, age) {
        this._id = (0, uuid_1.v4)();
        this._name = name;
        this._age = age;
        this._cart = [];
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    get cart() {
        return this._cart;
    }
    addToCart(product) {
        return this._cart.push(product);
    }
    removeFromCart(product) {
        let i = 0;
        while (i < this._cart.length) {
            if (this._cart[i] === product) {
                this._cart.splice(i, 1);
            }
            else {
                ++i;
            }
        }
        return User;
    }
    removeQua(product, q) {
        let index = this._cart.indexOf(product);
        if (index > -1) {
            this._cart.splice(index, q);
        }
        return User;
    }
    cartTotal() {
        let total = 0;
        for (let product of this._cart) {
            total += product.price;
        }
        return total;
    }
    printCart() {
        console.log('You\'re current cart:\n', this._cart);
    }
}
class Panacea {
    constructor() {
        this._products = [
            new Product('Navy Blue Beanie', 19.99, 'Navy blue beanie made from cashmere and merino wool.'),
            new Product('Oxblood Crewneck', 32.99, 'GOTS Organic certified crewneck.'),
            new Product('Military Olive', 39.99, 'GOTS Organic certified hoodie.')
        ];
    }
    get products() {
        return this._products;
    }
}
const pantext = new Panacea();
const theMan = new User('Yvon Chouinard', 83);
console.log(theMan);
theMan.addToCart(pantext.products[0]);
theMan.addToCart(pantext.products[0]);
theMan.addToCart(pantext.products[1]);
theMan.addToCart(pantext.products[1]);
theMan.addToCart(pantext.products[1]);
theMan.addToCart(pantext.products[2]);
theMan.printCart();
theMan.removeFromCart(pantext.products[0]);
theMan.printCart();
theMan.removeQua(pantext.products[1], 2);
theMan.printCart();
const totalPrice = theMan.cartTotal();
console.log(`You\'re total for today is: $${totalPrice}`);
