class GuessingGame {
  constructor(setRange, guess, lower, greater) {
      
    setRange = min, max =>
    this.max = max;
    this.min = min;
  ;

  guess = () =>
    this.min + Math.ceil((this.max - this.min) / 2);
  ;

  lower = () => this.max = this.guess();
  
;
  greater = () => this.min = this.guess();
  
  }
  
}
