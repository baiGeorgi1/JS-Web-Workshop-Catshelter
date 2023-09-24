const router = require('express').Router();
const catManager = require('../managers/catManager');


router.get('/', (req, res) => {
    const allCats = catManager.getAll();

    res.render('home', { allCats });

});
router.get('/404', (req, res) => {
    res.render('404');
});


module.exports = router;