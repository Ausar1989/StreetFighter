const ryuFS = document.querySelector('img[alt="ryuFS"]');

const position = {
    x: 80,
    y: 110
  }

  let velocity = -1
 export function updateRyuFS(context) {
  position.x += velocity;

  if (position.x > context.canvas.width - ryuFS.width || position.x < 0) {
    velocity = -velocity;
  }
 }

 export function drawRyuFS(context) { 
  context.drawImage(ryuFS, position.x, position.y);
 }