const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const url = process.env.MONGOOSE_URI;

console.log(`Connecting to ${url}...`);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(response => {
        console.log(`Connected to MongoDB.`);
    })
    .catch(error => {
        console.log(`Could not log to MongoDB: ${error.message}.`);
    })

    const personSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true,
            minLength: 3
        },
        number: {
            type: String,
            required: true,
            minLength: 8
        }
    });

    personSchema.plugin(uniqueValidator);

    personSchema.set('toJSON', {
        transform: (document, returnedObject) => {
            returnedObject.id = returnedObject._id.toString();
            delete returnedObject._id
            delete returnedObject.__v
        }
    });

    module.exports = mongoose.model('Person', personSchema);