import winston, { exitOnError } from "winston";
import path from "./path";
import app from "./app";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  // format: combine(label({ label: "right meow!" }), timestamp(), myFormat),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({
      filename: path.log + "/logs.log",
    }),
  ],
});

const exception = winston.createLogger({
  format: winston.format.json(),

  exceptionHandlers: [
    new winston.transports.File({
      filename: path.log + "/exceptions.log",
    }),
  ],
  rejectionHandlers: [
    new winston.transports.File({
      filename: path.log + "/rejections.log",
    }),
  ],
  exitOnError: true,
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

export { logger, exception };
