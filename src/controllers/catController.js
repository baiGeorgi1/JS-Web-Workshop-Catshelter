const router = require('express').Router();
const catManager = require('../managers/catManager');
const uniq = require('uniqid');

router.get('/add-cat', (req, res) => {
    res.render('addCat');
});
router.post('/add-cat', (req, res) => {
    console.log(req.body);

    const { name,
        description,
        image,
        breed } = req.body;
    console.log({
        name,
        description,
        image,
        breed
    });
    catManager.addCat({
        name,
        description,
        image,
        breed
    });
    res.redirect('/');
});
router.get('/add-breed', (req, res) => {
    res.render('addBreed');
});
router.post('/add-breed', (req, res) => {
    const breed = req.body;

    catManager.addBreed(breed);
    res.render('addBreed');
});

module.exports = router;