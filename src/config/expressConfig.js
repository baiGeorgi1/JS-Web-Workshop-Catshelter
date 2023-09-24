const express = require('express');

function expressConfigurator(app) {
    app.use(express.static('../content'));
    app.use(express.urlencoded({ extended: false }));
}

module.exports = expressConfigurator;