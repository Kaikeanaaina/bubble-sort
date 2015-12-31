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

---

### Bubble sort
**explain**
This sorts a number by going walking the number through the line one at a time.
The first number is compared to the next numbers until it comes to a number that's bigger than it
after the first number finds its place in line, now the it's the seconds number turn to find a spot in line until it hit a number bigger in it.
We need make sure that every number in line is checked.

**Psuedo Code**

'''
set a base case


'''

---

### Merge sort
**explain**
This sort keeps on breaking the line into halves and more halves until the group has only one number in it.
Once the groups keeps breaking into more groups until it comes down to one thing in the group
each groups of numbers come back together in a line putting the smallest number first into the bigger group.
eventually, all groups will come back together in a big group from smallest to biggest.

**Psuedo Code**

''' '''

---

### Insertion sort
**explain**
This sort goes throught the whole line of numbers.
it goes to each number and checks to see if the number infront of it is bigger than itself.
if it is bigger than itself, it moves infront of the bigger previous number, until it finds a spot behind a smaller number than itself
If the whole line of numbers goes through this, it will be in order

**Psuedo Code**

''' '''

---

### Selection sort
**explain**

**Psuedo Code**

''' '''