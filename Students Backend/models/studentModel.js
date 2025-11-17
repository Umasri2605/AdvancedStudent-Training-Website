var mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
  "name": {
    type:String,
    required:true,
},
  "age":{
    type:Number,
    required:true,
},
  "gender": {
    type:String,
    required:true,
},    
  "course": {
    type:String,
    required:true,
},      
  "totalFee":{ 
    type:String,
    required:true,
},
  "amountPaid":{ 
    type:String,
    required:true,
},
  "due":{ 
    type:String
},
"installmentsPaid":{
  type:String
},
startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },

    courseStatus: {
      type: String,
      enum: ["Running", "Completed", "Not Started"],
      default: "Not Started",
    },
  },
  { timestamps: true }
);

studentSchema.pre("save", function (next) {
  const today = new Date();
  if (today < this.startDate) {
    this.courseStatus = "Not Started";
  } else if (today > this.endDate) {
    this.courseStatus = "Completed";
  } else {
    this.courseStatus = "Running";
  }
  next();
});


var studentsdataModel=mongoose.model("student",studentSchema);
module.exports =studentsdataModel;