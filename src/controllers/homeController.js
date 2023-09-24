const router = require('express').Router();
const catManager = require('../managers/catManager');


router.get('/', (req, res) => {
    const { search } = req.query;
    let allCats = catManager.getAll(search);
    res.render('home', { allCats });

});
router.get('/search', (req, res) => {

});
router.get('/404', (req, res) => {
    res.render('404');
});


module.exports = router;