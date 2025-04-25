import express from "express";
import { rateLimit } from "express-rate-limit";

const app = express();
const port = 3000;

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 2,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

app.get("/", async (req, res) => {
  await new Promise((res) => setTimeout(res, 5000));
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
