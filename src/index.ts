interface Person {
  /* name: string; */
  /* age: number; */
  store(): boolean; 
};

class Customer implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  store(): boolean {
    console.log(`the customer ${this.name} was stored sucefully`);
    return true;
  }
}

class Seller implements Person {
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

class Usuario implements Person {
  constructor() {
  }

  store(): boolean {
    console.log("salvado");
    return true;
  }
}

class DB implements Person {
  store() : boolean {
    console.log("salvado en la base de datos");
    return true;
  }
}


function storeInDB(user: Person) {
  user.store();
}


let customer = new Customer("carlos", 23);
let seller = new Seller("ruben", 42);
let usuario = new Usuario();

storeInDB(customer);
storeInDB(seller);
storeInDB(usuario);
