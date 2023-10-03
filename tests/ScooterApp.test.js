

const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp();
// ScooterApp tests here

// register user
describe("registerUser method tests", () => {
  // beforeAll/beforeEach
  test("Should return instance of User", () => {
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });
  
  // test login() method
  test ("Should return loggedIn true", () => {
    expect(password == this.password).toBe("true");
  })

  // test logout() method
  test ("Should return loggedIn false", () => {
    expext(loggedIn).toBe("false");
  })

  // test rent scooter method
  test ("Should display scooter is rented", () => {
    expect();
  })

  // test dock scooter method
  test ("Should return scooter to station", () => {
    expect(scooter.station).toBe(!null);
  })
});
