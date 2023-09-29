class User {
  // User code here
  constructor(username, password, age, loggedIn){
    super(username, password, age)
    this.loggedIn = loggedIn;
  }

  login(password){

  }

  logout(){
    
  }
}

module.exports = User
