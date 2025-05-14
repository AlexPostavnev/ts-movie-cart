import { Movie } from '../src/Movie';

describe('Movie', () => {
  test('should return correct movie info', () => {
    const movie = new Movie(1, 'Inception', 'Christopher Nolan', 10, 2010);
    expect(movie.getInfo()).toBe('Inception (2010), directed by Christopher Nolan, costs \$10');
  });
});