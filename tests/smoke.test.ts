import TestGenerator from  "./utils";

describe("should makes sure the test configuration is correct", () => {
  let utils: TestGenerator;

  beforeAll(() => {
    utils = new TestGenerator();
  });

  test("should make sure the basic tests work", ()=> {
    expect(23 + 2).toBe(25);
    expect("hello ".concat("world")).toBe("hello world");
  });

  test("should make sure that exceptions can be tested.", () => {
    expect(utils.gen_throw_function()).toThrow();
  });

  test("should make sure that promises can be tested.", () => {
    utils.gen_async_function().then(data => expect(data).toBe('work'));
  });

  test("should make sure that async/await can be tested.", async () => {
    let sut = await utils.gen_async_function();
    expect(sut).toBe("work");
  });
});
