import { Onetwothree } from './src/classOnetwothree.js';
let controller = new Onetwothree({
  selector: '#onetwothree',
});

// controls
document.getElementById('backward').addEventListener('click', function(){ controller.previousSlide() });
document.getElementById('forward').addEventListener('click', function(){ controller.nextSlide() });
document.getElementById('check').addEventListener('click', function () { controller.check() });
document.getElementById('edit').addEventListener('click', function(){ console.log("edit() function not implemented yet.") });
