const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: "./frontend" }); // Adjust path if your Next.js app is in a different folder
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Backend API routes
  const backend = require("./backend/server.js"); // Path to your backend app entry file
  server.use("/api", backend); // All API routes will be prefixed with /api

  // Frontend pages
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
