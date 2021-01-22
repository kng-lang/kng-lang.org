


const express = require('express');
const app = express();
const port = 88;

app.get('/', (req, res) => {
	res.send("<center><div><h1>site under construction :)</h1><p>want to contribute? head over to <a href='http://github.com/kng-ecosystem/kng-lang.org'>the github</a></p><a href='https://www.patreon.com/bePatron?u=49238365' data-patreon-widget-type='become-patron-button'>Become a Patron!</a><script async src='https://c6.patreon.com/becomePatronButton.bundle.js'></script></div></center>");
});

app.get('/donate', (req, res) => {
	res.send("donate!");
});

app.listen(port, ()=>{
	console.log(`listening on port ${port}`);
});
