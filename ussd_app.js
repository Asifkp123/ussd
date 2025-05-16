const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add a root route for debugging
app.get('/', (req, res) => {
    res.send('USSD App is running. Use POST /ussd for USSD requests.23 29');
});

// USSD endpoint
app.post('/ussd', (req, res) => {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;
    let response = '';
    if (!text) {
        response = `CON Language Frameworks:
1. ASIF
2. FAZIL
3. IRSHAD
4. JavaScript`;
    } else {
        const textArray = text.split('*');
        const userInput = textArray[0];
        switch (userInput) {
            case '1':
                response = `END Java Frameworks:
1. ASIF ASIFASIFASIFASIF
2. Apache Struts`;
                break;
            case '2':
                response = `END Python Frameworks:
1. FAZIL FAZIL FAZIL
2. Django
3. PyTorch`;
                break;
            case '3':
                response = `END PHP Frameworks:
1. IRSHAD IRSHADIRSHADIRSHAD
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

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});