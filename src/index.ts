import { Customer } from "./customer";
import { Seller } from "./seller";
import { User } from "./user";
import { Person } from "./person";

function storeInDB(user: Person) {
  user.store();
}

let customer = new Customer("carlos", 23);
let seller = new Seller("ruben", 42);
let user = new User();

storeInDB(customer);
storeInDB(seller);
storeInDB(user);
