import { OpenAIApi,Configuration } from 'openai';
require('dotenv').config()



const configuration = new Configuration({
  apiKey: process.env.OPENAI_API,
});

 export const openai = new OpenAIApi(configuration);



