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
    const id = req.params.id;
    let ownersId = owners.find((ownersId) => {
        return ownersId.id === Number(id)
    });
    res.status(200).send(ownersId);
})

// POST /api/owners
app.post('/api/owners', (req, res) => {
    owners.push({
        id: req.body.id,
        name: req.body.name,
        pets: req.body.pets
    });
    req.body.id++;

    res.status(200).json({
        message: "Order created succesfully"
    })
})

// NOT DONE
// PUT /api/owners/:id
app.put('/api/owners/:id', (req, res) => {
    res.send(owners);
})


// DELETE /api/owners/:id
app.delete('/api/owners/:id', (req, res) => {
    const id = req.params.id;

    let ownersId = owners.find((ownersId) => {
        return ownersId.id === Number(id)
    });

    let ownersIndex = owners.findIndex((i) => {
        return i === ownersId;
    })

    if (ownersIndex > -1) {
        owners.splice(ownersIndex, 1);
    }
    res.status(200).send(owners);
})

//DOESN'T GET JUST THE PETS
// GET /api/owners/:id/pets
app.get('/api/owners/:id/pets', (req, res) => {
    const pets = req.params.pets;
    let ownersIdPets = owners.find((ownersIdPets) => {
        return ownersIdPets.pets;
    });
    console.log(pets);
    console.log(ownersIdPets);
    res.status(200).send(ownersIdPets);
})

//COULDN'T FIGURE OUT
// GET /api/owners/:id/pets/:petId
app.get('/api/owners/:id/pets/:petId', (req, res) => {
    const pets = req.params.id;
    const petId = req.params.petId;
    let ownersId = pets.find((ownersId) => {
        return ownersId.id === Number(pets)
    });
    let ownersPetId = ownersId[petId];
    console.log(petId);
    res.status(200).send(ownersPetId);
})

// NOT DONE
// POST /api/owners/:id/pets
app.post('/api/owners/:id/pets', (req, res) => {
    res.send(owners);
})

// NOT DONE
// PUT /api/owners/:id/pets/:petId
app.put('/api/owners/:id/pets/:petId', (req, res) => {
    res.send(owners);
})

// NOT DONE
// DELETE /api/owners/:id/pets/:petId
app.delete('/api/owners/:id/pets/:petId', (req, res) => {
    res.send(owners);
})


app.listen(3000, function(){
    console.log('Pets API is now listening on port 3000...');
})