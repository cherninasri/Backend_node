
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');
const asyncHandler = require('express-async-handler');

const user= require('../models/userModel');



const{CreateUser,findOne,delteOne,getAll,updateOne}=require('./Hfactory');



exports.userCreate=CreateUser(user);
    
exports.deleteOneUser=delteOne(user);

exports.FindAllUser=getAll(user);

exports.updateOneUser=updateOne(user);
exports.changeRole=asyncHandler(async(req,res,next)=>{

  const userr= req.body.user
  const role=req.body.role

  const DOC = await user.findByIdAndUpdate(userr, {role}, {
    new: true,
  });

  if (!DOC) {
    return next(
      new ApiError(`No document found for this id: ${req.params.id}`, 404)
    );
  }

  // To trigger 'save' event when update document
  //const doc = await document.save();

  
  res.status(200).json({ data: DOC });
});



exports.findMe=asyncHandler(async(req,res,next)=>{

  const IDUSER= req.user._id
  const DOC = await user.findOne({_id:IDUSER })
 res.status(200).json({data:DOC})
});

exports.updateMe=asyncHandler(async(req,res,next)=>{
  const IDUSER= req.user._id
  console.log(IDUSER)
  const DOC = await user.findByIdAndUpdate(IDUSER, req.body, {
    new: true,
  });
 res.status(200).json({data:DOC})
});

