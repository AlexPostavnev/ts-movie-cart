"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
class Cart {
    constructor() {
        this.items = [];
    }
    add(movie) {
        this.items.push(movie);
    }
    remove(id) {
        this.items = this.items.filter(movie => movie.id !== id);
    }
    getTotalPrice() {
        return this.items.reduce((total, movie) => total + movie.price, 0);
    }
    getTotalPriceWithDiscount(discount) {
        const total = this.getTotalPrice();
        return total - (total * (discount / 100));
    }
    getItems() {
        return this.items;
    }
}
exports.Cart = Cart;
