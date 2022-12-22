let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Soy Ing. Sistemas Computacionales-Programadora Web y lo apredi en Tecnolochicas')
  .pauseFor(200)
  .deleteChars(10)
  .start();
