const faker = require('faker');
const express = require('express');
const app = express();

app.use(express.static("public"));

faker.locale = 'pt_BR';

app.get('/', (req, res) => {
    const avatar = faker.image.avatar();
    const name = faker.name.findName();
    const gender = faker.name.gender();
    const birthDate = `${faker.date.past(50, 2000).getDay()}/${faker.date.past(50, 2000).getMonth()}/${faker.date.past(50, 2000).getFullYear()}`;
    const email = faker.internet.email();
    const password = faker.internet.password();


    return res.send(
        person = {
            avatar,
            name,
            gender,
            birthDate,
            email,
            password
        }
    )
});

app.listen(3000, () => {
    console.log('app rodando no https://localhost:3000')
})