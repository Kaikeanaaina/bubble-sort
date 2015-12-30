var nums = [50,4,63,772,5,94,8,7];

var quickSortModule = module.exports = function(){

    var pivot = array[0];
    var left = [];
    var right = [];

    //==========================================================
    return{
      partitions : function(array){
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




      }//for

        return this.partitions(left).concat(pivot,this.partitions(right));



    }//else

  }
 };
};

//partitions(nums);