

class Scooter{
  // scooter code here
  constructor(station, user=null, serial = nextSerial, nextSerial = serial+1, charge = 100, isBroken = false){
    this.station = station;
    this.nextSerial = nextSerial;
    this.charge = charge;
    this.isBroken = isBroken;
    this.user = user;

    if (serial < 1 || serial == 'undefined'){
    serial = 1;
    this.serial = serial;
    } else {
      this.serial = next.serial;
    }
  }


// rent() method ==> calls methods from ScooterApp //
 // rent(user){

    /// Accpets a user instance of the User class as an argument ///

    // If the scooter is charged above 20% and not broken, 
        //remove it from its station AND check it out to the user
    // OTHERWISE throw an error "scooter needs to charge or scooter needs repair"
 // }


// dock() method ==> called by ScooterApp class //
 // dock(station){
    //stations['station'].pop(scooter.serial)
    // Return the scooter to the station
    // Clear out the user
    
  //}

}


module.exports = Scooter
