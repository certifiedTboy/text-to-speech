const gTTS = require("gtts");
import path from "path";

export const textToSpeech = async (
  plainText: string,
  title: string
): Promise<any> => {
  var gtts = new gTTS(plainText, "en");
  const result = await gtts.save(
    path.join(__dirname, "..", "..", "public", `${title}.mp3`)
  );
  return "success";
};

export const getConvertedSpeech = async (title: string) => {
  const path = `http://localhost:3001/${title}.mp3`;

  return path;
};
