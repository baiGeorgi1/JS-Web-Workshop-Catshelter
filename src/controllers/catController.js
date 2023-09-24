const router = require('express').Router();
const catManager = require('../managers/catManager');

router.get('/add-cat', (req, res) => {
    const allBreed = catManager.getAllBreeds().sort();

    console.log(allBreed);
    res.render('addCat', { allBreed });
});
router.post('/add-cat', (req, res) => {
    console.log(req.body);
    const { name,
        description,
        image,
        breed } = req.body;

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
router.get('/cat-shelter/:catId', (req, res) => {
    res.render('catShelter');
});
router.get('/edit-cat/:catId', (req, res) => {
    res.render('editCat');
});

module.exports = router;