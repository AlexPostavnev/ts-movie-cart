"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cart_1 = require("../src/Cart");
const Movie_1 = require("../src/Movie");
describe('Cart', () => {
    let cart;
    beforeEach(() => {
        cart = new Cart_1.Cart();
    });
    test('should add a movie to the cart', () => {
        const movie = new Movie_1.Movie(1, 'Inception', 'Christopher Nolan', 10, 2010);
        cart.add(movie);
        expect(cart.getItems()).toContain(movie);
    });
    test('should calculate total price', () => {
        cart.add(new Movie_1.Movie(1, 'Inception', 'Christopher Nolan', 10, 2010));
        cart.add(new Movie_1.Movie(2, 'Interstellar', 'Christopher Nolan', 15, 2014));
        expect(cart.getTotalPrice()).toBe(25);
    });
    test('should calculate total price with discount', () => {
        cart.add(new Movie_1.Movie(1, 'Inception', 'Christopher Nolan', 10, 2010));
        cart.add(new Movie_1.Movie(2, 'Interstellar', 'Christopher Nolan', 15, 2014));
        expect(cart.getTotalPriceWithDiscount(20)).toBe(20);
    });
    test('should remove a movie from the cart', () => {
        const movie = new Movie_1.Movie(1, 'Inception', 'Christopher Nolan', 10, 2010);
        cart.add(movie);
        cart.remove(1);
        expect(cart.getItems()).not.toContain(movie);
    });
});
