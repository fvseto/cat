var canvas = document.getElementById('canvas1');
var context = canvas.getContext('2d'); 

function start1() { 
    function loadChars() {
        canvas.width = canvas.width;
        var count=0;
        var col=0;
        for(var i=0; i<60; i++) {
            let num= Math.floor(Math.random() * 4);
            var char;
            if(num==0) {
                char="A";
            }else if(num==1) {
                char="T";
            }else if(num==2) {
                char="C";
            }else if(num==3) {
                char="G";
            }else{
                char="lame";
            }
            context.font = "20px Arial";
            context.fillText(char,15*(count+1)+100,(col)*50+20);
            count++;
            if(count==15) {
                count=0;
                col++;
            }
        }

    }
    loadChars();
}
function start2() {
    function loadChars() {
        canvas.width = canvas.width;
        var count=0;
        var col=0;
        var arr=[];
        var catLoc=[];
        catIndex=0;
        for(var i=0; i<60; i++) {
            let num= Math.floor(Math.random() * 4);
            var char;
            if(num==0) {
                char="A";
            }else if(num==1) {
                char="T";
            }else if(num==2) {
                char="C";
            }else if(num==3) {
                char="G";
            }
            arr[i]=char;
        }
        for(var i=0; i<60; i++){
            context.fillStyle= "black";
            context.font = "20px Arial";
            context.fillText(arr[i],15*(count+1)+100,(col)*50+20);
            count++;
            if(count==15) {
                count=0;
                col++;
            }
            if(i==59) {
                count=0;
                col=0;
            }
        }
        for (var i = 1; i <= 1; i++) {
            var tick = function(i) {
                return function() {
                    for(var j=0; j<58; j++) {
                        if(arr[j]=="C") {
                            if(arr[j+1]=="A") {
                                if(arr[j+2]=="T") {
                                    catLoc[catIndex]=j;
                                    catIndex++;
                                }
                            }
                        }
                    }
                    for(var j=0; j<60; j++){
                        for(var k=0; k<catIndex; k++) {
                            if(j>=catLoc[k] && j<=(catLoc[k]+2)){
                                context.fillStyle= "red";
                                console.log("PLEASE");
                            }
                        }
                        context.font = "20px Arial";
                        context.fillText(arr[j],15*(count+1)+100,(col)*50+20);
                        count++;
                        if(count==15) {
                            count=0;
                            col++;
                        }
                        context.fillStyle= "black";
                    }
                    console.log(i);
                }
            };
            setTimeout(tick(i), 5000 * i);
        }
        
        
    }
    loadChars();
}
