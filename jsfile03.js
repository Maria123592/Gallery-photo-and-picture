var baseFileName = "test1.txt";
var cnt = 1;
var artFileName = "";
var artFileNames = ["Starry Night.jpeg", "Irises.jpeg", "Self-portrait.jpeg", "Starry Night over the Rhone.jpeg", "Sunflowers.jpeg"];
console.log("artFileName: " + artFileName);
window.onload = function(){
   localStorage.setItem('Gog1', "Starry Night.jpeg");
   localStorage.setItem('Gog2', "Irises.jpeg");
   localStorage.setItem('Gog3', "Self-portrait.jpeg");
   localStorage.setItem('Gog4', "Starry Night over the Rhone.jpeg");
   localStorage.setItem('Gog5', "Sunflowers.jpeg");
   artFileName = localStorage.getItem('Gog1');
   console.log("artFileName1: " + artFileName);
   artFileName = localStorage.getItem('Gog2');
   console.log("artFileName2: " + artFileName);
   artFileName = localStorage.getItem('Gog3');
   console.log("artFileName3: " + artFileName);
   artFileName = localStorage.getItem('Gog4');
   console.log("artFileName4: " + artFileName);
   artFileName = localStorage.getItem('Gog5');
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
   kartina01.setAttribute('src', "./" + artFileNames[cnt]);
   console.log("Next1=" + kartina01.getAttribute("src"));
   kartina01.setAttribute('src', "./" + artFileNames[cnt]);
   console.log("Next2=" + kartina01.getAttribute("src"));
}