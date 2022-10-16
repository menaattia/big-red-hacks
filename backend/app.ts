import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import axios from "axios";
import vision from "@google-cloud/vision";

export const db = "https://api.jsonbin.io/v3/b/" + process.env.BIN;

export const getDB = async (url: string) => {
  const response: any = await axios
    .get(url + "/latest", {
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": `${process.env.X_MASTER_KEY}`,
      },
    })
    .then((response) => response.data);

  const db = await response;
  return db;
};

const updateDb = async (apiURL: string) => {
  const oldDB = await getDB(apiURL);
  const response: any = await axios.put(apiURL, {
    body: JSON.stringify(oldDB),
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": `${process.env.X_MASTER_KEY}`,
    },
  });
  const newDB = await response;
  return newDB;
};

const app: Express = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan("combined"));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.get("/", async (req, res) => {
  try {
    res.status(200).send(getDB(db));
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
