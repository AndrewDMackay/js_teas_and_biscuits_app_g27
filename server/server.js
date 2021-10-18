
const express = require('express');
const createRouter = require('./helpers/create_router.js')
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());


const teas = [
  { name: "Early Grey", brand: "Twinings" },
  { name: "Irish Breakfast", brand: "Barry's Tea" },
  { name: "Lemon and Ginger", brand: "Lipton" },
  { name: "Rooibos", brand: "Tick Tock" },
  { name: "Green", brand: "Clipper" }
];


const biscuits = [
  { name: "Digestives", brand: "McVitie's" },
  { name: "Hobnobs", brand: "McVitie's" },
  { name: "Shortbreads", brand: "Walkers" },
  { name: "Jammy Dodgers", brand: "Burton's" },
  { name: "Custard Creams", brand: "Crawford's" }
];


const teasRouter = createRouter(teas)
app.use('/api/teas', teasRouter)


const biscuitsRouter = createRouter(biscuits)
app.use('/api/biscuits', biscuitsRouter)


app.listen(5000, function () {
  console.log(`App running on port ${ this.address().port }`);
});


// Task [ 15 minutes ]..

// Implement the following routes where the parameter id refers to tea's index position in the array:


// Destroy:
// Handle a delete request made to /api/teas/:id
// Delete the appropriate tea object in the array..
// Send back all the teas data as JSON..


// Update:
// Handle a put request made to /api/teas/:id
// Update the appropriate tea object in the array with the new tea object sent on the request's body object..
// Send back all the teas data as JSON..

