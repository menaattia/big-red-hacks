import vision from "@google-cloud/vision";

async function quickstart(img: string) {
  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.labelDetection(img);
  const labels = result.labelAnnotations;
  console.log("Labels:");
  labels?.forEach((label: any) => console.log(label.description));
}
quickstart("stock1.jpeg");
