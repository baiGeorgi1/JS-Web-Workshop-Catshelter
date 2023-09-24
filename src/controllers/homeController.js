const router = require('express').Router();
const catManager = require('../managers/catManager');


router.get('/', (req, res) => {
    const allCats = catManager.getAll();

    res.render('home', { allCats });

});


module.exports = router;