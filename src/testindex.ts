import { Customer } from "./customer";
import { Seller } from "./seller";
import { User } from "./user";
import * as index from './index';

let customer= new Customer("Nicolas", 24);
let seller = new Seller("Ruben", 42);
let user = new User("Martin", 40);

const testcustomer : boolean = index.storeInDB(customer);
const testseller : boolean = index.storeInDB(seller);
const testuser : boolean = index.storeInDB(user);

function functestcustomer ( bool : boolean ) : boolean{
    if( bool ){
        console.log(`the test was sucefully`);    
    }
    return testcustomer;
}

functestcustomer(testcustomer);
functestcustomer(testseller);
functestcustomer(testuser);

