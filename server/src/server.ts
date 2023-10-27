import http from "http";
import app from "./app";
import dotenv from "dotenv";
const httpServer = http.createServer(app);

dotenv.config();

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
