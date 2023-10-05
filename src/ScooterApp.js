

const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(stations, registeredUsers){
    this.registeredUsers = [];
    stations = {
      "Chicago":[],
      "Austin":[],
      "New York":[]
    }
    this.stations = stations;
  }

// registerUsers() method // i really hope this works, i used my whole noodle
  registerUser(username, password, age){
    // check if username already exists
    if (this.registeredUsers[username]){
      throw new Error("already registered");
    }  // set username 
    // check age before setting and return error if under 18
    if (age < 18){
    throw new Error("too young to register")
    }  // sets the age if the input is 18+; returns error if <18 //
    // create user object
    const user = new User(username, password, age);
    this.registeredUsers[username] = user;
    console.log("user "+user+" has been registered");
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

// loginUser() method // 
  loginUser(username, password){
    const user = this.registeredUsers[username];
    // locate the registered user by name and call its login method //
      if (this.registeredUsers[username]){
        // if username is found, verify password //
        user.login(password); 
        return console.log("user has been logged in"); 
      } else {
        throw new Error("username or password is incorrect"); 
      }
    // call login() method from User class; return error if username or password is incorrect; OTHERWISE login user //
  } 

// logoutUser() method ==> calls User class method// 
  logoutUser(username){
    const user = this.registeredUsers[username]
    for (let i = 0; i < this.registeredUsers.length; i++){
      if (username == this.registeredUsers[i]){
        username.logout();
          console.log("user is logged out");
      } else {
          throw new Error("no such user is logged in");
      }
    } 
  }

// dockScooter method ==> calls Scooter class method//
  dockScooter(scooter, station){
    if (!this.stations.includes(this.stations[station])){
      if (scooter in this.stations[station]){
        throw new Error("scooter already at station");
        } else {
            scooter.dock(station);
          }
      } else { 
        throw new Error("no such station");
      }
  }

// rentScooter method ==> calls Scooter and User class methods//
  rentScooter(scooter, user){
    // locate scooter 
    for (let i = 0; i < this.stations[scooter.station].length; i++){
      if (scooter == this.stations[scooter.station][1]){
        this.stations[scooter].splice(1, '');
        console.log("scooter is rented")
        return scooter.station = null, scooter.user = user;
      }
    }

    if (!this.stations[scooter.station]){
      throw new Error("no such station");
    }

    if (!scooter.station){
      throw new Error("scooter already rented")
    }
}

  print(){
    console.log("User info : "+User+";\n");
    console.log("Scooter info : "+Scooter+";\n");
    console.log("Users : "+ this.registeredUsers +";");
    console.log("Stations: "+ this.stations[station].length)
  }
}


module.exports = ScooterApps
