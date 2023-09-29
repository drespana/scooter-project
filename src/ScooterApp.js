
const User = require('./User')
const Scooter = require('./Scooter')


class ScooterApp {
  // ScooterApp code here
  constructor(stations, registeredUsers){
    this.stations = stations;
    this.registeredUsers = registeredUsers;
  }


// registerUsers() method //
  registerUsers(username, password, age){
    this.password = password;

    // check if username already exists
    if (username in this.registeredUsers){
      throw new Error("already registered")
    } else {
      this.username = username;
    }
    
    // check age before setting and return error if under 18
    if (age < 18){
    throw new Error("Too young to register.")
    } else {
      this.age = age;
    }

    // Return user object
    const user = this.username;
    user = new User(this.username, this.password, this.age);
    return user;
  }


// loginUser() method //
  loginUser(username, password){
    username.login(password)
  }


// logoutUser() method ==> calls User class //
  logoutUser(username){
    username.logout();
  }


// createScooter method ==> calls Scooter class //
  createScooter(station){

    if (station in this.stations){
      this.station = station;
    } else {
      throw new Error("no such station")
    }

    // create scooter object

  }



// dockSccooter method ==> calls Scooter class //
 // dockScooter(station){

  //}




// rentScooter method ==> calls Scooter and User class //
  //rentScooter(scooter, user){

 // }

}

module.exports = ScooterApp
