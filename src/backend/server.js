console.log("Server starting...");
require("dotenv").config();
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("CopilotOps backend running 🚀");
});

app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
}).on('error', (err) => {
  console.error('Server error:', err);
});
