import express from "express";
import router from "./routes/index.mjs";

const PORT = 3000;
const app = express();

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
