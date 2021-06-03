var baseFileName = "test1.txt";
var cnt = 1;
var artFileName = "";
var artFileNames = ["Hunters at a halt.jpg", "The arrival of a governess in a merchant's house.jpg", "The last tavern at the outpost.jpg", "Tea party in Mytishchi near Moscow.jpg", "Portrait of A. N. Ostrovsky.jpg"];
console.log("artFileName: " + artFileName);
window.onload = function(){
   localStorage.setItem('Pero1', "Pan.jpg.jpg");
   localStorage.setItem('Pero2', "Six-winged Seraphim.jpg");
   localStorage.setItem('Pero3', "Tamara and the Demon.jpg");
   localStorage.setItem('Pero4', "The Swan Princess.jpg");
   localStorage.setItem('Pero5', "The Sitting Demon.jpg");
   artFileName = localStorage.getItem('Pero1');
   console.log("artFileName1: " + artFileName);
   artFileName = localStorage.getItem('Pero2');
   console.log("artFileName2: " + artFileName);
   artFileName = localStorage.getItem('Pero3');
   console.log("artFileName3: " + artFileName);
   artFileName = localStorage.getItem('Pero4');
   console.log("artFileName4: " + artFileName);
   artFileName = localStorage.getItem('Pero5');
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