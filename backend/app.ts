import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import vision from "@google-cloud/vision";

const app: Express = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan("combined"));

// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.get("/", async (req, res) => {
  try {
    res.status(200).send("success");
  } catch (err) {
    console.error(err);
    res.status(400).send("Error");
  }
});

app.post("/", async (req, res) => {
  const { src } = req.body;
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.labelDetection("stock1.jpeg");
  let labels = result.labelAnnotations;
  labels = labels?.map((label: any) => label.description);
  res.status(200).send(labels);
});

const port: string = process.env.PORT || "8080";

// eslint-disable-next-line
app.listen(parseInt(port), () =>
  console.log(`Server running on port: ${port}`)
);
