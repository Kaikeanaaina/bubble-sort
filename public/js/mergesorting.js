// 'use strict';

// var mergeModule = module.exports = function(){
//   var object = {};


//   object.mergeSorting= function(array){
//       var left = [];
//       var right = [];
//       var middle = Math.floor(array.length/2);

//       if(array.length===1){

//       // var newArray =[];
//       // var a = 0;
//       // var b = 0;
//       // console.log(left+ 'aaaaaaaa');
//       // console.log(right+ 'bbbbbbbbb');
//       // console.log(left.length+right.length);
//       // for(var j = 0 ; j < (left.length + right.length) ; j++ ){
//       //   if(left[a]<right[b]){
//       //     newArray.push(left);
//       //     a++;
//       //   } //if
//       //   else{
//       //     newArray.push(right);
//       //     b++;
//       //   } //else
//       // }//for

//       //return newArray + ' new array ';
//       return 'newArray';
// //"=========================================================="
//       //return array;


//       }//if

//       else{


//           for(var i = 0; i<array.length;i++){

//             if(i<middle){
//               left.push(array[i]);
//             }//if
//             else{
//               right.push(array[i]);

//               }//else
//           }//for
//           //*******the recursion happens here

//           console.log(left.length+right.length);
//           console.log(left);
//           console.log(right);
//           console.log('==========');
//           console.log(mergeModule().mergeSorting(left));
//           console.log('********');
//           console.log(mergeModule().mergeSorting(right));
//           console.log('^^^^^^^^^^^^^');
//           // mergeModule().mergeSorting(left);
//           // return right;
//           //return mergeModule().mergeSorting(right).concat(mergeModule().mergeSorting(left));

//       }//else
//       return array + ' aloha';


//   };//func
//   return object;
// };//var

// var nums = [3,2,1,4];
// //console.log(nums);

// console.log(mergeModule().mergeSorting(nums));
