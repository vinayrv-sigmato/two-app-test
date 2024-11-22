const express = require("express");
const router = express.Router();

// const app = express();
// const port = 5000;

// app.use(cors());

// app.get("/api/hello", (req, res) => {
//   res.json({ message: "Hello from the backend using Express!" });
// });

router.get("/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

module.exports = router;
