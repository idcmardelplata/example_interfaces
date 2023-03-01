class DB implements Person {
  store() : boolean {
    console.log("salvado en la base de datos");
    return true;
  }
}