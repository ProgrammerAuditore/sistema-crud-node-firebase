const router = require('express').Router();

router.get('/', (req, resp) => {
    resp.render('index.hbs');
});

module.exports = router;