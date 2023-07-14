import { v4 as uuidv4 } from "uuid";



class Product {
    private _id: string;
    private _name: string;
    private _price: number;
    private _description: string;

    constructor(name:string, price:number, description:string) {
        this._id =uuidv4();
        this._name = name;
        this._price = price;
        this._description = description
    }

    public get id():string {
        return this._id
    }

    public get name():string {
        return this._name
    }

    public set name(name:string) {
        this._name = name
    }

    public get price():number {
        return this._price
    }

    public set price(price:number) {
        this._price = price
    }

    public get description():string {
        return this._description
    }

    public set description(description:string) {
        this._description = description
    }
}

class User {
    private _id: string;
    private _name: string;
    private _age: number;
    private _cart: Product[];

    constructor(name:string, age:number) {
        this._id = uuidv4();
        this._name = name;
        this._age = age;
        this._cart = []
    }

    public get id():string {
        return this._id
    }

    public get name():string {
        return this._name
    }

    public set name(name:string) {
        this._name = name
    }

    public get age():number {
        return this._age
    }

    public set age(age:number) {
        this._age = age
    }

    public get cart():Product[] {
        return this._cart
    }

    addToCart(product:Product) {
        return this._cart.push(product)
    }

    removeFromCart(product:Product) {
        let i = 0
        while (i < this._cart.length) {
            if (this._cart[i] === product) {
                this._cart.splice(i, 1)
            } else {
                ++i
            }
        }
        return User
    }

    removeQua(product:Product, q:number) {
        let index = this._cart.indexOf(product)
        if (index > -1) {
            this._cart.splice(index, q)
        }
        return User
    }

    cartTotal() {
        let total = 0
        for (let product of this._cart) {
            total += product.price
        }
        return total
    }

    printCart():void {
        console.log('You\'re current cart:\n', this._cart)
    }
}

class Panacea {
    private _products: Product[];

    constructor() {
        this._products = [
            new Product('Navy Blue Beanie', 19.99, 'Navy blue beanie made from cashmere and merino wool.'),
            new Product('Oxblood Crewneck', 32.99, 'GOTS Organic certified crewneck.'),
            new Product('Military Olive', 39.99, 'GOTS Organic certified hoodie.')
        ];
    }
    get products(): Product[] {
        return this._products
    } 
}

const pantext = new Panacea();
const theMan = new User('Yvon Chouinard', 83);

console.log(theMan)


theMan.addToCart(pantext.products[0])
theMan.addToCart(pantext.products[0])
theMan.addToCart(pantext.products[1])
theMan.addToCart(pantext.products[1])
theMan.addToCart(pantext.products[1])
theMan.addToCart(pantext.products[2])


theMan.printCart()


theMan.removeFromCart(pantext.products[0])


theMan.printCart()


theMan.removeQua(pantext.products[1], 2)


theMan.printCart()


const totalPrice = theMan.cartTotal()
console.log(`You\'re total for today is: $${totalPrice}`)