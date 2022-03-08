function challenge1() {
  console.log('\n challenge 1 - sum string of values')
  console.log('method - string.split, string.replace, array.reduce')
  //clean up string by removing unwanted characters
  const data = "1 + 57 + 902 + 69 = ?"
  console.log(data)
  const clean = data.replace(/ /g, '').replace('=', '').replace('?', '')
  const numbers = clean.split('+')
  const initialValue = 0
  let sumWithInitial = numbers.reduce(
    (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue),
    initialValue
  )
  console.log(sumWithInitial.toString())
}

function challenge2() {
  console.log('\n challenge 2 - count number of words, consonants, vowels')
  console.log('method - string.split, string.replace, string.match, array.forEach')
  const data = "jaguar running jumping jungle fun time"
  console.log(data)
  const words = data.split(' ')
  const spacelessString = data.replace(/ /g, '')
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let totalWords = words.length
  let totalConsonants = 0
  let totalVowels = 0
  vowels.forEach(vowel => {
    totalVowels += (spacelessString.match(new RegExp(vowel, 'g')) || []).length
  })
  totalConsonants = spacelessString.length - totalVowels
  console.log(`${totalWords}-${totalConsonants}-${totalVowels}`)
}

function challenge3() {
  console.log('\n challenge 3 - add element to beginning of array')
  console.log('method - array.unshift')
  const data = [67, 33, 92, 100, 27]
  console.log(data)
  data.unshift(99)
  console.log(data)
}

function challenge4() {
  console.log('\n challenge 4 - sort array elements alphabetically')
  console.log('method - array.sort')
  const data = ["cat", "shark", "alligator", "turtle", "seagull"]
  console.log(data)
  data.sort()
  console.log(data)
}

function challenge5() {
  console.log('\n challenge 5 - add element to array')
  console.log('method - array.push')
  const data = ["cat", "shark", "alligator", "turtle", "seagull"]
  console.log(data)
  data.push("jaguar")
  console.log(data)
}

function challenge6() {
  console.log('\n challenge 6 - does array contain element?')
  console.log('method - array.includes')
  const data = ["cat", "shark", "alligator", "turtle", "seagull"]
  console.log(data)
  console.log("jaguar =", data.includes("jaguar"))
  console.log("cat =", data.includes("cat"))
}

function challenge7() {
  console.log('\n challenge 7 - sum values in array')
  console.log('method - array.forEach')
  const data = [10, 20, 30, 100, 27]
  console.log(data)
  let sum = 0
  data.forEach((item) => {
    sum += item
  })
  console.log(sum)
}

challenge1()
challenge2()
challenge3()
challenge4()
challenge5()
challenge6()
challenge7()
