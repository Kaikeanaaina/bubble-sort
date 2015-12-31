#Sort

### Quick sort
**explain**

This chooses a number, and sorts all the following number into two groups.
One group will be smaller and one group will be bigger.
After the groups are made, within the groups they do the same thing until there is one number left to sort.
last, by now, all the groups should be sot by number, then we sewed them back together in to one giant group again

**Psuedo Code**

'''

      make the first number in the array the pivot point
      make two empty arrays, declared as 'left' and 'right'

      make a base case
        if
          once the array.length is equal to 1

        else
          for loop through the array starting after the pivot point

            if the array[index] is smaller then the pivot
              push the index in the left array, which holds all numbers smaller than the pivot
            else
              push the index in the right array, which holds all number bigger than the pivot

            return an array by concatenating the left, pivot , and right



'''

**best case**

if the pivot's value is in the middle
and the groups are borken evenly to both side of the pivot

**worst case**
if the pivot's value is leaning more a higher or lower part of the

---

### Bubble sort
**explain**
This sorts a number by going walking the number through the line one at a time.
The first number is compared to the next numbers until it comes to a number that's bigger than it
after the first number finds its place in line, now the it's the seconds number turn to find a spot in line until it hit a number bigger in it.
We need make sure that every number in line is checked.

**Psuedo Code**

'''

          declase a swap to true to see the array is being swapped
          set a base case
            if swap is false
              this will return the arrya

            else will go through the array to swap numbers
              for loop to go through the array
                another for loop to swap the numbers
                if the number is bigger the next number swap it
                else don't switch it,
                move continue to the next index in the array and continue comparing

              recursion happens here. it will get recursing until swaps can't happen
              then it will unroll
              the array will return


'''

**best case**
little amounts in the array

**worst case**
if there was a long array like a 100000 things in the array

---

### Merge sort
**explain**
This sort keeps on breaking the line into halves and more halves until the group has only one number in it.
Once the groups keeps breaking into more groups until it comes down to one thing in the group
each groups of numbers come back together in a line putting the smallest number first into the bigger group.
eventually, all groups will come back together in a big group from smallest to biggest.

**Psuedo Code**

'''

              make a base case
              if
                will unroll when the length of the array is 1

              else
                put if through a for loop
                that will divide the array into two arrays
                 recursion happens here to both of the array

              it will then compare both first index of the arrays and push it into in a new array
              for loop
                declare an array that will be the sum of both array lengths, this is so that we can compare enough times for all index of arrays
                declare two variables that each equal to 0
                compare both of the arrays that were separated
                push the smallest of both arrays into one array

                return array


'''

**best case**
if there aren't a lot of things in the array

**worst case**
if there are a lot of things in the array

---

### Insertion sort
**explain**
This sort goes throught the whole line of numbers.
it goes to each number and checks to see if the number infront of it is bigger than itself.
if it is bigger than itself, it moves infront of the bigger previous number, until it finds a spot behind a smaller number than itself
If the whole line of numbers goes through this, it will be in order

**Psuedo Code**

'''
make base case
  if there is no swapping
    return the array

  else
    for loop through the area
      if the previous index is smaller than the current index highlighted
        swap it
      else
      continue to the next index

  recursion


'''

**best case**
everything is already in order


**worst case**
if we are sorting from smallest to biggest
and the array is biggest to smallest

---

### Selection sort
**explain**
goes through the array, it works on a number and goes throught the entire array just to find any number smaller then it switches it with that number. then it goes to the next number in line, and compares that to the rest of the array to find anything smaller than itself and the smallest and then switches.
this continues all the way to the end.

**Psuedo Code**

'''
        make base case
        if there is no swapping
          return the array

        else
          for loop through the array
            for loop the to compare the number selected to the rest of the numbers in the array
            declare a variable the will hold the smallest number
            if the number going through smaller than the small variable
            set the number to the small variable
            when it hits the end of the array
            switch that with the number highlighted in the first for

'''

**best case**
if the the best and worst case is the same
no matter what the sort has to go through the whole array


**worst case**
same as best