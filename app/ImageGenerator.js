import { Configuration, OpenAIApi } from 'openai';
import { writeFileSync} from 'fs';
import fetch from "node-fetch";


const configuration = new Configuration({
  apiKey: myAPIKey
});

const openai = new OpenAIApi(configuration);

const prompt = "Dinosaur going to work";

const result = await openai.createImage({
  prompt,
  n:1,
  size:"1024x1024",
  user:'kidrock420'
});

const url = result.data.data[0].url;
console.log(url);

const imageResult = await fetch(url);
const blob = await imageResult.blob();
const buffer = Buffer.from(await blob.arrayBuffer());
writeFileSync('./app/OpenAIGeneratedImage.png', buffer);