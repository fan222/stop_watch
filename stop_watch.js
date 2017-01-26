class StopWatch {
  constructor() {
    this.time = 0;
  }

  start() {
    this.timeId = setInterval(this.increment.bind(this), 1);
    return this;
  }

  increment() {
    this.time  = this.time + 1;
  }

  stop() {
    clearInterval(this.timeId);
    return this;
  }

  log() {
    console.log(this.time);
  }

  time() {
    return this.time;
  }

  reset() {
    clearInterval(this.timeId);
    this.time = 0;
    return this;
  }
}

module.exports = StopWatch;
