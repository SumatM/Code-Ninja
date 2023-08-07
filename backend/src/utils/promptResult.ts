import { openai } from "../openAiConnection/connection";

async function getPromptData(prompt: string) {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a code convert,debugger and code qualit check bot. You have provide the requested promt to debug, convert or quality check",
        },
        { role: "user", content: `${prompt}` },
      ],
      max_tokens: 100,
      temperature: 0.8,
    });

    const convertedCode = response.data.choices[0].message?.content;

    return convertedCode;
  } catch (err: any) {
    return err;
  }
}

export default getPromptData;
