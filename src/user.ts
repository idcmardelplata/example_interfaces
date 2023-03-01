import { Person } from "./person";

export class User implements Person {

  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  store(): boolean {
    console.log("saved");
    return true;
  }
}