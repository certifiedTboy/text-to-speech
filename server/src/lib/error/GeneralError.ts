import CustomError from "./CustomError";

/**
 * @class NotFoundError
 */
class NotFoundError extends CustomError {
  /**
   * @constructor
   * @param message
   * @param metaData
   */
  constructor(statusCode: number, message: string) {
    super(statusCode, message);
  }
}

export default NotFoundError;
