

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

// rent() method ==> recieves a user class argument from ScooterApp //
  rent(user){
    if (this.charge < 20 || this.isBroken == true){
      throw new Error("scooter needs to charge or scooter needs repair");
    } else{
        return this.station = null, this.user = user;
    }
  } // returns the name of the user and clears the station //

// dock() method ==> called by ScooterApp class, which passes parameters to the Scooter class //
  dock(station){ 
    return this.station = station, this.user = null;
  }
} // returns the staion it's docked at and clears the user //


module.exports = Scooter
