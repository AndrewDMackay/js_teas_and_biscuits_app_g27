
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


const teas = [
  { name: "Early Grey", brand: "Twinings" },
  { name: "Irish Breakfast", brand: "Barry's Tea" },
  { name: "Lemon and Ginger", brand: "Lipton" },
  { name: "Rooibos", brand: "Tick Tock" },
  { name: "Green", brand: "Clipper" }
];


app.get('/api/teas', (req, res) => {
  res.json(teas)
})


app.get('/api/teas/:id', (req, res) => {
  console.log(req.params)
})



app.listen(5000, function () {
  console.log(`App running on port ${ this.address().port }`);
});

