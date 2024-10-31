const mongoose = require("mongoose");

const pariwisataSchema = new mongoose.Schema({
    tempat : {type : String, required : true},
    alamat : {type : String, required : true},
    pengelola : {type : String, required : true},
    pengunjung : [{type : String, required : true}]
})

module.exports = mongoose.model("pariwisata", pariwisataSchema);