const router = require('express').Router();
const catManager = require('../managers/catManager');

router.get('/add-cat', (req, res) => {
    const allBreed = catManager.getAllBreeds().sort();

    res.render('addCat', { allBreed });
});
router.post('/add-cat', (req, res) => {
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
    const cat = catManager.getCatById(req.params.catId);
    res.render('catShelter', { cat });
});
router.get('/edit-cat/:catId', async (req, res) => {
    const cat = await catManager.getCatById(req.params.catId);

    if (!cat) {
        return res.redirect('/404');
    }
    const allBreed = catManager.getAllBreeds();
    res.render('editCat', ({ cat, allBreed }));
});
router.post('/edit-cat/:catId', async (req, res) => {
    const cat = catManager.getCatById(req.params.catId);
    const { name, description, image, breed } = await req.body;
    catManager.edit({ cat, name, description, image, breed });
    res.redirect('/');
});


module.exports = router;