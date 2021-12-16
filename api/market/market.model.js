const mongoose = require('mongoose')
const { Schema } = mongoose

const MarketSchema = new Schema({
  title : {
    type: String,
    required: true,
  },
  description : {
    type: String,
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  address : {
  street : String,
  city: String,
  state: String,
  country: String,
  postcode: String,
  coordinates: {
    latitude: String,
    longitude: String,
  },
  timezone: {
    offset: String,
    description: String,
  }
  },
  virtual: {
    type: Boolean,
  },
  thumbnail: {
    large: String,
    medium: String,
    thumbnail: String,
  },
  category: [],
  images: [],
  // productId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Product',
  //   required: true,
  // },
})

module.exports = mongoose.model('Market', MarketSchema)
