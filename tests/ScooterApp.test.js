

const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp();
// ScooterApp tests here

// register user
describe("registerUser method tests", () => {
    const user = new User("Joe Bloggs", "test123", 21);

  test("Should return instance of User", () => {
    let response = scooterApp.registerUsers("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });
  
  // test login() method
  test ("Should return loggedIn true", () => {
    let response = scooterApp.loginUser(user.username, user.password);
    expect(response).toEqual("user has been logged in");
  })

  // test logout() method
  test ("Should return loggedIn false", () => {
    user.logout();
    expect(user.loggedIn).toBe(false);
  })

  // test rent scooter method
  test ("Should display scooter is rented", () => {
    expect();
  })

  // test dock scooter method
  test ("Should return scooter to station", () => {
    expect();
  })
});
