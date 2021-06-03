var baseFileName = "test1.txt";
var cnt = 1;
var artFileName = "";
var artsFileNames = ["Lady Agnew of Lohno.jpg", "Miss Helen Terry as Lady Macbeth.jpg", "Mrs. Waldorf Estor Nancy Langhorn.jpg", "Mr. and Mrs. Isaac Newton Phelps Stokes.jpg", "Elsie Palmer.jpg"];
console.log("artsFileName: " + artsFileName);
window.onload = function(){
   localStorage.setItem('Claude1', "Lady Agnew of Lohno.jpg");
   localStorage.setItem('Claude2', "Miss Helen Terry as Lady Macbeth.jpg");
   localStorage.setItem('Claude3', "Mrs. Waldorf Estor Nancy Langhorn.jpg");
   localStorage.setItem('Claude4', "Mr. and Mrs. Isaac Newton Phelps Stokes.jpg");
   localStorage.setItem('Claude5', "Elsie Palmer.jpg");
   artsFileName = localStorage.getItem('Claude1');
   console.log("artFileName1: " + artFileName);
   artsFileName = localStorage.getItem('Claude2');
   console.log("artFileName2: " + artFileName);
   artsFileName = localStorage.getItem('Claude3');
   console.log("artFileName3: " + artFileName);
   artsFileName = localStorage.getItem('Claude4');
   console.log("artFileName4: " + artFileName);
   artsFileName = localStorage.getItem('Claude5');
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
   console.log("Next1=" + picture02.getAttribute("src"));
   picture02.setAttribute('src', "./" + artsFileNames[cnt]);
   console.log("Next2=" + picture02.getAttribute("src"));
}