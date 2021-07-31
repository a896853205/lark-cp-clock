import { Clock } from './src/Clock';
import dotenv from 'dotenv';

dotenv.config()

const clockAlarm = new ClockAlarm(true, Number(new Date('2021/7/31 8:00')), 3600000, 0, true);
const clock = new Clock(clockAlarm);

function main(interval?: number) {
  setTimeout(async () => {
    // 设置 alarm 内容
    // clock.setAlarmEvent()
    // 提醒
    await clock.alarm();
    // 计算下个延迟时间
    // const curInterval = clock.getNextExpectTime() - Number(new Date());
    // 执行下次延迟提醒
    // main(curInterval);
  }, interval ?? 5000);
}

main();