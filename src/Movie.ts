export class Movie {
    constructor(
      public id: number,
      public title: string,
      public director: string,
      public price: number,
      public year: number
    ) {}
  
    getInfo(): string {
      return `${this.title} (${this.year}), directed by ${this.director}, costs $${this.price}`;
    }
  }