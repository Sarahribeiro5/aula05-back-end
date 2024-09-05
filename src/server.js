import express from "express";
import { config } from "dotenv";

import routes from "./routes/index.routes.js";

config();

const serverPort = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(routes);


const personagens = [
  {
    id: 100,
    nome: "Totoro",
    studio: "Ghibli",
    vivo: true
  },
  {
    id: 101,
    nome: "Barbie",
    studio: "Mattel",
    vivo: true
  },
  {
    id: 102,
    nome: "Dean Winchester",
    studio: "Madhouse",
    vivo: false
  }
]

app.listen(serverPort, () => {
  console.log(`⚡ Server started on http://localhost:${serverPort}`);
});
