import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middlewares/middlewares.js";
import adminRouter from "./routes/adminRouter.js";
import morgan from "morgan";
import operatorRouter from "./routes/operatorRouter.js";
import deviceRouter from "./routes/deviceRouter.js";
import customerRouter from "./routes/customerRouter.js";
const app = express();
   
app.use(morgan("dev"));
const corsOptions = {
  origin: true,
  methods:"GET,POST,PUT,DELETE,PATCH",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const PORT = 8080;
connectDB();
app.get("/api", (req, res) => res.send("CONGRATS ,YOU SUMMONED VIZNX"));

app.use("/api/admin", adminRouter);
app.use("/api/operator", operatorRouter);
app.use("/api/customer", customerRouter);
app.use("/api/device", deviceRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`server listen on http://localhost:${PORT}`)
);
