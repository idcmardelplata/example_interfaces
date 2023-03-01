import { Person } from "./person";
import { Customer } from "./customer";
import { Seller } from "./seller";
import { User } from "./user";

export function storeInDB(user: Person): boolean {
  return user.store();
}

let customer = new Customer("carlos", 23);
let customer1= new Customer("Nicolas", 24);
let seller = new Seller("ruben", 42);
let user = new User("pepe", 22);
let user1 = new User("maria", 33);
storeInDB(customer);
storeInDB(seller);
storeInDB(user);
