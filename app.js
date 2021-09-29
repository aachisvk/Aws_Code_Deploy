
const express = require('express');
const app = express();
const PORT = 8080;
app.use(express.json());
const products = [
    {
        name: 'iPhone 13',
        color: 'White',
        company: 'Apple'
    },
    {
        name: 'OnePlus 9',
        color: 'Blue',
        company: 'Oneplus'
    },
    {
        name: 'iPhone 12',
        color: 'Purple',
        company: 'Apple'
    }
]

app.listen(PORT, () => console.log(`API 🟢`))

app.get('/products', (req, res) => { res.status(200).send(products)
})
