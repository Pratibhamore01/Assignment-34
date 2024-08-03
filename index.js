//program to find largest number from the given array.

const marks = [ 25,50,40,99,75 ]
let largest = marks[0]
for (const num of marks)
{
    if(num>largest)
    {
        largest=num
    }
}
console.log(largest)


 
