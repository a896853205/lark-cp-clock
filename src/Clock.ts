import {
  isFunction
} from '../util/index';

export class Clock {
  clockAlarm: ClockAlarm = new ClockAlarm();
  asyncAlarm?: Promise<any>;

  constructor(clockAlarm: ClockAlarm) {
    this.setClockAlarm(clockAlarm);
  }

  public getNextExpectTime() {}

  public getClockAlarm() {
    return this.clockAlarm;
  }

  public setClockAlarm(clockAlarm: ClockAlarm) {
    this.clockAlarm = clockAlarm;
  }

  public setAlarmEvent(event: Promise<any> | Function) {
    if (isFunction(event)) {
      this.asyncAlarm = Promise.resolve(event);
      return;
    }
    
    if (event instanceof Promise) {
      this.asyncAlarm = event;
      return;
    }
  }

  public async alarm (callback?: () => {}) {
    await this.asyncAlarm?.then(callback);
  }
}
