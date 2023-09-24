const express = require('express');
const PORT = 3000;
const app = express();

const expressConfigurator = require('./config/expressConfig');
const hbsConfigurator = require('./config/hbsConfig');
const homeController = require('./controllers/homeController');
const catController = require('./controllers/catController');

// express config (static)
expressConfigurator(app);
//hbs config
hbsConfigurator(app);


app.use(homeController);
app.use('/cats', catController);

app.get('*', (req, res) => {
    res.redirect('/404');
});

app.listen(PORT, () => console.log(`Server is listening on ${PORT}...`));


