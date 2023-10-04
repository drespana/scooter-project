const Scooter = require('../src/Scooter')
const User = require('../src/User')

    const scooter = new Scooter();

//typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    expect(scooter).toBeInstanceOf(Scooter);
  });
})

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method
  test ("adds user to scooter", () => {
    const user = new User("Joe Bloggs", "test123", 21);
    scooter.rent(user);
    let response = scooter.user;
    expect(response).toBeInstanceOf(User);
  })

  //dock method
  test ("clears user", () => {
    scooter.dock("Chicago");
    expect(scooter.user).toBe(null);
  })

  test ("adds station", ()=> {
    scooter.dock("Chicago");
    expect(scooter.station).toEqual("Chicago");
  })
})
