import express from "express";
import multer from "multer";
import cors from "cors";
import mongoose from "mongoose";
import File from "./models/fileSchema.js"
const app = express();



app.use(cors());

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(
    "mongodb+srv://swwsdf:swwsdf1@cluster0.hqjo9xp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));


app.get("/files/:userId", async (req, res) => {
  const { userId } = req.params
  try {
    const files = await File.find(userId ? { userId } : {});
    res.json(files);
  } catch (err) {
    res.status(500).send("Error fetching files");
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
;

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }

    const userId = req.body.userId; // Assuming userId is sent in the request body

    if (!userId) {
      return res.status(400).send("userId is required");
    }

    const newFile = new File({
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size,
      data: req.file.buffer,
      userId: userId,
    });

    await newFile.save();

    res.status(201).send("File uploaded successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
