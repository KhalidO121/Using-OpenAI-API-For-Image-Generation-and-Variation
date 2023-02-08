import { Configuration, OpenAIApi } from 'openai';
import { createReadStream, writeFileSync} from 'fs';
import fetch from "node-fetch";


const configuration = new Configuration({
  apiKey: myAPIKey
});

const openai = new OpenAIApi(configuration);

const result = await openai.createImageVariation(
  createReadStream('./app/OpenAIGeneratedImage.png'),
  1,
  "1024x1024"
);

const url = result.data.data[0].url;
console.log(url);

const imageResult = await fetch(url);
const blob = await imageResult.blob();
const buffer = Buffer.from(await blob.arrayBuffer());
writeFileSync('./app/OpenAIGeneratedImage.png', buffer);