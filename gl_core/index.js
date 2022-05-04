import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectDB from "./config/db.js";
import usersRoutes from "./routes/usersRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();
conectDB();

const domainPer = ['http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (domainPer.indexOf(origin)!== -1) {
      //Origin allowed
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use("/api/users", usersRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor arrancando puerto: ${PORT}`);
});
