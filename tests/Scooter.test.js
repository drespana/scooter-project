const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter();
    expect(scooter).toBeInstanceOf(Scooter);
  });
})

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method
  test ("adds user to scooter", () => {
    expect(Scooter.user).toBe(User.username);
  })

  //dock method
  test ("clears user", () => {
    expect(Scooter.user).toBe(null);
  })

  test ("adds station", ()=> {
    expect (Scooter.station).toBe(!null);
  })
})
