


const express = require('express');
const app = express();
const port = 80;

// this is the 404 page as it is the last route
// that is found when everything else hasn't responded
app.use((req, res, next)=>{
	res.send("<h1>404 oops :(</h1>");
});

app.get('/', (req, res) => {
	res.send("site under construction");
});

app.get('/donate', (req, res) => {
	res.send("donate!");
});

app.listen(port, ()=>{
	console.log(`listening on port ${port}`);
});
