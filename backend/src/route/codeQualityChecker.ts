import express, { Router } from "express";
import getPromptData from "../utils/promptResult";

const codeQualityRoute: Router = express.Router();

codeQualityRoute.post("/", async (req, res) => {
  try {
    const { code } = req.body;

    let prompt = `Give the bullet points to improve the code quality ${code} in 40 words`;
    let qualityComment = await getPromptData(prompt);
    res.status(200).json({ code: qualityComment });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default codeQualityRoute;
