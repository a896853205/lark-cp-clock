class Clock {
  clockAlarm: ClockAlarm = new ClockAlarm();
  asyncAlarm?: Promise<any>;
  syncAlarm?: Function;

  constructor(clockAlarm: ClockAlarm) {
    this.setClockAlarm(clockAlarm);
  }

  private getNextExpectTime() {}

  private getClockAlarm() {
    return this.clockAlarm;
  }

  private setClockAlarm(clockAlarm: ClockAlarm) {
    this.clockAlarm = clockAlarm;
  }

  private setAlarmCallback(callback: Promise<any> | Function) {}
}
