import express from "express";
import {
  convertTextSpeech,
  getSpeech,
} from "../controllers/textToSpeechControllers";
const router = express.Router();

router.post("/convert", convertTextSpeech);
router.get("/convert/:title/get", getSpeech);

export default router;
