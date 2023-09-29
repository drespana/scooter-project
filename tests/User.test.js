const User = require('../src/User');

const user = new User("Joe Bloggs", "test123", 21);

// User tests here
describe("User property tests", () => {
  // test username
  test("username should be a string", () => {
    expect(typeof user.username).toBe("string");
  })
  // test password
  test("password should be string", ()=> {
    expect(typeof user.password).toBe("string");
  })

  // test age
  test("age should be number", () => {
    expect(typeof user.age).toBe("number");
  })
})


// test login

// test logout
