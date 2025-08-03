import mongoose from "mongoose";

const foodSchema = new mongoose.Schema ({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
}, { collection: "food_list" }) // <-- specify collection name here

const foodModel = mongoose.models.food_list || mongoose.model("food_list", foodSchema);

export default foodModel;