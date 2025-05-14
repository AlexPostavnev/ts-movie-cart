"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = require("../src/Movie");
describe('Movie', () => {
    test('should return correct movie info', () => {
        const movie = new Movie_1.Movie(1, 'Inception', 'Christopher Nolan', 10, 2010);
        expect(movie.getInfo()).toBe('Inception (2010), directed by Christopher Nolan, costs \$10');
    });
});
