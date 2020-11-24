var express = require('express');
const port = 3000;
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var owners = [
    {
        id: 1,
        name: "Adam",
        pets: [
            {
                id: 1,
                name: "Vera",
                type: "Dog"
            },
            {
                id: 2,
                name: "Felix",
                type: "Cat"
            }
        ]
    },
    {
        id: 2,
        name: "Kamilah",
        pets: [
            {
                id: 1,
                name: "Doug",
                type: "Dog"
            }
        ]
    }
];


// GET /api/owners
app.get('/api/owners', (req, res) => {
    res.send(owners);
})

// GET /api/owners/:id
app.get('/api/owners/:id', (req, res) => {
    res.send(owners);
})

// POST /api/owners
app.post('/api/owners', (req, res) => {
    res.send(owners);
})


// PUT /api/owners/:id
app.put('/api/owners/:id', (req, res) => {
    res.send(owners);
})


// DELETE /api/owners/:id
app.delete('/api/owners/:id', (req, res) => {
    res.send(owners);
})


// GET /api/owners/:id/pets
app.get('/api/owners:id/pets', (req, res) => {
    res.send(owners);
})


// GET /api/owners/:id/pets/:petId
app.get('/api/owners/:id/pets/:petId', (req, res) => {
    res.send(owners);
})


// POST /api/owners/:id/pets
app.post('/api/owners/:id/pets', (req, res) => {
    res.send(owners);
})


// PUT /api/owners/:id/pets/:petId
app.put('/api/owners/:id/pets/:petId', (req, res) => {
    res.send(owners);
})


// DELETE /api/owners/:id/pets/:petId
app.delete('/api/owners/:id/pets/:petId', (req, res) => {
    res.send(owners);
})


app.listen(3000, function(){
    console.log('Pets API is now listening on port 3000...');
})