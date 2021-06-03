var baseFileName = "test1.txt";
var cnt = 1;
var artFileName = "";
var artFileNames = ["Twilight.jpg", "Spring.jpg", "Golden Autumn.jpg", "March.jpg", "Birch grove.jpg"];
console.log("artFileName: " + artFileName);
window.onload = function(){
   localStorage.setItem('Mixa1', "Pan.jpg.jpg");
   localStorage.setItem('Mixa2', "Six-winged Seraphim.jpg");
   localStorage.setItem('Mixa3', "Tamara and the Demon.jpg");
   localStorage.setItem('Mixa4', "The Swan Princess.jpg");
   localStorage.setItem('Mixa5', "The Sitting Demon.jpg");
   artFileName = localStorage.getItem('Mixa1');
   console.log("artFileName1: " + artFileName);
   artFileName = localStorage.getItem('Mixa2');
   console.log("artFileName2: " + artFileName);
   artFileName = localStorage.getItem('Mixa3');
   console.log("artFileName3: " + artFileName);
   artFileName = localStorage.getItem('Mixa4');
   console.log("artFileName4: " + artFileName);
   artFileName = localStorage.getItem('Mixa5');
   console.log("artFileName5: " + artFileName);
   for(let i=0; i<localStorage.length; i++) {
     let key = localStorage.key(i);
      console.log(`${key}: ${localStorage.getItem(key)}`);
      artFileNames[i] = `${localStorage.getItem(key)}`;
      console.log(artFileNames[i]);
    }
}
function onClickNext() {
   console.log("cnt= " + cnt + ": " + artFileNames[cnt] + "\n");
   cnt++;
   if (cnt > 4) {
     cnt = 0;
   }
   console.log("Next1=" + picture07.getAttribute("src"));
   picture07.setAttribute('src', "./" + artFileNames[cnt]);
   console.log("Next2=" + picture07.getAttribute("src"));
}