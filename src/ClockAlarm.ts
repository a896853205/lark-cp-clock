/**
 * 闹钟闹铃参数
 */
class ClockAlarm {
  isCirculate: boolean = true;
  message: string = '';
  alarmStartTime: number = Number(new Date());
  timeInterval: number = 1;
  ranTimes: number = 0;
  isWorkDay: boolean = false;

  /**
   * @param circulateTimes
   * @param message
   * @param alarmStartTime
   * @param timeInterval
   * @param ranTimes
   * @param isWorkDay
   */
  constructor(
    isCirculate?: boolean,
    message?: string,
    alarmStartTime?: number,
    timeInterval?: number,
    ranTimes?: number,
    isWorkDay?: boolean
  ) {
    this.isCirculate = isCirculate ?? true;
    this.message = message ?? '';
    this.alarmStartTime = alarmStartTime ?? Number(new Date());
    this.timeInterval = timeInterval ?? 1;
    this.ranTimes = ranTimes ?? 0;
    this.isWorkDay = isWorkDay ?? false;
  }
}
