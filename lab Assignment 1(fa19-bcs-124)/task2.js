const prompt = require('prompt-sync')({sigint: true});



let val= "23618";

//const numbers = [1, 2, 3, 4, 5, 6];

/* let numbers=[2,3,6,1,8]



function sum_reducer(accumulator, currentValue) {

  return accumulator + currentValue;

}



let sum = numbers.reduce(sum_reducer);

console.log(sum); 

    */



const numbers = [65, 44, 12, 4];





function Function(numb) {

   let  sum=0;

    for(let i = 0; i <= numb.length; i++){

        if(i % 2 == 0){

            sum = sum + numb[i];

        }

        

    } 

    console.log(sum);

    }  

 

 



const newArr = numbers.map(Function) 

 function sqcu(){

   for(let i=0; i<=10; i++){

    console.log("the square of 0 to 10 number is  is",i*i);

    console.log("the cube of 1 to 10 ",i**i);



   }



}

console.log(sqcu())

 

 function alphabet_order(str)

  {

return str.split('').sort().join('');

  }

console.log(alphabet_order("comsats")); 

 function first_last_1(nums)

{

  var end_pos = nums.length - 1;

  return nums[0] == 10 || nums[end_pos] == 10;

}





console.log(first_last_1([10, 3, 5]));

console.log(first_last_1([1, 3, 5, 10]));

console.log(first_last_1([2, 4, 6]));





    function kthDigitFromLast(n, k)

{

     

    // If k is less than equal to 0

    if (k <= 0)

    {

      console.log(-1);

        return;

    }

    var temp = String(n);

     

    // If k is greater than length of the

    // string temp

    if (k > temp.length)

    {

      console.log(-1);

    }

     

    // Print the k digit from last

    else

    {

        var req = temp.charAt(temp.length - k)

         

        // Convert to number again

        console.log(Number(req));

    }

}

var n = 23617;

var k = 4;

 



kthDigitFromLast(n, k);

 



let numStr = [2,3,6,1,7];



function getSum(total, num) {

  return total + (num%2===0?num:0);

}

var my_sum = numStr.reduce(getSum, 0);



console.log(my_sum)









// wovel





function str_vowel()

{

	var str=prompt("Enter the string\n", " ");

	for(var i = 0; i<str.length; i++)

	{

		if (str.charAt(i) =='a' || str.charAt(i) == 'e' || str.charAt(i) =='i'

		|| str.charAt(i) == 'o' || str.charAt(i) == 'u' || str.charAt(i) == 'A' ||

		str.charAt(i) == 'E' || str.charAt(i) =='I' || str.charAt(i) =='O' || str.charAt(i) == 'U')

		{

			console.log("The entered string is:" +str);

			console.log("The leftmost vowel is :"+str.charAt(i));

			var pos = i+1;

			console.log("The position of the leftmost vowel " +str.charAt(i)+ " is:" +pos+"\n");

			exit;

		}

	}

	console.log("The entered string is:" +str);

	console.log("The entered string has no vowels");}

  console.log(str_vowel()); 



  var str=prompt("Enter the numbers");



  function reverse_a_number(n)

{

	n = n + "";

	return n.split("").reverse().join("");

}

console.log((reverse_a_number(str)));