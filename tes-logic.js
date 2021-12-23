function findZAndThree() {
  for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 7 === 0) {
      console.log('Z')
    } else if (i % 7 === 0) {
      console.log(i)
    } else if (i % 3 === 0) {
      console.log(i)
    }
  }
}

findZAndThree()