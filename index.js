const express = require('express');

const app = express();

const cors = require('cors');

// MiddleWare 
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const users = [
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com'},
    {id: 2, name: 'Sabnur', email: 'Sabnur@gmail.com'},
    {id: 3, name: 'Sabila', email: 'Sabila@gmail.com'},
    {id: 4, name: 'Nabila', email: 'Nabila@gmail.com'},
    {id: 5, name: 'Kabila', email: 'Kabila@gmail.com'},
    {id: 6, name: 'Babila', email: 'Babila@gmail.com'},
]

app.get('/', (req, res) => {
    res.send("I'm Coming, Don't Worry.")
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    console.log('Post API Hitting')
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);

    res.send(newUser)
})


app.listen(port, () => {
    console.log('User Management Server is Running on port: ', port)
})