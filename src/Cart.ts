import { Movie } from './Movie';

export class Cart {
  private items: Movie[] = [];

  add(movie: Movie): void {
    this.items.push(movie);
  }

  remove(id: number): void {
    this.items = this.items.filter(movie => movie.id !== id);
  }

  getTotalPrice(): number {
    return this.items.reduce((total, movie) => total + movie.price, 0);
  }

  getTotalPriceWithDiscount(discount: number): number {
    const total = this.getTotalPrice();
    return total - (total * (discount / 100));
  }

  getItems(): Movie[] {
    return this.items;
  }
}