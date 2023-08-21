import mongoose from "mongoose";

 const dataSchema = mongoose.Schema({
    dolar: {
      type: String,
      required:true
    }
   
  },{ versionKey: false });


  export default mongoose.model('DollarPrice', dataSchema);
   