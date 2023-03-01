class User implements Person {
  constructor() {
  }

  store(): boolean {
    console.log("saved");
    return true;
  }
}