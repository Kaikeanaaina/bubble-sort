var nums = [50,4,63,772,5,94,8,7];

function partitions(array){

    var pivot = array[0];
    var left = [];
    var right = [];

    //==========================================================

    if(array.length <=1){

        return array;

    }
    else{
      for(var i = 1 ; i < array.length ; i++){
          if(pivot > array[i]){
              left.push(array[i]);
          }//if
          else if(pivot<= array[i]){
              right.push(array[i]);
          } //else


          console.log(left);
        //console.log(left.length + " left length " + i);

          console.log(right);
        //   console.log(right.length+ " right length "+ i);
          console.log('============');



      }//for

        return partitions(left).concat(pivot,partitions(right));



    }//else



}

partitions(nums);