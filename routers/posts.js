const express  = require('express');	
const router = express.Router();

//index
router.get('/', (req, res) => {
    res.send('return all post here');
});


//show
router.get('/:id', (req, res) => {
      
        //console.log(req);
        const pizzaId = req.params.id;
        res.send(`return post with id ${pizzaId}`);	
})


// store
router.post('/', (req, res) => {
    res.send('store a new post');
})


// update
router.put('/:id', (req, res) => {
    res.send(`update the post with an id of ${req.params.id}`);
})


//partial update
router.patch('/:id', (req, res) => {
    res.send(`modify the post with an id of ${req.params.id}`);	
})


//delete
router.delete('/:id', (req, res) => {
    res.send(`delete the post with an id of ${req.params.id}`);
})

module.exports = router;