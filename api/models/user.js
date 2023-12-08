const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verfied: {
    type: Boolean,
    default: false,
  },
  verficationToken: String,
  addresses: [
    {
      name: String,
      mobileNo: String,
      houseNo: String,
      streets: String,
      landmark: String,
      city: String,
      county: String,
      postalCode: String,
    },
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
