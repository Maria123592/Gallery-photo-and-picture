console.log("Test: Ok");

//console.log("kartina01" + kartina01);
//console.log("kartina" + kartina01[0]);

//onClickStart
function onClickStart() {
  isStarted = true;
  console.log("Clicked button: Start.isStarted" + isStarted);
}

//onClickStop
function onClickStop() {
  isStarted = false;
  console.log("Clicked button: Stop.isStarted" + isStarted);
}




var artArray = ["Lady Agnew of Lohno.jpg", "Miss Helen Terry as Lady Macbeth.jpg", "Mrs. Waldorf Estor Nancy Langhorn.jpg", "Mr. and Mrs. Isaac Newton Phelps Stokes.jpg", "Elsie Palmer.jpg"];
console.log("0: " + artArray[0] + "\n"); 
console.log("1: " + artArray[1] + "\n"); 
console.log("2: " + artArray[2] + "\n");
console.log("3: " + artArray[3] + "\n");
console.log("4: " + artArray[4] + "\n");
var cnt = 0;
//onClickNext()
function onClickNext() {
   console.log("cnt= " + cnt + ": " + artArray[cnt] + "\n");
   cnt++;
   if (cnt > 4) {
     cnt = 0;
   }
   <!--console.log("Next1=" + picture02.getAttribute("src"));
   picture02.setAttribute('src', "./" + artArray[cnt]);
   console.log("Next2=" + picture02.getAttribute("src"));-->
}

