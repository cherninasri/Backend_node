const mongoose = require('mongoose');

const RecuSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      },
   
    User: {
      type: mongoose.Schema.ObjectId,
      ref: 'user',
      required: [true, 'Order must be belong to user'],
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: 'product',
      required: [true, 'Order must be belong to product'],
     
 },
 
  },
  
  { timestamps: true }
);

RecuSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'product',
    select: 'title imageCover ',
  });

  next();
});

module.exports = mongoose.model('Recu', RecuSchema);
