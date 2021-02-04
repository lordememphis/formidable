import express from "express";
import formidable from "formidable";

const app: express.Application = express();

app.get("/", (req, res, next) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/file-upload", (req, res, next) => {
  const form = new formidable.IncomingForm();
  console.log(req);
  form.parse(req);

  form.on("fileBegin", (name, file) => {
    file.path = `${__dirname}/uploads/${file.name}`;
  });

  form.on("file", (name, file) => {
    console.log(`Uploaded${file.name}`);
  });

  res.sendFile(`${__dirname}/index.html`);
});

app.listen(3000, () => console.log("listening on 3000"));
