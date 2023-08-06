import express, { Router } from "express";
import getPromptData from "../utils/promptResult";

const codeDebuggerRoute: Router = express.Router();

codeDebuggerRoute.post("/", async (req, res) => {
  try {
    const { code } = req.body;

    let prompt = `provide the correct code ${code}`;
    let debugedCode = await getPromptData(prompt);
    res.status(200).json({ code: debugedCode });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default codeDebuggerRoute;
