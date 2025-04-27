import express from "express";
import { rateLimit } from "express-rate-limit";

const app = express();
const port = 3000;

function limiter({ minute = 1, limit = 2 } = {}) {
  return rateLimit({
    windowMs: minute * 60 * 1000,
    limit,
    standardHeaders: true,
    legacyHeaders: false,
  });
}

app.get("/", limiter(), async (req, res) => {
  // await new Promise((res) => setTimeout(res, 1000));
  res.json({ message: "Hello World!" });
});
app.get("/hello", limiter({ limit: 3 }), async (req, res) => {
  // await new Promise((res) => setTimeout(res, 1000));
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
