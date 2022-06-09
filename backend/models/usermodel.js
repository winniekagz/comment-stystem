const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")

const userSchema=new mongoose.Schema({

    username: { type: "String", required: true },
    email: { type: "string", required: true },
    password: { type: "String", required: true },
    pic: {
      type: "String",
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    firstName: { type: "String", required: true },
    lastName: { type: "String", required: true },
  
}, { timestaps: true })


userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("users", userSchema);

module.exports = User;
