const express = require('express');
const app = express();
const path = require('path');

app.set('port', 3078);

app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'), () => console.log(`${app.get('port')}`));