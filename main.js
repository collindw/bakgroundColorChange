
var i = 1; 
var j = 1;                 
var k = 1;
var delay = .5;  //delays each cycle of the loop by "delay" milliseconds
var waitTime = 1000;

var r = 256;
var g = 256;
var b = 256;

function colorGradient1() {         
  setTimeout(function() {   
    document.body.style.backgroundColor = 'rgb(' + i + ',' + j + ',' + k + ')';
    i++;                     //  increment the counter
    if (i < 256) {           //  if the red value is < 256, slowly add red.  the other two else's are green, then blue
      colorGradient1();       
    } 
    else if (j<256) {
      colorGradient1();
      j++;  
    }
    else if (k<256) {
      colorGradient1();
      k++;

      
    }
    console.log(i);
    while (i==766) {  //when looking at the source code in the browser, the loop finishes when i=766
                   //...don't know why... I is added every single loop no matter what.  255 * 3 == 765
        document.getElementById("container").innerHTML = 'hello';
        console.log('first color change loops are finished');

        
        const waitForALittle = async () => {
            for (i=0; i<1; i++) {
                await sleep(waitTime);
                document.getElementById("container").innerHTML = 'welcome to my page';
                console.log('🦄'); 

                await sleep(waitTime);
                document.getElementById("container").innerHTML = "I'm so glad that you are here";
              
                await sleep(waitTime);
                document.getElementById("container").innerHTML = "Goodbye";
                await sleep(waitTime);
                
                document.getElementById("container").innerHTML = "";
                console.log(i);
                await sleep(500);

                document.body.style.backgroundColor = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
                break;

                if (r==256){
                    console.log('r is ' + r);
                    
                }
            }
        }
          waitForALittle();
    }    
  }, delay)
}

//trying to fix the code below.  it runs at the same time as the other loop and the 
//counters for i and r go chaotic.  Or does not execute
/*
function colorGradient2() {         
    setTimeout(function() {   
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    r--;                     //  deccrement the counter
    if (r >= 0) {           //  if the red value is > 0, slowly subtract red.  the other two else's are green, then blue
            colorGradient2();       
        } 
        else if (g>=0) {
            colorGradient2();
            g--;  
        }
        else if (b>=0) {
            colorGradient2();
            b--; 
        }
    console.log(r);
    }, delay)
}
*/



//function to make a loop wait
function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

colorGradient1();  //runs the loop to change colors, then when time is i=766, messages start

//colorGradient2();












/*
setInterval(() => {
    moreRed();
}, delay);















    moreRed();
    console.log('red increases');

    moreGreen();
    console.log('green increases');

    moreBlue();
    console.log('blue increases');



//slowly add only red color
const waitForALittle = async () => {    
    function moreRed() {
         for (i=0; i<=256; i++) {
              await sleep(waitTime);
              document.body.style.backgroundColor = 'rgb(' + i + ',' + 0 + ',' + 0 + ')';
         }
    }
}
moreRed();
//slowly add only green after red is max
const waitForALittle = async () => {
    function moreGreen() {
        for (j=0; j<=256; j++) {
            await sleep(waitTime);
            document.body.style.backgroundColor = 'rgb(' + 256 + ',' + j + ',' + 0 + ')';
        }
    }
}

//slowly add only blue after red and blue is max.  Color should be white
const waitForALittle = async () => {
    function moreBlue() {
         for (k=0; k<=256; k++) {
              await sleep(waitTime);
              document.body.style.backgroundColor = 'rgb(' + 256 + ',' + 256 + ',' + k + ')';
         }
    }
}


*/
