import axios from "axios";

let baseURL = "http://localhost:8080/";

interface Convert {
  code: string;
  language?: string;
}

interface Input {
  endpoint: string;
  input: Convert;
}


async function getResponse(input: Input): Promise<string | any> {
  try {
    const response = await axios.post(`${baseURL}${input.endpoint}`, input.input);
    console.log(response.data.code);
    return response.data.code;
  } catch (err:any) {
    console.log(err);
    return err.message;
  }
}


export { getResponse };
