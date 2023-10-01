
const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(stations, registeredUsers){
    registeredUsers = {};
    this.registeredUsers = registeredUsers;
    stations = {
      "Chicago":[1, 2, 3],
      "Austin":[1, 2, 3],
      "New York":[1, 2, 3]
    }
    this.stations = stations;
  }

// registerUsers() method // i really hope this works, i used my whole noodle
  registerUsers(username, password, age){
    this.password = password;
    // check if username already exists
    if (username in this.registeredUsers){
      throw new Error("already registered");
    } else {
      this.username = username;
    } // set username 
    // check age before setting and return error if under 18
    if (age < 18){
    throw new Error("too young to register")
    } else {
      this.age = age;
    } // sets the age if the input is 18+; returns error if <18 //
    // create user object
    const user = this.username;
    user = new User(this.username, this.password, this.age);
    this.registeredUsers.push(user);
    console.log("user has been registered");
    return user;
  } // return user object

// createScooter method ==> calls Scooter class // i will be flabbergasted if this works
  createScooter(station){
    if (station in this.stations){
      this.station = station;
    } else {
      throw new Error("no such station");
    } // return an error //
  // create scooter object //
  const scooter = new Scooter(this.station);
  this.stations['this.station'].push(scooter.serial = this.stations['this.statinon'].length+1);
  console.log("created new scooter");
  return scooter;
} // return scooter object // 

// loginUser() method // how do you call the user class to verify password?????
  loginUser(username, password){
    // locate the registered user by name and call its login method
    for (let i = 0; i < this.registerUsers.length; i++){
      if (username in this.registeredUsers){
        // if username is found, verify password
        User.login(password); // calls the class, not the instance of the class 
        console.log("user has been logged in"); // if it works, which it does not
      } else {
        throw new Error("username or password is incorrect"); // this feels like correcting someone when youre still wrong
      }
    }
  }

// logoutUser() method ==> calls User class method// 
  logoutUser(username){
    for (let i = 0; i < this.registeredUsers.length; i++){
      if (username == this.registeredUsers[i]){
        username.logout();
          console.log("user is logged out");
      } else {
          throw new Error("no such user is logged in")
      }
    }
  }

// dockScooter method ==> calls Scooter class method//
  dockScooter(scooter, station){
    if (station in this.stations['this.staion']){
      if (scooter.serial in this.station){
        throw new Error("scooter already at station");
        } else {
            Scooter.dock(station);
          }
      } else { 
        throw new Error("no such station");
      }
  }

// rentScooter method ==> calls Scooter and User class methods//
  rentScooter(scooter, user){
    for (let i = 0; i < this.stations['this.station'].length; i++){
      // locate scooter
      if (scooter.serial in station[i]){
        Scooter.rent(user);
        console.log("scooter is rented");
      } // return error "scooter already rented"; OTHERWISE rent() and log "scooter is rented"
    }
  }
  print(){
    console.log("User info : "+User+";\n");
    console.log("Scooter info : "+Scooter+";\n");
    console.log("Stations : "+ this.stations + ";\n");
    console.log("Users : "+ this.registeredUsers +";");
  }
}

module.exports = ScooterApps
