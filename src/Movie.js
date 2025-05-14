"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
class Movie {
    constructor(id, title, director, price, year) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.price = price;
        this.year = year;
    }
    getInfo() {
        return `${this.title} (${this.year}), directed by ${this.director}, costs $${this.price}`;
    }
}
exports.Movie = Movie;
