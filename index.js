require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const Person = require('./models/person');
const app = express();

morgan.token('body', (req, res) => JSON.stringify(req.body));

app.use(express.json());
app.use(express.static('build'));
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms - :body'));

const errorHandler = (error, request, response, next) => {
    console.error(error.message);

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' });
    } else if (error.name === 'ValidationError') {
        return response.status(400).send({ error: error.message });
    }
    next(error);
}

//Homepage
app.get('/', (request, response) => {
    response.send('<h1>Welcome to Phonebook!</h1>');
});

//Displays info page
app.get('/info', (request, response) => {
    Person.find({})
        .then(person => {
            response.send(`
                <p>There is info for ${person.length} people.</p>
                <p>${new Date()}</p>
            `);
        })
});

//Displays all persons
app.get('/api/persons', (request, response, next) => {
    Person.find({})
        .then(person => {
            response.json(person);
        })
        .catch(error => next(error));
});

//Displays a single person
app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
        .then(person => {
            if (person) {
                response.json(person);
            } else {
                response.status(404).end();
            }
        })
        .catch(error => next(error));
});

//Adds a person
app.post('/api/persons', (request, response, next) => {
    const body = request.body;
    
    if (!body.name || !body.number) {
        response.status(400).json({
            error: 'content missing'
        });
        return;
    } /* else if (persons.some(p => p.name === body.name)) {
        response.status(400).json({
            error: 'names must be unique'
        });
    } */

    const personToAdd = new Person ({
        name: body.name,
        number: body.number
    })

    personToAdd.save().then(savedPerson => {
        response.json(savedPerson);
    })
    .catch(error => next(error));
});

//Deletes a person
app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end();
        })
        .catch(error => next(error));
});

//Updates a person
app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body;

    const personToUpdate = {
        name: body.name,
        number: body.number
    }

    Person.findByIdAndUpdate(request.params.id, personToUpdate, {new: true, runValidators: true, context: 'query'})
        .then(updatedPerson => {
            response.json(updatedPerson);
        })
        .catch(error => next(error));
});

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
