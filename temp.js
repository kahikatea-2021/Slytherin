function parselTongue(str) {
  const outputArray = []
  const characters = str.split('')
  characters.forEach(character =>{
    if (character === 'S') {
      outputArray.push('Sssss')
    } else if (character === 's') {
      outputArray.push('sssss')
    } else {
      outputArray.push(character)
    }
  })
  const newString = outputArray.join('')
  return newString
}