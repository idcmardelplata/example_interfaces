import { Person } from "./person";

export class Seller implements Person {
   name: string;
   age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  store(): boolean {
    console.log(`the seller ${this.name} was stored sucefully`);
    return true;
  }
}
