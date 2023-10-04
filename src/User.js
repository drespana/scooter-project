class User {
  // User code here
    constructor(username, password, age, loggedIn = false){
      this.username = username;
      this.password = password;
      this.age = age;
      this.loggedIn = loggedIn;
    }
  
  // login method ==> Verifies password //
    login(password){
      // verify password here
      if (password != this.password){
        throw new Error("incorrect password");
      } else {
        return this.loggedIn = true;
      }
    } // returns loggedIn = true //
  
  // logout() method ==> sets loggedIn to false // 
    logout(){
      return this.loggedIn = false;
    }
  } // returns loggedIn = false //

module.exports = User
