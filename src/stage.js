const background = document.querySelector('img[alt="background"]');

 export function drawBackground() {
context.drawImage(background, 0, 0);
}