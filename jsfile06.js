var baseFileName = "test1.txt";
var cnt = 1;
var artFileName = "";
var artFileNames = ["Twilight.jpg", "Spring.jpg", "Golden Autumn.jpg", "March.jpg", "Birch grove.jpg"];
console.log("artFileName: " + artFileName);
window.onload = function(){
   localStorage.setItem('Lev1', "Twilight.jpg");
   localStorage.setItem('Lev2', "Spring.jpg");
   localStorage.setItem('Lev3', "Golden Autumn.jpg");
   localStorage.setItem('Lev4', "March.jpg");
   localStorage.setItem('Lev5', "Birch grove.jpg");
   artFileName = localStorage.getItem('Lev1');
   console.log("artFileName1: " + artFileName);
   artFileName = localStorage.getItem('Lev2');
   console.log("artFileName2: " + artFileName);
   artFileName = localStorage.getItem('Lev3');
   console.log("artFileName3: " + artFileName);
   artFileName = localStorage.getItem('Lev4');
   console.log("artFileName4: " + artFileName);
   artFileName = localStorage.getItem('Lev1');
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
   console.log("Next1=" + picture06.getAttribute("src"));
   picture06.setAttribute('src', "./" + artFileNames[cnt]);
   console.log("Next2=" + picture06.getAttribute("src"));
}