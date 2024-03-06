const express = require('express');

const app = express();

let rps = 0;


app.get(/(.*)/, (req, res) => {
	res.send('uwu')
	rps++;
})

app.listen(3000, () => {
  console.log('listening port 3000');
  rpsdisplay();
});

async function rpsdisplay() {
	setInterval(() => {
		const now = new Date()
		const date = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
		console.log(`[${date}] rps: \x1b[38;5;46m${rps}\x1b[0m`);
        rps = 0;
	}, 1000)
}