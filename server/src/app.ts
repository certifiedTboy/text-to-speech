import express from "express";
const app = express();
import bodyParser from "body-parser";
import GlobalErrorHandler from "./lib/error/GlobalErrorHandler";
import speechRoutes from "./routes/speachRoutes";
import path from "path";
import cors from "cors";

const allowedOrigins = ["http://localhost:3000"];
const expressOptions = {
  urlencodExtended: true,
  requestSizeLimit: "20mb",
};
const corsOption = {
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: allowedOrigins,
  preflightContinue: false,
};

app.use(cors(corsOption));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(process.cwd(), "public")));
app.use("/api/v1/text", speechRoutes);
app.use(GlobalErrorHandler);

app.get("/", (req, res) => {
  res.send("server is live");
});

export default app;
