import { Request, Response, NextFunction } from "express";
import { textToSpeech, getConvertedSpeech } from "../services/textToSpeech";
import GeneralResponseHandler from "../lib/response-handler/GeneralResponseHandler";

export const convertTextSpeech = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { plainText } = req.body;
    const title =
      "text-to-speech" + Math.floor(Math.random() * 1000000) + "abcdde";
    const speech = await textToSpeech(plainText, title);

    if (speech) {
      return GeneralResponseHandler.send(
        res,
        200,
        title,
        "created successfully"
      );
    }
  } catch (error) {
    next(error);
  }
};

export const getSpeech = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title } = req.params;
  try {
    const speech = await getConvertedSpeech(title);

    if (speech) {
      return GeneralResponseHandler.send(res, 200, speech, "success");
    }
  } catch (error) {
    next(error);
  }
};
