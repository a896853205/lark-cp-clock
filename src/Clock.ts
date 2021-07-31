import {
  isFunction
} from '../util/index';

class Clock {
  clockAlarm: ClockAlarm = new ClockAlarm();
  asyncAlarm?: Promise<any>;

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

  private setAlarmEvent(event: Promise<any> | Function) {
    if (isFunction(event)) {
      this.asyncAlarm = Promise.resolve(event);
      return;
    }
    
    if (event instanceof Promise) {
      this.asyncAlarm = event;
      return;
    }
  }

  private applyAlarmCallback (callback: Function) {

  }
}
