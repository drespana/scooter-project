
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
    this.registeredUsers.push(user);
    console.log("user has been registered");
    return user;
  }


// createScooter method ==> calls Scooter class // i will be flabbergasted if this works
createScooter(station){

  if (station in this.stations){
    this.station = station;
  } else {
    throw new Error("no such station")
  }

  const scooter = new Scooter(this.station);
  this.stations['this.station'].push(scooter.serial);
  console.log("created new scooter")
  return scooter;
}


// loginUser() method // how do you call the user class to verify password?????
  loginUser(username, password){
    // locate the registered user by name and call its login method
    for (let i = 0; i < this.registerUsers.length; i++){
      if (username in this.registeredUsers){
        // if username is found, verify password
          User.login(password);
          console.log("user has been logged in")  
      } else {
        throw new Error("username or password is incorrect")
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
    // locate the registered user and call its logout method
    // log "user is logged out" to the console
  }

  

// dockScooter method ==> calls Scooter class method//
 // dockScooter(scooter, station){
      // add the scooter to the station's scooter list
      // dock the scooter 
      // Throw "no such station" error if the station does not exist
      // Throw "scooter already at station" error if the scooter is already there
  //}



// rentScooter method ==> calls Scooter and User class methods//
  //rentScooter(scooter, user){
      // for (let i = 0; i < this.stations['this.station'].length){
            // if (scooter.serial in station[i]){
                // this.stations['this.station']
            //}
      //}
      // locate the given scooter at one of the stations
      // remove the scooter from that station
      // rent the scooter to the user
      // log "scooter is rented" to the console
      // if the scooter is already rented, 
          // throw the error "scooter already rented"
 // }

 //print()

}

module.exports = ScooterApp
