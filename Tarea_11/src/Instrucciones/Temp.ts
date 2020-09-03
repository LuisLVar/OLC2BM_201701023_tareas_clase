export class Temp{
  private noTemporal = 0;
  constructor() {

  }

  getTemporal() {
    this.noTemporal++;
    return "T"+this.noTemporal;
  }
}