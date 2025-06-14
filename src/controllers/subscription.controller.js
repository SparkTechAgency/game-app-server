const httpStatus = require("http-status");
const { subscriptionService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const response = require("../config/response");



// show the subscription 
//--------------------------------------------------------
const showSubscription=catchAsync(async(req,res)=>{

    const result=await subscriptionService.showSubscription()

    // Return the success response
   res.status(httpStatus.OK).json(
    response({
      message: "showing all the subscription  ",
      status: "OK",
      statusCode: httpStatus.OK,
      data: result,
     
    })
  );
})
// show the updatedsubscription 
//--------------------------------------------------------
const updateSbuscription=catchAsync(async(req,res)=>{
    const data=req.body
    console.log(data);

    const result=await subscriptionService.updateSbuscription(data)

    // Return the success response
   res.status(httpStatus.OK).json(
    response({
      message: "updateing the subscription  ",
      status: "OK",
      statusCode: httpStatus.OK,
      data: result,
     
    })
  );
})


module.exports={
    showSubscription,
    updateSbuscription
}