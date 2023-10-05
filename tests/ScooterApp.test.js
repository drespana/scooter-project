

const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp();
// ScooterApp tests here

// register user
describe("registerUser method tests", () => {
    const user = new User("Joe Bloggs", "test123", 21);
    const scooter = new Scooter();

  test("Should return instance of User", () => {
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });
  
  // test loginUser() method
  test ("Should log to console user has been logged in", () => {
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
    let response = scooterApp.rentScooter(scooter, user);
    expect(response).toEqual("scooter is rented");
  })

  // test dock scooter method
  test ("Should return scooter to station", () => {
    let response = scooterApp.dockScooter(scooter);
    expect(response).toEqual("scooter is docked");
  })
})
