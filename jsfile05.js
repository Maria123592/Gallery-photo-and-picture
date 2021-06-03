var baseFileName = "test1.txt";
var cnt = 1;
var artFileName = "";
var artFileNames = ["", "", "", "", ""];
console.log("artFileName: " + artFileName);
window.onload = function(){
   localStorage.setItem('Vino1', "Starry Night.jpeg");
   localStorage.setItem('Vino2', "Irises.jpeg");
   localStorage.setItem('Vino3', "Self-portrait.jpeg");
   localStorage.setItem('Vino4', "Starry Night over the Rhone.jpeg");
   localStorage.setItem('Vino5', "Sunflowers.jpeg");
   artFileName = localStorage.getItem('Vino1');
   console.log("artFileName1: " + artFileName);
   artFileName = localStorage.getItem('Vino2');
   console.log("artFileName2: " + artFileName);
   artFileName = localStorage.getItem('Vino3');
   console.log("artFileName3: " + artFileName);
   artFileName = localStorage.getItem('Vino4');
   console.log("artFileName4: " + artFileName);
   artFileName = localStorage.getItem('Vino5');
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
   console.log("Next1=" + picture05.getAttribute("src"));
   picture05.setAttribute('src', "./" + artFileNames[cnt]);
   console.log("Next2=" + picture05.getAttribute("src"));
}