const { Schema, model } = require('mongoose')

const DEFAULT_IMAGE =  'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_UX182_CR0,0,182,268_AL_.jpg'

const movieSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  stars: [String],
  image: {
    type: String,
    default: DEFAULT_IMAGE
  },
  description: String,
  showTimes: {
    type: [String],
    default: []
  }
})

module.exports = model("Movie", movieSchema)