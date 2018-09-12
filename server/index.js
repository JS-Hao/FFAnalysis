const app = require("express")();
const axios = require("axios");
const conf = require("../config");
const iconv = require("iconv-lite");
const router = require("./routers/list");

// app.use("/list", router);

// app.listen(conf.port, () => {
// 	console.log(`the server is listening on localhost: ${conf.port}`);
// });

axios({
	method: "GET",
	baseURL: conf.baseURL,
	url: conf.api,
	params: {
		[conf.page]: 1,
		[conf.keywords]: "iphone6"
	},
	headers: {
		"accept-encoding": "gzip, deflate, br"
	},
	responseType: "arraybuffer"
})
	.then(result => {
		const temp = iconv.decode(result.data, conf.charset).trim();
		const data = JSON.parse(temp.substring(1, temp.length - 1));
		console.log(data);
	})
	.catch(error => {
		console.error(error);
		// handleError(res, error);
	});

// setInterval(() => {}, 1000);
