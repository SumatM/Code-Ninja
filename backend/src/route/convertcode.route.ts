import express, { Router } from "express";
import getPromptData from "../utils/promptResult";

const convertCodeRouter:Router = express.Router();

convertCodeRouter.post("/", async (req, res) => {
  try {
    const { code, language } = req.body;
    let prompt = `Convert the ${code} in ${language} without any comments`;
    let convertedCode = await getPromptData(prompt);
    res.status(200).json({ code: convertedCode });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default convertCodeRouter;
