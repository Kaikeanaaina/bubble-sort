module.exports = function bubbleSort (array){
var arrayNum = [5,1,4,2,8];
var counter = null;
var swaps = true;

    if(swaps===false){
        return array;
    }

    else{
        swaps= false;
        for(var i = 0;i<array.length;i++){


            if(array[i]>array[i+1]){
                var remove = array.splice( i, 1);

                array.splice( i+1, 0, remove[0]);
                swaps=true;
            }
        }//for

    }//else
    return bubbleSort(array);

};

//Implement a function that will take an
//input Array and apply the bubble sort
//algorithm to sort the input
//and return the number of moves that were
//necessary to sort the Array.

//recursive


//takes an array
//compares the index 0 and the index 1
// if index 0 is > index 1
//switch them




