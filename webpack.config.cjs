const path = require("path");

module.exports = {
  entry: {
    todolist: "./src/todolist.js",
    chat: "./src/chat.js",
    calculator: "./src/calculator.js",
    ecommerce: "./src/ecommerce.js",
    kanban: "./src/kanban.js",
    music: "./src/music.js",
    portfolio: "./src/portfolio.js",
    quiz: "./src/quiz.js",
    recipe: "./src/recipe.js",
    socialmedia: "./src/socialmedia.js",
    stars: "./src/stars.js",
    stopwatch: "./src/stopwatch.js",
    tictactoe: "./src/tictactoe.js",
    travel: "./src/travel.js",
    video: "./src/video.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/, // Regex for all JavaScript file
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  resolve: {
    extensions: [".*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "public/dist"),
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./public"),
  },
};
