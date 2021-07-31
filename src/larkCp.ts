import axios from 'axios';
import { LARK_CP_URL, AUTH } from '../apis';

const { LARK_CP_WEBHOOK, APP_ID, APP_SECRET } = process.env;

class LarkCp {
  private getNextPerson() {}

  public async postMessage() {
    const { data } = await axios.post(AUTH, {
      app_id: APP_ID,
      app_secret: APP_SECRET,
    });

    try {
      await axios.post(
        `${LARK_CP_URL}${LARK_CP_WEBHOOK}`,
        {
          msg_type: 'text',
          content: {
            text: '<at user_id="1c8gc9ab">钱程</at>『🦢』轮到你值日咯~加油加油^-^，下一位值班人员是@XX，请做好准备♪(๑ᴖ◡ᴖ๑)♪！',
          },
        },
        {
          headers: {
            Authorization: `Bearer ${data.tenant_access_token}`,
            'Content-Type': 'application/json; charset=utf-8',
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
}
