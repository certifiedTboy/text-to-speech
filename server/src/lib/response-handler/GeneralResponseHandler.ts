import { Response } from "express";

/**
 * @description

 * @class ResponseHandler
 */
export default class GeneralResponseHandler {
  /**
   * @method send
   * @param {Response} res Express response object
   * @param {HttpStatusCode} statusCode Response status code
   * @param {object} [data] Response data
   * @param {string} [message] Optional response message
   * @memberOf ResponseHandler
   */
  static send(
    res: Response,
    statusCode: number,
    data?: string,
    message?: string
  ) {
    return res.status(statusCode).json({ message, data });
  }
}
