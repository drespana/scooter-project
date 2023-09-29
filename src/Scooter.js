

class Scooter{
  // scooter code here
  constructor(station, user, serial = nextSerial, nextSerial = serial+1, charge = 100, isBroken = false){
    this.station = station;
    this.user = user;
    this.serial = serial;
    this.nextSerial = nextSerial;
    this.charge = charge;
    this.isBroken = isBroken;
  }

// rent() method //
 // rent(user){
    
 // }

// dock() method ==> calls ScooterApp class //
 // dock(station){

 // }

}


module.exports = Scooter
