const express = require('express');
const PORT = 3000;
const app = express();

const expressConfigurator = require('./config/expressConfig');
const hbsConfigurator = require('./config/hbsConfig');
const homeController = require('./controllers/homeController');

// express config (static)
expressConfigurator(app);
//hbs config
hbsConfigurator(app);


app.use(homeController);

app.listen(PORT, () => console.log(`Server is listening on ${PORT}...`));


