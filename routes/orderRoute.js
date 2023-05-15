const express = require('express');
const {
  getAllOrder,
  createOrder,
  deleteOrder,
  updateOrder,
  GetAllOrderUser
} = require('../services/orderService');

const authService = require('../services/authService');

const router = express.Router();



router.route('/').get(
authService.protect,
authService.allowedTo('admin'),
 getAllOrder
  );

router.route('/').post(
  authService.protect,
  createOrder);

   router.route('/:id').delete(
    authService.protect,
    
    deleteOrder);
    router.route('/:id').put(
    authService.protect,
    authService.allowedTo('admin'),
     updateOrder);
     router.route('/get').get(
      authService.protect,
    
      GetAllOrderUser
        );





module.exports = router;
