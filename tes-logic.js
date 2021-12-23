// 1.
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

// findZAndThree()

// 2.
let story = 'Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela oleh serigala ketika harimau mendekati gajah.'

function findAnimal() {
  const search = story.split(' ')
  for (let i = 0; i < search.length; i++) {
    if (search[i] = 'sang gajah') {
      console.log('sang gajah')
    } else if (search[i] = 'serigala') {
      console.log('serigala')
    } else if (search[i] = 'harimau') {
      console.log('harimau')
    }
  }
}

findAnimal()