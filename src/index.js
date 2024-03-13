import express from "express";
import { drawDjayFS, updateDjayFS } from "./deejay.js";
import { drawRyuFS, updateRyuFS } from "./ryu.js";
import { drawBackground } from "./stage.js";

const PORT = process.env.PORT || 5500;
const app = express();

const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
}

window.onload = function() {
  const canvasEl = document.querySelector('canvas');
  const context = canvasEl.getContext("2d");

  canvasEl.width = GameViewport.WIDTH;
  canvasEl.height = GameViewport.HEIGHT;

  

  function frame() {
   updateDjayFS(context);
   updateRyuFS(context);

   drawDjayFS(context);
   drawBackground(context);
   drawRyuFS(context);

    window.requestAnimationFrame(frame);
  }
  window.requestAnimationFrame(frame);
}


app.listen(PORT, function() {
  console.log("listing on port: " + PORT);
})