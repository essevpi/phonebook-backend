const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

morgan.token('body', (req, res) => JSON.stringify(req.body));

app.use(express.json());
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms - :body'));

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

//Homepage
app.get('/', (request, response) => {
    response.send('<h1>Welcome to Phonebook!</h1>');
});

//Displays info page
app.get('/info', (request, response) => {
    response.send(`
        <p>There is info for ${persons.length} people.</p>
        <p>${new Date()}</p>
    `);
});

//Displays all persons
app.get('/api/persons', (request, response) => {
    response.json(persons);
});

//Displays a single person
app.get('/api/persons/:id', (request, response) => {
    const personId = Number(request.params.id);
    const person = persons.find(p => p.id === personId);
    
    if (person) {
        response.json(person);
    } else {
        response.status(404).end();
    }
});

//Adds a person
app.post('/api/persons', (request, response) => {
    const body = request.body;
    
    if (!body.name || !body.number) {
        response.status(400).json({
            error: 'content missing'
        });
    } else if (persons.some(p => p.name === body.name)) {
        response.status(400).json({
            error: 'names must be unique'
        });
    }

    const personToAdd = {
        id: Math.floor(Math.random() * 500),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(personToAdd);

    response.json(personToAdd);
});

//Deletes a person
app.delete('/api/persons/:id', (request, response) => {
    const personId = Number(request.params.id);
    persons = persons.filter(person => person.id !== personId);

    response.status(204).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
