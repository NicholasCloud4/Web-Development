
function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var output = [];
        for(var i = 0; i < n; i++){
            if(n === 1){
                output = [0];
            } else if(n === 2){
                output = [0, 1];
            } else{
                output = [0,1];
                for(var i = 2; i < n; i++){
                    output.push(output[i - 2] + output[i - 1]);
                }
            }
        }
        return output;
    //Do NOT change any of the code below 👇
    }

    var array = fibonacciGenerator(10);
    console.log(array);