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

  static getWinner() {
    let winner = global.allRacers[0];
    for (let i = 1; i < global.allRacers.length; i++) {
      if (winner.sw.time >= global.allRacers[i].sw.time) {
        winner = global.allRacers[i];
      }
    }
    return winner;
  }
}

Array.prototype.start = function () {
  global.allRacers.forEach( racer => {
    racer.sw.start();
    }
  );
};
