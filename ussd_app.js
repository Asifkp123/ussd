const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('USSD App is running. Use POST /ussd for USSD requests.');
});

app.post('/ussd', (req, res) => {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;
    let response = '';
    if (!text) {
        response = `CON Language Frameworks:
1. Java
2. Python
3. PHP
4. JavaScript`;
    } else {
        const textArray = text.split('*');
        const userInput = textArray[0];
        switch (userInput) {
            case '1':
                response = `END Java Frameworks:
1. SpringBoot
2. Apache Struts`;
                break;
            case '2':
                response = `END Python Frameworks:
1. Flask
2. Django
3. PyTorch`;
                break;
            case '3':
                response = `END PHP Frameworks:
1. Laravel
2. Symfony
3. CodeIgniter`;
                break;
            case '4':
                response = `END JavaScript Frameworks:
1. NodeJS
2. ReactJS
3. TypeScript`;
                break;
            default:
                response = `END Invalid option.`;
                break;
        }
    }
    res.set('Content-Type', 'text/plain');
    res.send(response);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});