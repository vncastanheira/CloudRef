import { Graphics } from "pixi.js";

export function drawHandle(color) {
    let handleObj = new Graphics().svg(`
        <svg
   width="210mm"
   height="297mm"
   viewBox="0 0 210 297"
   version="1.1"
   id="svg1"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs1" />
  <g
     id="layer1">
    <rect
       style="fill:none;stroke:${color};stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
       id="rect1"
       width="200"
       height="200"
       x="62.419781"
       y="81.916122" />
  </g>
</svg>    
    `);
    return handleObj;
}