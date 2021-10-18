
const express = require('express')


const createRouter = function(data){
    

    const router = express.Router()


    router.get('/', (req, res) => {
        res.json(data)
      })
      
      
    router.get('/:id', (req, res) => {
        const id = req.params.id
        res.json(data[id])
    })


    router.post('/', (req, res) => {
        const newdata = req.body
        data.push(newdata)
        res.json(data)
    })


    router.delete('/:id', (req, res) => {
    const id = req.params.id
    data.splice(id, 1)
    res.json(data)
    })


    router.put('/:id', (req, res) => {
    const id = req.params.id
    const updatedData = req.body
    data[id] = updatedData
    res.json(data)
    })


    return router;


}


module.exports = createRouter;

