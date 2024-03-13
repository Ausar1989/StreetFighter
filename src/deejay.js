const djayFS = document.querySelector('img[alt="djayFS"]');



const position = {
    x: 80,
    y: 110
  }

  let velocity = 1
 export function updateDjayFS(context) {
  position.x += velocity;

  if (position.x > context.canvas.width - djayFS.width || position.x < 0) {
    velocity = -velocity;
  }
 }

 export function drawDjayFS(context) { 
  context.drawImage(djayFS, position.x, position.y);
 }