const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://null:jest@learning-jest.36ofcrz.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (err) {
    console.error(err);
  }
}

module.exports = { connect };
