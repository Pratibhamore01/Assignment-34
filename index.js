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

//Program to find the sum of odd numbers from the given array.

const number = [ 3,6,4,5,9,2 ];
console.log(number)
let sum=0;

for(let i=0 ; i<number.length ; i++)
{
    if(number[i]% 2==1)
    {
        sum += number[i];
    }
    
}
console.log (`Sum of a odd numbers are ${sum}`)


