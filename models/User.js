const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        salutation: { type: String, required: false, unique: false },
        firstName: { type: String, required: false, unique: false },
        lastName: { type: String, required: false, unique: false },
        birthDay: { type: Date, required: false, unique: false },
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        number: { type: String, required: false, unique: false },
        password: { type: String, required: true },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("User", UserSchema);