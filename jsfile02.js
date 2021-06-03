var baseFileName = "test1.txt";
var cnt = 1;
var artFileName = "";
var artsFileNames = ["Impression of the Rising Sun.jpg", "Water Lilies.jpg", "Lady with an Umbrella.jpg", "Field of poppies at Argenteuil.jpg", "Terrace at Sainte-Adresse.jpg"];
console.log("artsFileName: " + artsFileName);
window.onload = function(){
   localStorage.setItem('Dali1', "Impression of the Rising Sun.jpg");
   localStorage.setItem('Dali2', "Water Lilies.jpg");
   localStorage.setItem('Dali3', "Lady with an Umbrella.jpg");
   localStorage.setItem('Dali4', "Terrace at Sainte-Adresse.jpg");
   localStorage.setItem('Dali5', "Field of poppies at Argenteuil.jpg");   
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
   console.log("Next1=" + picture03.getAttribute("src"));
   picture03.setAttribute('src', "./" + artsFileNames[cnt]);
   console.log("Next2=" + picture03.getAttribute("src"));
}