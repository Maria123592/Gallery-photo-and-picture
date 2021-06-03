var baseFileName = "test1.txt";
var cnt = 1;
var artFileName = "";
var artsFileNames = ["The Persistence of Memory.jpeg", "galatea-with-spheres.jpg", "female figure at the window.jpg", "facewars.jpg", "meditative rose.jpg"];
console.log("artsFileName: " + artsFileName);
window.onload = function(){
   localStorage.setItem('Dali1', "The Persistence of Memory.jpeg");
   localStorage.setItem('Dali2', "galatea-with-spheres.jpg");
   localStorage.setItem('Dali3', "female figure at the window.jpg");
   localStorage.setItem('Dali4', "facewars.jpg");
   localStorage.setItem('Dali5', "meditative rose.jpg");   
   artsFileName = localStorage.getItem('Dali1');
   console.log("artFileName1: " + artFileName);
   artsFileName = localStorage.getItem('Dali2');
   console.log("artFileName2: " + artFileName);
   artsFileName = localStorage.getItem('Dali3');
   console.log("artFileName3: " + artFileName);
   artsFileName = localStorage.getItem('Dali4');
   console.log("artFileName4: " + artFileName);
   artsFileName = localStorage.getItem('Dali5');
   console.log("artFileName5: " + artFileName);
   for(let i=0; i<localStorage.length; i++) {
     let key = localStorage.key(i);
      console.log(`${key}: ${localStorage.getItem(key)}`);
      artsFileNames[i] = `${localStorage.getItem(key)}`;
      console.log(artFileNames[i]);
    }
}
function onClickNext() {
   console.log("cnt= " + cnt + ": " + artsFileNames[cnt] + "\n");
   cnt++;
   if (cnt > 4) {
     cnt = 0;
   }
   console.log("Next1=" + picture04.getAttribute("src"));
   picture04.setAttribute('src', "./" + artsFileNames[cnt]);
   console.log("Next2=" + picture04.getAttribute("src"));
}Vino