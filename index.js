import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { ApolloServer } from "apollo-server-express";
import session from "express-session";
import typeDefs from "./typedefs.js";
import resolvers from "./resolvers.js";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

app.use(express.static("public"));
app.set("trust proxy", 1); // trust first proxy

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // false for localhost and true in prod
  })
);

app.use("/static", express.static(path.join(__dirname, "public")));

server.applyMiddleware({ app });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/todolist", (req, res) => {
  res.sendFile(path.join(__dirname, "./html/todolist.html"));
});

// 1. Todo List
app.get("/public/dist/todolist.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/dist/todolist.js"));
});

app.get("/todolist", (req, res) => {
  res.sendFile(path.join(__dirname, "./html/todolist.html"));
});

// 2. Weather App
app.get("/public/dist/weather.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/dist/weather.js"));
});

app.get("/weather", (req, res) => {
  res.sendFile(path.join(__dirname, "./html/weather.html"));
});

// 3. Tic Tac Toe
app.get("/public/dist/tictactoe.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/dist/tictactoe.js"));
});

app.get("/tictactoe", (req, res) => {
  res.sendFile(path.join(__dirname, "./html/tictactoe.html"));
});

// 4. Stopwatch 
app.get("/public/dist/stopwatch.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/dist/stopwatch.js"));
});

app.get("/stopwatch", (req, res) => {
  res.sendFile(path.join(__dirname, "./html/stopwatch.html"));
});


// 5. Calculator 
app.get("/public/dist/calculator.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/dist/calculator.js"));
});

app.get("/calculator", (req, res) => {
  res.sendFile(path.join(__dirname, "./html/calculator.html"));
});


// 6. eCommerce Site 
app.get("/public/dist/ecommerce.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/dist/ecommerce.js"));
});

app.get("/ecommerce", (req, res) => {
  res.sendFile(path.join(__dirname, "./html/ecommerce.html"));
});


// 7. Recipe App 
app.get("/public/dist/recipe.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/dist/recipe.js"));
});

app.get("/recipe", (req, res) => {
  res.sendFile(path.join(__dirname, "./html/recipe.html"));
});


// 8. Portfolio 
app.get("/public/dist/portfolio.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/dist/portfolio.js"));
});

app.get("/portfolio", (req, res) => {
  res.sendFile(path.join(__dirname, "./html/portfolio.html"));
});


// 9. Chat Application 
app.get("/public/dist/chat.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/dist/chat.js"));
});

app.get("/chat", (req, res) => {
  res.sendFile(path.join(__dirname, "./html/chat.html"));
});


// 10. Video Call App 
app.get("/public/dist/video.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/dist/video.js"));
});

app.get("/video", (req, res) => {
  res.sendFile(path.join(__dirname, "./html/video.html"));
});


// 11. Social Media Dashboard 
app.get("/public/dist/socialmedia.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/dist/socialmedia.js"));
});

app.get("/socialmedia", (req, res) => {
  res.sendFile(path.join(__dirname, "./html/socialmedia.html"));
});


// 12. React Quiz App
app.get("/public/dist/quiz.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/dist/quiz.js"));
});

app.get("/quiz", (req, res) => {
  res.sendFile(path.join(__dirname, "./html/quiz.html"));
});


// 13. React Music Player 
app.get("/public/dist/music.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/dist/music.js"));
});

app.get("/music", (req, res) => {
  res.sendFile(path.join(__dirname, "./html/music.html"));
});


// 14. React Travel App
app.get("/public/dist/travel.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/dist/travel.js"));
});

app.get("/travel", (req, res) => {
  res.sendFile(path.join(__dirname, "./html/travel.html"));
});


// 15. React Stars Rating 
app.get("/public/dist/stars.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/dist/stars.js"));
});

app.get("/stars", (req, res) => {
  res.sendFile(path.join(__dirname, "./html/stars.html"));
});


// 16. React Kanaban Board 
app.get("/public/dist/kanban.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/dist/kanban.js"));
});

app.get("/kanban", (req, res) => {
  res.sendFile(path.join(__dirname, "./html/kanban.html"));
});


app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
);
