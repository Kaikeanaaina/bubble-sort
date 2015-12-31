var num = [5,1,4,2,8,10,14,3,6,7];



var bubbleModule = module.exports = (function (){

var object = {};
var swaps = true;

  object.bubbleSort = function(array){

    if(swaps===false){ //this will be the base case
      return array;
    }//if

    else{

      swaps=false; // when called again it will go to the base case
      //go through the array
      for(var i = 0 ; i < array.length ; i++){

        if(array[i]>array[i+1]){
          var remove = array.splice( i,1); //the i is where the splice will start
          //splice also holds the value of what was removed into an array
          console.log(remove + ' remove');
          array.splice( i+1,0,remove[0]);// we put the zero in remove, because remove is an array
          swaps=true; // if it had to swap it won't go to the base case
        }//if

        //goes back into the base

      }//for
        console.log(array);
        //return array;
        return object.bubbleSort(array);


    }//else

    //return object.bubbleSort(array);

  };//func

return object;


 });

//console.log(bubbleModule().bubbleSort(num));

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




