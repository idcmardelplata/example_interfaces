export default class TestGenerator {
  gen_throw_function() {
    return function fail_fn() { throw new Error("some error"); }
  }
  gen_async_function(): Promise<string> {
      return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("work"); }, 10);
      });
  }
};

