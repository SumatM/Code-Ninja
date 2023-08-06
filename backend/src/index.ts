import { Express } from "express";
import convertCodeRouter from "./route/convertcode.route";
import codeDebuggerRoute from "./route/codeDebugger.route";
import codeQualityRoute from "./route/codeQualityChecker";
const express = require("express");

const app: Express = express();

app.use(express.json());

app.use("/convert", convertCodeRouter);

app.use("/debug", codeDebuggerRoute);

app.use("/quality", codeQualityRoute);

app.get("/", (req, res) => {
  try {
    res
      .status(200)
      .json({ mesage: "Welcome to code Converter , code debugger API" });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(8080, () => {
  try {
    console.log("Server is running");
  } catch (err: any) {
    console.log(err.message);
  }
});
