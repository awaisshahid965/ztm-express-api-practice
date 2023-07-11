const express = require("express");
const friendsRouter = require("./routes/friends.router");

const app = express();

const PORT = 3000;

// middlewares
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const timeToProcessRequest = Date.now() - start;
  console.log(
    `${req.method} ${req.baseUrl}${req.url} ${timeToProcessRequest}ms`
  );
});

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("server running...");
});

app.use("/friends", friendsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
