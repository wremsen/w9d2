import View from "./ttt-view.js";
import Game from "../ttt_node/game.js";

document.addEventListener("DOMContentLoaded", () => {

  let game = new Game()
  let view = new View(game, "any")

});

// this is a comment;