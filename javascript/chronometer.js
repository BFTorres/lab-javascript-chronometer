class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    // ... your code goes here
  }
  startClick(callback) {
    thius.intervalId = setInterval(() => {
      this.currentTime++    
      console.log(this.currentTime)
    }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60000);
   /*if (this.currentTime === 0) {
      return 0;
    }
    return Math.floor(this.currentTime / 60); */ 
  }
  getSeconds() {
    return Math.floor(this.currentTime % 6000 / 100);
   
   
    /* if (this.currentTime === 0) {
      return 0;
    }*/
  twoDigitsNumber() {
    //???????????????????????????????????????????????
    // ... my sanity goes here
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
  }
}
