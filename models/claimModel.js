const mongoose = require('mongoose');

const claimSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      },
   
    name: {
      type: String,
      
    },

    phone : {
      type: String
    }
,
    email : {
      type: String
    }
  },
  
  { timestamps: true }
);

module.exports = mongoose.model('claim', claimSchema);
