

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

// rent() method ==> recieves arguments from ScooterApp //
  rent(user){
    /// Accpets a user instance of the User class as an argument ///
    if (this.charge < 20 || this.isBroken == true){
      throw new Error("scooter needs to charge or scooter needs repair");
    } else{
        return this.station = null, this.user = user;
    }
    // If the scooter is charged above 20% and not broken, 
        //remove it from its station AND check it out to the user
    // OTHERWISE throw an error "scooter needs to charge or scooter needs repair"
  }

// dock() method ==> called by ScooterApp class, which passes parameters to the Scooter class //
  dock(station){ 
    return this.station = station, this.user = null;
  }
}


module.exports = Scooter
