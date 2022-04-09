const mongoose = require("mongoose");

const Register = new mongoose.Schema({
    memeberId: {
        type: String,
        required: true
    },
    parentId: {
        type: String,
        required: true
    },
    membername: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    teams: {
        type: Array,
        required: false
    },
    mobilenumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    joiningdate: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: false
    },
    pincode: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    nominename: {
        type: String,
        required: false
    },
    relation: {
        type: String,
        required: false
    },
    bankname: {
        type: String,
        required: true
    },
    bankbranch: {
        type: String,
        required: true
    },
    accountnumber: {
        type: String,
        required: true
    },
    ifsccode: {
        type: String,
        required: false
    },
    pannumber: {
        type: String,
        required: true
    },
    adharnumber: {
        type: String,
        required: true
    },
    status: {
        type: String,

    }
});

const register = mongoose.model('UsersData', Register);
module.exports = register;