const StopWatch = require("./stop_watch");

global.allRacers = [];

class Racer {
  constructor() {
    this.sw = new StopWatch();
    global.allRacers.push(this);
  }

  static all() {
    return global.allRacers;
  }

  stop() {
    this.sw.stop();
    return this;
  }

  log() {
    this.sw.log();
  }

  static clear() {
    global.allRacers = [];
  }

  static reset() {
    global.allRacers.forEach( racer => {
      racer.sw.reset();
      }
    );
  }

  static getWinner() {
    if (Racer.all().length < 1){
      return "Please add racers";
    }
    let winner = global.allRacers[0];
    for (let i = 1; i < global.allRacers.length; i++) {
      if (winner.sw.time > global.allRacers[i].sw.time) {
        winner = global.allRacers[i];
      }
    }
    return winner;
  }
}


//Because Racer.all() returns an array,
//so define start and stop methods as Array.prototype
Array.prototype.start = function () {
  global.allRacers.forEach( racer => {
    racer.sw.start();
    }
  );
};

Array.prototype.stop = function () {
  global.allRacers.forEach( racer => {
    racer.sw.stop();
    }
  );
};
