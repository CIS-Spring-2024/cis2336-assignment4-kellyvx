const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/order', (req, res) => {
  
    const { item1, item2, item3 } = req.body;
 
    const totalAmount = calculateTotal(item1, item2, item3);
    res.redirect(`/confirmation?total=${totalAmount}`);
});

app.get('/confirmation', (req, res) => {
    const totalAmount = req.query.total;
    res.send(`Your total order amount is: $${totalAmount}`);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});


function calculateTotal(item1, item2, item3) {
  
    const pricePerItem = 5;
    const total = (parseInt(item1) + parseInt(item2) + parseInt(item3)) * pricePerItem;
    return total;
}

function addToCart() {
    var foodItem = document.getElementById("foodItem").value;
    var quantity = document.getElementById("quantity").value;
    
    var cartItems = document.getElementById("cartItems");
    var listItem = document.createElement("li");
    listItem.textContent = quantity + "x " + foodItem;
    cartItems.appendChild(listItem);
    
  
  }