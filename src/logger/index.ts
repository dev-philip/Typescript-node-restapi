import pino from "pino";
import dayjs from "dayjs";

const log = pino({
    transport: {
    target: 'pino-pretty',
    options: {
          colorize: true,
          translateTime: dayjs().format()
        }
      }
});

export default log;