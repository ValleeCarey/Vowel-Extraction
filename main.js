let input = 'a whale of a deal!'
const vowels = ["a","e","i",'o',"u"]

//console.log(vowels)
//vowels will be stored in result array
resultArray = []

for (let i = 0; i < input.length; i++) {
 //console.log('i is' + i) 
  for (let j = 0; j < vowels.length; j++) { 
    // if the value on input iterator is equal to the value of vowels iterator 
    if (input[i] === vowels[j]) {
      //if input iterator equal e then push into result array 
    if (input[i] === 'e') { 
  resultArray.push('e')
  }
      //if input equal u then push into result
  else if (input[i] === 'u') {
  resultArray.push('u')
  } else { 
    //push input iterator into result array
  resultArray.push(input[i])
  }
  }
  }
  }
//join the vowels array in all capital letters
console.log(resultArray.join(' ').toUpperCase())
