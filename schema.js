//import mongoose from 'mongoose';
const mongoose = require("mongoose")
const { Schema } = mongoose;

const issuerSchema = new Schema({
    bookName: String,
    issuerName: String,
    duedate: String
});

module.exports = mongoose.model("firstmongoose", issuerSchema, "Library_database")