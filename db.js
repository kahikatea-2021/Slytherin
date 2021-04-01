const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile")[environment];
const connection = require("knex")(config);

module.exports = {
  parselTongue,
  getHistory,
  addHistoryItem
};

function parselTongue(str) {
  const outputArray = []
  const characters = str.split('')
  characters.forEach(character => {
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

// stretch goal - to feed the historical comments page
function getHistory (db = connection) {
  return db('history')
    .select('name', 'message')
    .then(result => {
      return {
        history: result
      }
    })
}

// stretch goal - to feed the translated text and name from the form into a new db entry
function addHistoryItem (data, db = connection) {
  return db('history')
    .insert({
      name: data.name,
      message: data.message
    })
    .then( => {
      console.log('history item created')
    })
}