const mongoose = require("mongoose");

let planSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Kindly pass the name"],
        unique:[true,"Plan name should be unique"],
        maxlength:[40,"your plan length is moret than 40 characters"]
    },
    duration:{
        type:Number,
        required:[true,"You need to provide duration"]
    },
    price:{
        type:Number,
        required:[true,"You need to provide Price"]
    },
    discount:{
        type:Number,
        validate:{
            validator:function(){
                return this.discount<this.price;
            },
            message:"Discount must be less than actual price"
        }
    },
    reviews:{
        type:[mongoose.Schema.ObjectId],
        ref:"foodReviewModel"
    },
    averageRating:{
        type:Number
    }
})

const foodPlanModel = mongoose.model('foodPlanModel',planSchema);

module.exports = foodPlanModel;