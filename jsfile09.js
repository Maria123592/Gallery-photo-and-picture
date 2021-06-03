var baseFileName = "test1.txt";
var cnt = 1;
var artFileName = "";
var artFileNames = ["couple.jpg", "lake.jpg", "lighthouse.jpg", "lotus.jpg", "pink.jpg", "river.jpg", "switzerland.jpg", "wineglasses.jpg", "trees.jpg"];
console.log("artFileName: " + artFileName);
window.onload = function(){
   localStorage.setItem('foto1', "couple.jpg");
   localStorage.setItem('foto2', "lake.jpg");
   localStorage.setItem('foto3', "lighthouse.jpg");
   localStorage.setItem('foto4', "lotus.jpg");
   localStorage.setItem('foto5', "pink.jpg");
   localStorage.setItem('foto6', "river.jpg");
   localStorage.setItem('foto7', "switzerland.jpg");
   localStorage.setItem('foto8', "wineglasses.jpg");
   localStorage.setItem('foto9', "trees.jpg");
   artFileName = localStorage.getItem('foto1');
   console.log("artFileName1: " + artFileName);
   artFileName = localStorage.getItem('foto2');
   console.log("artFileName2: " + artFileName);
   artFileName = localStorage.getItem('foto3');
   console.log("artFileName3: " + artFileName);
   artFileName = localStorage.getItem('foto4');
   console.log("artFileName4: " + artFileName);
   artFileName = localStorage.getItem('foto5');
   console.log("artFileName5: " + artFileName);
   artFileName = localStorage.getItem('foto6');
   console.log("artFileName6: " + artFileName);
   artFileName = localStorage.getItem('foto7');
   console.log("artFileName7: " + artFileName);
   artFileName = localStorage.getItem('foto8');
   console.log("artFileName8: " + artFileName);
   artFileName = localStorage.getItem('foto9');
   console.log("artFileName9: " + artFileName);

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
   if (cnt > 8) {
     cnt = 0;
   }
   /*console.log("Next1=" + foto01.getAttribute("src"));
   foto01.setAttribute('src', "./" + artFileNames[cnt]);
   console.log("Next2=" + foto01.getAttribute("src"));*/
}