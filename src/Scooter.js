

// Import //


class Scooter{
  // scooter code here
  constructor(station, user, serial, nextSerial = serial+1, charge = 100, isBroken = false){
    super(station, user);
    this.serial = serial;
    this.nextSerial = nextSerial;
    this.charge = charge;
    this.isBroken = isBroken;
  }

  rent(user){

  }

  dock(station){

  }

}


module.exports = Scooter
