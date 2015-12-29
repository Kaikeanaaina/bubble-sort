var nums = [5,23,4,10,2,25,45,38];

function partitions(array){
    var total = 0;
    for(var s = 0 ; s < array.length ; s++){
        total += array[s];
    }
    var pivot = total/array.length;
    console.log(pivot);
    var left = [];
    var right = [];

    for(var i = 0 ; i < array.length ; i++){

        if(pivot > array[i]){
            left.push(array[i]);

        }//if

        else if(pivot<= array[i]){
            right.push(array[i]);

        } //else
    }

    var together = left.concat(right);
    console.log(left);
    console.log(left.length);
    console.log(right);
    console.log(right.length);

    return together;
}

partitions(nums);